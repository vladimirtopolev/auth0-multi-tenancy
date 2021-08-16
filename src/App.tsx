import React from 'react';
import {Auth0Provider, withAuthenticationRequired} from '@auth0/auth0-react';
import {IndexPage} from './pages/IndexPage';

const ProtectedPage = withAuthenticationRequired(IndexPage);

function App() {
    return (
        <Auth0Provider
            domain={process.env.REACT_APP_AUTH0_DOMAIN!}
            clientId={process.env.REACT_APP_AUTH0_CLIENT_ID!}
            redirectUri={window.location.origin}
            audience={`https://${process.env.REACT_APP_AUTH0_DOMAIN!}/api/v2/`}
            scope="read:current_user"
        >
            <ProtectedPage/>
        </Auth0Provider>
    );
}

export default App;
