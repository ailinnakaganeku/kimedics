import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { styled } from '@mui/system';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { sideBarItems } from './utils/mock';
import Sidebar from './components/SideBar';
import PageComponente from './pages/PageComponent';

const AppContainer = styled('div')({
  display: 'flex',
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppContainer>
          <Sidebar sideBarItems={sideBarItems} />
          <Routes>
            {sideBarItems?.map((item) => (
              <Route key={item.id} path={item.to} element={<PageComponente name={item.name} />} />
            ))}
          </Routes>
        </AppContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
