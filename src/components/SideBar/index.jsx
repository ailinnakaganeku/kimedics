import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { List, ListItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { LogoImage, SidebarContainer, SidebarDrawer, SidebarImage, SidebarLink, SidebarList, SidebarListItem, SidebarPaper, CloseButton } from './styles';
import SideBarItem from './Item';
import Drawer from '../Drawer';

const Sidebar = ({ sideBarItems }) => {
    const location = useLocation();
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (isCollapsed) => {
        setIsSidebarCollapsed(isCollapsed);
        setSelectedItem(null);
    };

    const handleDrawerClose = (isCollapsed) => {
        setIsSidebarCollapsed(!isCollapsed);
    };

    return (
        <SidebarContainer>
            <SidebarPaper variant='permanent' isCollapsed={isSidebarCollapsed}>
                <SidebarList isCollapsed={isSidebarCollapsed}>
                    <SidebarListItem>
                        <SidebarImage isCollapsed={isSidebarCollapsed}>
                            <LogoImage alt='Kimedics Logo' isCollapsed={isSidebarCollapsed} />
                        </SidebarImage>
                    </SidebarListItem>
                    {sideBarItems?.map((item) => (
                        <SidebarLink to={item.to} active={location.pathname === item.to} key={item.id}>
                            <SideBarItem
                                name={item.name}
                                icon={item.icon}
                                onClick={handleItemClick}
                                selected={item === selectedItem}
                                isCollapsed={isSidebarCollapsed}
                                children={item.children}
                            />
                        </SidebarLink>
                    ))}
                </SidebarList>
            </SidebarPaper>
            <SidebarDrawer variant='permanent' anchor='left' isCollapsed={isSidebarCollapsed}>
                <List component='div'>
                    <ListItem>
                        <CloseButton onClick={handleDrawerClose}>
                            <CloseIcon />
                        </CloseButton>
                    </ListItem>
                    <ListItem>
                        <Drawer />
                    </ListItem>
                </List>
            </SidebarDrawer>
        </SidebarContainer>
    );
};

export default Sidebar;
