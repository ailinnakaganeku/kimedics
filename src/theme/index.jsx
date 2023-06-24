import { createTheme } from '@mui/material';

export
    const theme = createTheme({
        palette: {
            primary: {
                main: '#002D5C',
                white: '#fff'
            },
            secondary: {
                main: '#1aa39a'
            },
            tertiary: {
                main: '#3bd4ae'
            }
        },
        typography: {
            fontFamily: 'Roboto, Roboto, Arial, sans-serif',
            fontWeightBold: 700,
            fontWeightRegular: 400,
        },
    });