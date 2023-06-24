import { styled } from '@mui/system';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const collapsedWidth = 100;

export const SidebarContainer = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    width: drawerWidth,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.white,
}));

export const SidebarPaper = styled(Drawer)(({ theme, isCollapsed }) => ({
    position: 'absolute',
    width: isCollapsed ? collapsedWidth : drawerWidth,
    top: 0,
    left: isCollapsed ? -drawerWidth + collapsedWidth : 0,
    bottom: 0,
    transition: 'width 0.3s ease-in-out',
    '& .MuiDrawer-paper': {
        boxSizing: 'border-box',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.white,
        width: isCollapsed ? collapsedWidth : drawerWidth,
        overflowX: 'hidden',
    },
}));

export const SidebarList = styled(List)(({ theme, isCollapsed }) => ({
    padding: !isCollapsed
        ? `${theme.spacing(2)} ${theme.spacing(3)} ${theme.spacing(2)} ${theme.spacing(3)}`
        : '20px',
}));

export const SidebarListItem = styled(ListItem)(({ theme, isCollapsed }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: isCollapsed ? 'center' : 'flex-start',
    '& .MuiSvgIcon-root': {
        fontSize: !isCollapsed ? '18px' : '20px',
        paddingTop: isCollapsed && theme.spacing(1),
    },
    '& + &': {
        marginTop: theme.spacing(1),
    },
    width: isCollapsed ? collapsedWidth : 'auto',
    paddingLeft: isCollapsed ? theme.spacing(1) : theme.spacing(2),
    transition: 'width 0.3s ease-in-out',
    cursor: 'pointer',
}));

export const SidebarListSubitem = styled(ListItem)(({ theme, isCollapsed }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: isCollapsed ? 'center' : 'flex-start',
    '& .MuiButtonBase-root': {
        fontSize: theme.typography.subtitle1.fontSize,
    },
    width: isCollapsed ? collapsedWidth : 'auto',
    paddingLeft: theme.spacing(4),
    transition: 'width 0.3s ease-in-out',
    cursor: 'pointer',
    paddingTop: 'unset'
}));

export const SidebarListItemIcon = styled(ListItemIcon)(({ theme, isCollapsed, active }) => ({
    color: 'inherit',
    minWidth: !isCollapsed ? 'unset' : '56px',
    marginRight: !isCollapsed && theme.spacing(1),
    color: theme.palette.primary.white,
    color: active ? theme.palette.secondary.main : theme.palette.primary.white,
}));

export const SidebarListItemText = styled(ListItemText)(({ theme }) => ({
    '& .MuiTypography-root': {
        fontSize: '1rem',
        textTransform: 'uppercase',
        color: 'inherit',
        letterSpacing: '1.5px',
        fontWeight: theme.typography.fontWeightRegular,
        whiteSpace: 'nowrap',
    },
}));

export const SidebarListItemSubtext = styled(ListItemText)(({ theme }) => ({
    '& .MuiTypography-root': {
        fontSize: theme.typography.subtitle1.fontSize,
        textTransform: 'capitalize',
        color: 'inherit',
        letterSpacing: '0.3px',
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export const SidebarImage = styled('div')(({ theme, isCollapsed }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '180px',
    height: isCollapsed ? theme.spacing(5) : theme.spacing(10),
    marginBottom: theme.spacing(1.5),
}));

export const LogoImage = styled('img')(({ isCollapsed }) => ({
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    content: `url(${isCollapsed ? '/assets/images/ft-logo.svg' : '/assets/images/ft-logo-kimedics.svg'})`,
    paddingTop: '0px',
    paddingBottom: '0px',
    '& .MuiListItem-root': {
        paddingBottom: '0px'
    }
}));

export const SidebarDrawer = styled(Drawer)(({ theme, isCollapsed }) => ({
    '& .MuiDrawer-paper': {
        backgroundColor: theme.palette.primary.white,
        color: theme.palette.primary.main,
        overflowX: 'hidden',
        width: drawerWidth + collapsedWidth * 2,
        transition: 'width 0.2s ease-in-out',
        marginLeft: isCollapsed ? collapsedWidth : 0,
        visibility: isCollapsed ? 'visible' : 'hidden',
    },
}));

export const SidebarLink = styled(Link)(({ active, theme }) => ({
    textDecoration: 'none',
    color: active ? theme.palette.secondary.main : theme.palette.primary.white,
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: '8px',
    right: 0,
    backgroundColor: theme.palette.secondary.main,
    cursor: 'pointer',
    zIndex: '9999',
    borderRadius: '100% 0px 0px 100%',
    '& .MuiSvgIcon-root': {
        color: theme.palette.primary.white,
    },
    '&:hover': {
        backgroundColor: theme.palette.secondary.main,
    },
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: theme.palette.secondary.main,
        zIndex: -1,
    },
}));
