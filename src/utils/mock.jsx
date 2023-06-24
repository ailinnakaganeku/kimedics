import InsertChartOutlinedSharpIcon from '@mui/icons-material/InsertChartOutlinedSharp';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import MoreTimeOutlinedIcon from '@mui/icons-material/MoreTimeOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

export const sideBarItems = [
  { name: 'Dashboard', icon: InsertChartOutlinedSharpIcon, to: '/' },
  {
    name: 'Providers', icon: BadgeOutlinedIcon, to: '/providers/dashboard', children: [
      {
        name: 'Dashboard',
        to: '/providers/dashboards'
      },
      {
        name: 'Providers',
        to: '/providers/providers'
      },
      {
        name: 'My Tasks',
        to: '/providers/mytasks'
      },
      {
        name: 'All Tasks',
        to: '/providers/alltasks'
      },
      {
        name: 'Roster',
        to: '/providers/roster'
      },
      {
        name: 'Priviliges',
        to: 'providers/priviliges'
      },
      {
        name: 'Credentialing',
        to: '/providers/credentialing'
      },
      {
        name: 'State Laws',
        to: '/providers/statelaws'
      },
    ],
  },
  { name: 'Practices', icon: RoomOutlinedIcon, to: '/practices' },
  { name: 'Jobs', icon: BusinessCenterOutlinedIcon, to: '/jobs' },
  { name: 'Schedules', icon: CalendarTodayOutlinedIcon, to: '/schedules' },
  { name: 'Time & Invoices', icon: MoreTimeOutlinedIcon, to: '/timeandinvoices' },
  { name: 'Time & Pay', icon: MonetizationOnOutlinedIcon, to: '/timeandpay' },
  { name: 'Messages', icon: ChatBubbleOutlineOutlinedIcon, to: '/messages' },
];