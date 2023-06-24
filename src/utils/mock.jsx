import InsertChartOutlinedSharpIcon from '@mui/icons-material/InsertChartOutlinedSharp';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import MoreTimeOutlinedIcon from '@mui/icons-material/MoreTimeOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

export const sideBarItems = [
    { name: 'Dashboard', icon: InsertChartOutlinedSharpIcon },
    {
      name: 'Providers', icon: BadgeOutlinedIcon, children: [
        {
          name: 'Dashboard',
        },
        {
          name: 'Providers',
        }, 
        {
          name: 'My Tasks',
        },
        {
          name: 'All Tasks',
        },
        {
          name: 'Roster',
        },
        {
          name: 'Priviliges',
        },
        {
          name: 'Credentialing',
        },
        {
          name: 'State Laws',
        },
      ],
    },
    { name: 'Practices', icon: RoomOutlinedIcon },
    { name: 'Jobs', icon: BusinessCenterOutlinedIcon },
    { name: 'Schedules', icon: CalendarTodayOutlinedIcon },
    { name: 'Time & Invoices', icon: MoreTimeOutlinedIcon },
    { name: 'Time & Pay', icon: MonetizationOnOutlinedIcon },
    { name: 'Messages', icon: ChatBubbleOutlineOutlinedIcon },
  ];