import { styled } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material';
import { sideBarItems } from './utils/mock';
import Sidebar from './components/SideBar';

const AppContainer = styled('div')({
  display: 'flex',
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#002D5C',
      white: '#fff'
    },
    secondary: {
      main: '#3bd4ae'
    }
  },
  typography: {
    fontFamily: 'Roboto, Roboto, Arial, sans-serif',
    fontWeightBold: 700,
    fontWeightRegular: 400,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Sidebar sideBarItems={sideBarItems} />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
