import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() collapsed =true;
  @Input() screenWidth =769;


  getBodyClass() :string{
    let styleClass='';
    if(this.collapsed && this.screenWidth >768){
      styleClass='body-trimmed';
    } 
    else if(this.collapsed && this.screenWidth <=768 && this.screenWidth >0){
      styleClass='body-md-screen';

    }
    return styleClass;
  }
}
