import {FC} from 'react';
import {AppBar, Button, Container, Toolbar, Typography} from '@material-ui/core';
import {useAuth0} from '@auth0/auth0-react';
import {clearOrganizationStorages} from '../utils/auth0';

export const Layout: FC = ({children}) => {
    const {logout} = useAuth0();
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{flexGrow: 1}}>Auth0</Typography>
                    <Button
                        color="inherit"
                        onClick={
                            () => {
                                clearOrganizationStorages();
                                logout();

                            }
                        }
                    >
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
            <Container style={{padding: 20}}>
                <>{children}</>
            </Container>
        </>
    );
};