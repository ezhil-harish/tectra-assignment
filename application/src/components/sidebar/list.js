import dashboard from '../../assets/collage.png'
import box from '../../assets/boxes.png'
import teeth from '../../assets/tooth.png'
import doc from '../../assets/stethoscope.png'
import insurance from '../../assets/insurance.png'
import chain from '../../assets/chain.png'
import user from '../../assets/user.png'
import chat from '../../assets/chat.png'
import calender from '../../assets/calendar.png'
import heart from '../../assets/heart-rate.png'
import coin from '../../assets/coin.png'
import cap from '../../assets/medical-cap.png'

export const overviews = [
  {
    img: dashboard,
    listName: 'Dashboard',
    path: '/dashboard',
  },
  {
    img: teeth,
    listName: 'Dental Dashboard',
    path: '/dental-dashboard',
  },
]

export const applications = [
  {
    listName: 'Telemedicine',
    path: '/telemedicine',
    img: chain
  },
  {
    img: box,
    listName: 'Inventory Management',
    path: '/inventory-management',
  },
  {
    img: insurance,
    listName: 'Insurance Management',
    path: '/insurance-management',
  },
  {
    img: doc,
    listName: 'Doctors',
    path: '/doctors',
  },
  {
    listName: 'Patients',
    path: '/patients',
    img: user
  },
  {
    listName: 'Appointments',
    path: '/appointments',
    img: calender
  },
  {
    listName: 'Chats',
    path: '/chats',
    img: chat
  },
  {
    img: heart,
    listName: 'Medical Services',
    path: '/medical-services',
  },
  {
    img: cap,
    listName: 'Dental Services',
    path: '/dental-services',
  },
  {
    img: coin,
    listName: 'Billing and Invoice',
    path: '/billing-and-invoice',
  },
]