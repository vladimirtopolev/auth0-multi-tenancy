import {FC} from 'react';
import {Layout} from '../components/Layout';
import {useAuth0} from '@auth0/auth0-react';

export const IndexPage: FC = () => {
    const { user } = useAuth0();
    return (
        <Layout>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </Layout>
    );
};
