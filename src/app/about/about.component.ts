import { HttpClient } from '@angular/common/http';
import { ApplicationRef, Component, OnInit } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';
import { IndexedDBService } from '../services/indexed-db.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  apiData:any;
  private readonly publicKey = 'BJvvLxtAQUlq4zJwEv1NnW6S3AvL3ooH78ljPyGBkpIb6pD-M3nF5VgZMVs4V0SNC3gcEsXllrjHr9MNolFPWKA';
  constructor(private http: HttpClient, 
              private update: SwUpdate, 
              private appRef: ApplicationRef,
              private swPush: SwPush,
              private indexedDBService: IndexedDBService) { 
    // this.updateClient();
    // this.checkUpdate();
  }

  ngOnInit(): void {
    this.http.get('http://dummy.restapiexample.com/api/v1/employees').subscribe(
      (res:any) => {
        this.apiData = res.data;
      },err => {
        console.log(err)
      }
    )
    // this.pushSubscription();
  }

  updateClient() {
    if(!this.update.isEnabled) {
      console.log('Not Enabled');
      if(confirm('update available for the app relaease please confirm')) {
        this.update.activateUpdate().then(()=> location.reload()) //reloading the page if any new content is available
      }
    }
    this.update.available.subscribe((event)=> {
      console.log(`current`, event.current, `available`, event.available)
    })

    this.update.activated.subscribe((event)=> {
      console.log(`current`, event.previous, `available`, event.current)
    })
  }
  
  checkUpdate() {
    this.appRef.isStable.subscribe((isStable)=>{
      if(isStable) {
        const timeInterval = interval(6 * 60 * 60 * 1000);

        timeInterval.subscribe(() => {
          this.update.checkForUpdate().then(()=> console.log('checked'));
          console.log('update checked');
        }) 
      }
    })
  }

  pushSubscription() {
    if(this.swPush.isEnabled) {
      console.log('Notification Not Enabled')
      return
    }
    this.swPush.requestSubscription({
      serverPublicKey: this.publicKey
    })
    .then(sub => console.log(JSON.stringify(sub)))
    .catch(err => console.log(err));
  }


  postSync() {
    let obj = {
      name: 'Ankit & Aviral',
    };
    //api call
    this.http.post('http://localhost:3000/data', obj).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        this.indexedDBService
          .addUser(obj.name)
          .then(this.backgroundSync)
          .catch(console.log);
        //this.backgroundSync();
      }
    );
  }

  backgroundSync() {
    navigator.serviceWorker.ready
      .then((swRegistration) => swRegistration.sync.register('post-data'))
      .catch(console.log);
  }

}
