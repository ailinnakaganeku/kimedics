import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const Container = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const Logo = styled('img')(({ theme }) => ({
  visibility: 'visible',
  [theme.breakpoints.down('sm')]: {
    visibility: 'hidden'
  },
}));
