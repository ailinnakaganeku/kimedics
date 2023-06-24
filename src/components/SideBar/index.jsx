import { useState } from 'react';
import { List, ListItem } from '@mui/material';
import { LogoImage, SidebarContainer, SidebarDrawer, SidebarImage, SidebarList, SidebarListItem, SidebarPaper } from './styles';
import SideBarItem from './Item';
import Drawer from '../Drawer';

const Sidebar = ({ sideBarItems }) => {
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
                        <SideBarItem
                            key={index}
                            name={item.name}
                            icon={item.icon}
                            onClick={handleItemClick}
                            selected={item === selectedItem}
                            isCollapsed={isSidebarCollapsed}
                            children={item.children}
                        />
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
