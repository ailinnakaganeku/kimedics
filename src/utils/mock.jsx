import InsertChartOutlinedSharpIcon from '@mui/icons-material/InsertChartOutlinedSharp';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import MoreTimeOutlinedIcon from '@mui/icons-material/MoreTimeOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

export const sideBarItems = [
  { id: 1, name: 'Dashboard', icon: InsertChartOutlinedSharpIcon, to: '/' },
  {
    id: 2, name: 'Providers', icon: BadgeOutlinedIcon, to: '/providers/dashboard', children: [
      {
        id: 3,
        name: 'Dashboard',
        to: '/providers/dashboards'
      },
      {
        id: 4,
        name: 'Providers',
        to: '/providers/providers'
      },
      {
        id: 5,
        name: 'My Tasks',
        to: '/providers/mytasks'
      },
      {
        id: 6,
        name: 'All Tasks',
        to: '/providers/alltasks'
      },
      {
        id: 7,
        name: 'Roster',
        to: '/providers/roster'
      },
      {
        id: 8,
        name: 'Priviliges',
        to: 'providers/priviliges'
      },
      {
        id: 9,
        name: 'Credentialing',
        to: '/providers/credentialing'
      }, ,
      {
        id: 10,
        name: 'State Laws',
        to: '/providers/statelaws'
      },
    ],
  },
  { id: 11, name: 'Practices', icon: RoomOutlinedIcon, to: '/practices' },
  { id: 12, name: 'Jobs', icon: BusinessCenterOutlinedIcon, to: '/jobs' },
  { id: 13, name: 'Schedules', icon: CalendarTodayOutlinedIcon, to: '/schedules' },
  { id: 14, name: 'Time & Invoices', icon: MoreTimeOutlinedIcon, to: '/timeandinvoices' },
  { id: 15, name: 'Time & Pay', icon: MonetizationOnOutlinedIcon, to: '/timeandpay' },
  { id: 16, name: 'Messages', icon: ChatBubbleOutlineOutlinedIcon, to: '/messages' },
];