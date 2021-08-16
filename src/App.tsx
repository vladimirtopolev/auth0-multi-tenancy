import React from 'react';
import {withAuthenticationRequired} from '@auth0/auth0-react';
import {IndexPage} from './pages/IndexPage';
import {MultiTenancyProvider} from './components/MultiTenancyAuth0Provider';

const ProtectedPage = withAuthenticationRequired(IndexPage);

function App() {
    return (
        <MultiTenancyProvider>
            <ProtectedPage/>
        </MultiTenancyProvider>
    );
}

export default App;
