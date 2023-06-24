import { useState } from 'react';
import { List } from '@mui/material';
import { SidebarListItem, SidebarListItemIcon, SidebarListItemSubtext, SidebarListItemText, SidebarListSubitem } from '../styles';

const SideBarItem = ({ name, icon: Icon, onClick, selected, isCollapsed, children }) => {
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
                        <SidebarListSubitem key={child.id} isCollapsed={isCollapsed}>
                            <SidebarListItemSubtext primary={child.name} />
                        </SidebarListSubitem>
                    ))}
                </List>
            )}
        </>
    );
};

export default SideBarItem