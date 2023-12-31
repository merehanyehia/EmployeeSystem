import { faUserCircle,faUser,faTachometerAlt, faUsers, faBuilding, faFileInvoiceDollar, faCalendarPlus, faClipboardList, faSignInAlt, faCalendarDay, faUserCheck, faHistory, faFileAlt } from '@fortawesome/free-solid-svg-icons';

/*
      ['dashboard','getAllEmployees','alldepartments', 'payroll', 'addVacation',
      'allAttendance','checkinCheckout','Messages','Announcements','holiday',
       'employeeAttendance' , 'payrollHistory' , 'leaveReport'];

*/
export const sideBarAdminItems = [
  {
    name: 'My profile',
    routeName: 'my-profile',
    icon: faUserCircle
  },
  {
    name:'Dashboard',
    routeName:'dashboard',
    icon:faTachometerAlt,
  },
  {
    name:'Employees',
    routeName:'getAllEmployees',
    icon: faUsers
  },
  {
    name:'Departments',
    routeName:'alldepartments',
    icon:faBuilding
  },
  {
    name:'Payroll',
    routeName:'payroll',
    icon:faFileInvoiceDollar
  },
  {
    name:'Vacation',
    routeName:'addVacation',
    icon:faCalendarPlus
  },
    {
    name:'Vacation Report',
    routeName:'viewVacation',
    icon:faFileAlt
  },
  {
    name:'Get Casual Vacations',
    routeName:'getAllCasualVacations',
    icon:faCalendarDay
  },
  {
    name:'Get Excuses',
    routeName:'getAllExcuses',
    icon:faCalendarDay
  },
  {
    name:'Attendance',
    routeName:'allAttendance',
    icon:faClipboardList
  },
  {
    name:'Checkin & Checkout',
    routeName:'checkinCheckout',
    icon:faSignInAlt
  },
  {
    name:'Holiday',
    routeName:'holiday',
    icon:faCalendarDay
  },
  {
    name:'My Attendance',
    routeName:'employeeAttendance',
    icon:faUserCheck
  },
  {
    name:'Payroll History',
    routeName:'payrollHistory',
    icon:faHistory
  },
  {
    name:'Leave Report',
    routeName:'leaveReport',
    icon:faFileAlt
  }
]
export const sideBarUserItems = [
  {
    name:'Me',
    routeName:'me',
    icon:faUser
  },
  {
    name: 'My profile',
    routeName: 'my-profile',
    icon: faUserCircle
  },
  {
    name:'My Payroll',
    routeName:'me/payroll',
    icon: faFileInvoiceDollar
  },
  {
    name:'My Vacations',
    routeName:'employeeVacation',
    icon:faCalendarPlus
  },
  {
    name:'My Casual Vacations',
    routeName:'getMyCasualVacations',
    icon:faCalendarPlus
  },
  {
    name:'My Excuses',
    routeName:'getMyExcuses',
    icon:faCalendarPlus
  },
  {
    name:'My Attendance',
    routeName:'employeeAttendance',
    icon:faClipboardList
  },
  {
    name:'Holiday',
    routeName:'me/holiday',
    icon:faCalendarDay
  },
]
