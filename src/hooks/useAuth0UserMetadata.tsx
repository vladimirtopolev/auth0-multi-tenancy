import {useAuth0} from "@auth0/auth0-react";
import {useEffect, useState} from 'react';

export const useAuth0UserMetadata = (domain: string) => {
    const {getAccessTokenSilently, user} = useAuth0();
    const [userMetadata, setUserMetadata] = useState({});

    useEffect(() => {
        const getUserMetadata = async () => {
            if (!user) {
                return;
            }
            try {
                const accessToken = await getAccessTokenSilently({
                    audience: `https://${domain}/api/v2/`,
                    scope: "read:current_user",
                });

                const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

                const metadataResponse = await fetch(userDetailsByIdUrl, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                const {user_metadata} = await metadataResponse.json();

                setUserMetadata(user_metadata);
            } catch (e) {
                console.log(e.message);
            }
        };
        getUserMetadata();
    }, [user]);

    return userMetadata;
};