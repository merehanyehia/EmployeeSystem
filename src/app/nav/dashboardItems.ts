import { faUser,faTachometerAlt, faUsers, faBuilding, faFileInvoiceDollar, faCalendarPlus, faClipboardList, faSignInAlt, faEnvelope, faBullhorn, faCalendarDay, faUserCheck, faHistory, faFileAlt } from '@fortawesome/free-solid-svg-icons';

/*
      ['dashboard','getAllEmployees','alldepartments', 'payroll', 'addVacation',
      'allAttendance','checkinCheckout','Messages','Announcements','holiday',
       'employeeAttendance' , 'payrollHistory' , 'leaveReport'];

*/
export const sideBarAdminItems = [
  {
    name:'Dashboard',
    routeName:'dashboard',
    icon:faTachometerAlt
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
    name:'Add Vacation',
    routeName:'addVacation',
    icon:faCalendarPlus
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
    name:'Messages',
    routeName:'Messages',
    icon:faEnvelope
  },
  {
    name:'Announcements',
    routeName:'Announcements',
    icon:faBullhorn
  },
  {
    name:'Holiday',
    routeName:'holiday',
    icon:faCalendarDay
  },
  {
    name:'Attendance of employees',
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
    name:'Employees',
    routeName:'me/payroll',
    icon: faFileInvoiceDollar
  },
  {
    name:'My Vacations',
    routeName:'employeeVacation',
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