import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        maxWidth: 400,
        width: '100%'
    },
    formControl: {
        width: '100%',
        //color: theme.palette.primary.contrastText
    },
    label: {
        //color: theme.palette.primary.contrastText
    },
    selectIcon: {
        //color: theme.palette.primary.contrastText
    },
    select: {
        //background: '#fff'
    },
    button: {
        marginTop: 20
    }
}));