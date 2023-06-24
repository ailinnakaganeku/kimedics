import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { List, ListItem } from '@mui/material';
import { LogoImage, SidebarContainer, SidebarDrawer, SidebarImage, SidebarLink, SidebarList, SidebarListItem, SidebarPaper } from './styles';
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

    return (
        <SidebarContainer>
            <SidebarPaper variant='permanent' isCollapsed={isSidebarCollapsed}>
                <SidebarList isCollapsed={isSidebarCollapsed}>
                    <SidebarListItem>
                        <SidebarImage isCollapsed={isSidebarCollapsed}>
                            <LogoImage alt='Kimedics Logo' isCollapsed={isSidebarCollapsed} />
                        </SidebarImage>
                    </SidebarListItem>
                    {sideBarItems?.map((item, index) => (
                        <>
                            <SidebarLink to={item.to} active={location.pathname === item.to}>
                                <SideBarItem
                                    key={index}
                                    name={item.name}
                                    icon={item.icon}
                                    onClick={handleItemClick}
                                    selected={item === selectedItem}
                                    isCollapsed={isSidebarCollapsed}
                                    children={item.children}
                                />
                            </SidebarLink>
                        </>
                    ))}
                </SidebarList>
            </SidebarPaper>
            <SidebarDrawer variant='permanent' anchor='left' isCollapsed={isSidebarCollapsed}>
                <List component='div'>
                    <ListItem>
                        <Drawer />
                    </ListItem>
                </List>
            </SidebarDrawer>
        </SidebarContainer>
    );
};

export default Sidebar;
