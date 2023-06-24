import { styled } from '@mui/system';
import { Checkbox } from '@mui/material';

export const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.palette.secondary.main,
  '&.Mui-checked': {
    color: theme.palette.secondary.main,
  },
  padding: 0,
  '& .MuiSvgIcon-root': {
    fontSize: '20px',
  },
}));


export const ItemContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  paddingBottom: theme.spacing(2),
}));

export const NameText = styled('div')(({ theme }) => ({
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  maxWidth: '280px'
}));

export const Text = styled('div')(({ theme }) => ({
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  maxWidth: '280px',
  color: theme.palette.secondary.main,
  fontWeight: 500
}));

export const TotalBedsText = styled('div')(({ theme }) => ({
  color: theme.palette.secondary.main,
  marginLeft: 'auto',
}));