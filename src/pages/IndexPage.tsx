import {FC} from 'react';
import {Layout} from '../components/Layout';
import {useAuth0} from '@auth0/auth0-react';
import {useAuth0UserMetadata} from '../hooks/useAuth0UserMetadata';

export const IndexPage: FC = () => {
    const { user } = useAuth0();
    const userMetadataData = useAuth0UserMetadata(process.env.REACT_APP_AUTH0_DOMAIN!);
    return (
        <Layout>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <div>User Metadata</div>
            <pre>{JSON.stringify(userMetadataData, null, 2)}</pre>
        </Layout>
    );
};
