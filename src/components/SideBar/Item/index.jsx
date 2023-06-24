import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { List } from '@mui/material';
import { SidebarLink, SidebarListItem, SidebarListItemIcon, SidebarListItemSubtext, SidebarListItemText, SidebarListSubitem } from '../styles';

const SideBarItem = ({ name, icon: Icon, onClick, selected, isCollapsed, children }) => {
    const location = useLocation();
    const [isExpanded, setIsExpanded] = useState(false);

    const handleItemClick = () => {
        if (selected) {
            onClick(null);
        } else {
            onClick(name.toLowerCase() === 'practices');
        }
        setIsExpanded(!isExpanded);
    };


    return (
        <>
            <SidebarListItem button selected={selected} isCollapsed={isCollapsed} onClick={handleItemClick}>
                <SidebarListItemIcon isCollapsed={isCollapsed}>
                    <Icon />
                </SidebarListItemIcon>
                {!isCollapsed && <SidebarListItemText primary={name} />}
            </SidebarListItem>
            {children && isExpanded && !isCollapsed && (
                <List component='div'>
                    {children?.map((child) => (
                        <SidebarLink to={child.to} active={location.pathname === child.to} key={child.id}>
                            <SidebarListSubitem key={child.id} isCollapsed={isCollapsed}>
                                <SidebarListItemSubtext primary={child.name} />
                            </SidebarListSubitem>
                        </SidebarLink>
                    ))}
                </List>
            )}
        </>
    );
};

export default SideBarItem