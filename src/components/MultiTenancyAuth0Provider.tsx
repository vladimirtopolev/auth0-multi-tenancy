import React, {FC, useState} from 'react';
import {OrganizationSelector} from './OrganizationSelector';
import {Auth0Provider} from '@auth0/auth0-react';
import {
    getAuthorisedOrganization,
    getTemporaryOrganization,
    isAuth0RedirectUrl, setAuthorisedOrganizationFromTemporaryStorage,
    setTemporaryOrganization
} from '../utils/auth0';

export type Organization = {
    id: string,
    name: string,
    connection: string
}

export const ORGANIZATIONS: Organization[] = [
    {
        id: '1',
        name: 'Organization One',
        connection: 'Org1'
    },
    {
        id: '2',
        name: 'Organization Two',
        connection: 'Org2'
    }];


export const MultiTenancyProvider: FC = ({children}) => {
    const [organization, setOrganization] = useState<Organization | null>(() => {
        return isAuth0RedirectUrl()
            ? getTemporaryOrganization()
            : getAuthorisedOrganization();
    });

    if (!organization) {
        return (
            <div>
                <OrganizationSelector
                    organizations={ORGANIZATIONS}
                    selectOrganization={(org) => {
                        setOrganization(org);
                        setTemporaryOrganization(org);
                    }}/>
            </div>
        );
    }
    return (
        <div>
            <Auth0Provider
                domain={process.env.REACT_APP_AUTH0_DOMAIN!}
                clientId={process.env.REACT_APP_AUTH0_CLIENT_ID!}
                redirectUri={window.location.origin}
                connection={organization.connection}
                onRedirectCallback={() => {
                    setAuthorisedOrganizationFromTemporaryStorage();
                }}
            >
                {children}
            </Auth0Provider>
        </div>
    );
};