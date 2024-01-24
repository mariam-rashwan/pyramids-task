import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';
import { navData } from './nav-data';
import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';

interface sideNavToogle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('100ms', style({ opacity: 0 })),
      ]),
    ]),

    // trigger('rotate',[
    //   transition(':enter',[
    //     animate('1000ms'),
    //     keyframes([
    //       style({transform:'rotate(0deg)',offset:'0'}),
    //       style({transform:'rotate(10deg)',offset:'1'})

    //     ])
    //   ])
    // ]),
  ],
})
export class SideNavComponent implements OnInit {
  new = window.location;
  collapsed: boolean = true;
  navbarData: any[] = navData;
  screenWidth: number = 769;
  closedHr: boolean = true;
  closedMange: boolean = true;


  @Output() onToggleSideNav: EventEmitter<sideNavToogle> = new EventEmitter();

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({
        screenWidth: this.screenWidth,
        collapsed: this.collapsed,
      });
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({
      screenWidth: this.screenWidth,
      collapsed: this.collapsed,
    });
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({
      screenWidth: this.screenWidth,
      collapsed: this.collapsed,
    });
  }

  openSubMenueMange(items?: number,data?:any): void {
    console.log(data);
    data.label=='Binding Management' && items ? (this.closedMange = !this.closedMange) : '';
  }
  openSubMenueHr(items?: number,data?:any): void {
    console.log(data);
    data.label=='HR' && items ? (this.closedHr = !this.closedHr) : '';    
  }
 
}
