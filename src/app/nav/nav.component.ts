import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { GlobalService } from '../service/global.service';
import { EmployeeMessagesService } from '../service/employee-messages.service';
import { AnnouncementService } from '../service/announcement.service';
import { interval } from 'rxjs';
import { sideBarAdminItems , sideBarUserItems} from './dashboardItems';
import {faEnvelope, faBullhorn ,faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  announcements :any ;
  empMessages:any ;
  messageNotifications :boolean = false;
  announcementNotifications :boolean = false;
  menuItems: any;
  sideBarItems:any
  faEnvelope = faEnvelope; faBullhorn = faBullhorn;faSignOutAlt=faSignOutAlt;
  user: any = this.global.currentUser.getValue();


  constructor(private breakpointObserver: BreakpointObserver, private global: GlobalService, private router: Router
    ,private _EmployeeMessages :EmployeeMessagesService ,
    private _Announcements:AnnouncementService) {
    this.global.saveCurrentUser();
    if (this.user && this.user.role == 'ADMIN') {
      this.menuItems = sideBarAdminItems


    } else if(this.user && this.user.role == 'USER'){
      this.menuItems = sideBarUserItems;

      this._EmployeeMessages.getUserLastMessage().subscribe((res:any)=>{

        this.empMessages = res.data

      })

      this._Announcements.getLastAnnouncement().subscribe((res:any)=>{

        this.announcements = res.data

      })

      this.checkifNewAnnouncements()
      this.checkifNewMessages()


    }

  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  gotopage(page:string){
    this.router.navigate([`${page}`]);
  }
  logout(){
    this.global.isLogOut()
  }

  toggleMessageBadgeVisibility(){
    this.messageNotifications = false
  };
  toggleAnnouncementBadgeVisibility(){
    this.announcementNotifications = false
  };

  checkifNewMessages(){

    interval(4000).subscribe(() => {
   
      this._EmployeeMessages.getUserLastMessage().subscribe((res:any)=>{

      if(res.data[0]._id !== this.empMessages[0]._id){
        this.messageNotifications = true
        console.log("recieved")
        this.empMessages=res.data
      }
      });
    });
  }

  checkifNewAnnouncements(){

    interval(4000).subscribe(() => {
      console.log("send")
      this._Announcements.getLastAnnouncement().subscribe((res:any)=>{
   
      if(res.data[0]._id !== this.announcements[0]._id){
        this.announcementNotifications= true
        console.log("recieved")
        this.announcements=res.data
      }
      });
    });
  }
}            
