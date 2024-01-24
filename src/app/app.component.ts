import { Component } from '@angular/core';


interface sideNavToogle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pyramids-task';

  isSideNavCollapsed:boolean=true;
  screenWidth:number=769;
  onToggleSidenav(data:sideNavToogle):void{
  this.screenWidth=data.screenWidth;
  this.isSideNavCollapsed=data.collapsed;

  }
}
