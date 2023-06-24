import { styled } from '@mui/system';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
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
        fontSize: !isCollapsed ? '18px' : '20px'
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

export const SidebarListItemIcon = styled(ListItemIcon)(({ theme, isCollapsed }) => ({
    color: 'inherit',
    minWidth: !isCollapsed ? 'unset' : '56px',
    marginRight: !isCollapsed && theme.spacing(1),
    color: theme.palette.secondary.main
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

export const LogoImage = styled('img')(({ theme, isCollapsed }) => ({
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    content: `url(${isCollapsed ? '/assets/images/ft-logo.svg' : '/assets/images/ft-logo-kimedics.svg'})`,
    paddingTop: '0px',
    paddingBottom: '0px'
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
    fontWeight: active ? 'bold' : 'normal',
}));