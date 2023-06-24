import { TextField } from '@mui/material';
import { styled } from '@mui/system';

export const StyledDrawer = styled('div')(({ theme }) => ({
    paddingTop: '42px',
    paddingRight: theme.spacing(2),
    display: 'flex',
    gap: theme.spacing(2),
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
        padding: '20px',
    },
}));

export const Column = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
}));

export const OptionContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
}));

export const OptionIcon = styled('div')(({ theme }) => ({
    marginRight: theme.spacing(1),
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
    minWidth: '391.2px',
    '& .MuiSvgIcon-root': {
        color: theme.palette.secondary.main,
        alignItems: 'center',
        fontSize: '18px',
        marginTop: '4px'
    },
    [theme.breakpoints.down('sm')]: {
        minWidth: '100%',
    },
}));

export const StyledSearchField = styled(TextField)(({ theme }) => ({
    marginTop: theme.spacing(2),
    width: '391.2px',
    '& .MuiSvgIcon-root': {
        color: theme.palette.secondary.main,
        alignItems: 'center',
        marginRight: theme.spacing(1),
        fontSize: '18px',
    },
    [theme.breakpoints.down('sm')]: {
        width: '100%',
    },
}));
