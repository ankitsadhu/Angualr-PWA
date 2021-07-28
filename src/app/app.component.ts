import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  public innerWidth: any;
  isMobileWindow: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth < 500) this.isMobileWindow = true;
    else this.isMobileWindow = false;
  }

}
