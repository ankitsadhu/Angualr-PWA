import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
  
  title = 'PWA';
  data = [
    { name: 'Navdeep Gill', pic: 'https://firebasestorage.googleapis.com/v0/b/pwadata-197a8.appspot.com/o/Navdeep%20Gil.jpg?alt=media&token=035d454d-c7d1-4be1-bb3f-e07eac4d2cb0' , designation: 'Team Owner'},
    { name: 'Avinashi', pic: 'https://firebasestorage.googleapis.com/v0/b/pwadata-197a8.appspot.com/o/Avinashi%20Mam.jpeg?alt=media&token=964fd0b2-4de6-48a7-af43-eaf28871eee8', designation: 'Coach'},
    { name: 'Niharika', pic: 'https://firebasestorage.googleapis.com/v0/b/pwadata-197a8.appspot.com/o/Niharika.jpeg?alt=media&token=404301f7-03d8-4fd3-8916-a2f89d18395a', designation: 'UI Engineer' },
    { name: 'Koustav', pic: 'https://firebasestorage.googleapis.com/v0/b/pwadata-197a8.appspot.com/o/Koustav.jpeg?alt=media&token=7b372902-291c-405b-8674-27961e6bf711', designation: 'UI Engineer' },
    { name: 'Nisha', pic: 'https://firebasestorage.googleapis.com/v0/b/pwadata-197a8.appspot.com/o/Nisha.jpeg?alt=media&token=4ede1e07-fdca-4098-9f25-96072239c9bf', designation: 'UI Engineer' },
    { name: 'Aviral', pic: 'https://firebasestorage.googleapis.com/v0/b/pwadata-197a8.appspot.com/o/Aviral.jpeg?alt=media&token=539fa287-0691-42c9-987f-4061630abf3e', designation: 'UI Engineer' },
    { name: 'Parul', pic: 'https://firebasestorage.googleapis.com/v0/b/pwadata-197a8.appspot.com/o/Parul.jpeg?alt=media&token=1c191445-cfdb-4729-8f45-5741f3867fad' , designation: 'UI Engineer' },
    { name: 'Suraj', pic: 'https://firebasestorage.googleapis.com/v0/b/pwadata-197a8.appspot.com/o/SurajDandwani.jpeg?alt=media&token=87b20198-33a8-4e54-9b08-2283d8d91e55', designation: 'UI Designer' },
    { name: 'Ankit', pic: 'https://firebasestorage.googleapis.com/v0/b/pwadata-197a8.appspot.com/o/Ankit.jpeg?alt=media&token=a5c9ae3e-a12c-46c6-9bfe-4618ac3f1047' , designation: 'UI Engineer' },
    { name: 'Praful', pic: 'https://firebasestorage.googleapis.com/v0/b/pwadata-197a8.appspot.com/o/Prafful.jpeg?alt=media&token=28f68eb7-03b8-4141-af07-07dce50aa103', designation: 'UI Designer' },
    { name: 'Riya', pic: 'https://firebasestorage.googleapis.com/v0/b/pwadata-197a8.appspot.com/o/riya.jpeg?alt=media&token=4ee92c87-0ecf-4661-8d69-171e60605bf2', designation: 'UI Designer' },
    { name: 'Aditya', pic: 'https://firebasestorage.googleapis.com/v0/b/pwadata-197a8.appspot.com/o/Aditya.jpeg?alt=media&token=bc0d0ed5-4e7d-44dc-93bb-fa5c156a19ff', designation:'UI Engineer' },
  ]

}
