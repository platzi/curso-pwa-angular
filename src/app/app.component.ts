import { Component, HostListener, OnInit } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private swUpdate: SwUpdate,
    private swPush: SwPush
  ) {}

  ngOnInit() {
    this.updatePWA();
    this.listenNotifications();
    this.register();
  }

  updatePWA() {
    this.swUpdate.available
    .subscribe(value => {
      console.log('update:', value);
      window.location.reload();
    });
  }

  listenNotifications() {
    this.swPush.messages
    .subscribe(msg => {
      console.log(msg);
    });
  }

  register() {
    const key = 'BLDV1q-_njNKmAfA5SZYxnaicR1l1nzxYcd9VH4qJdFO4tm0TmwOF7uno67Gku3Eoygko8TF6kOdW3FwH62FIs8';
    this.swPush.requestSubscription({
      serverPublicKey: key
    })
    .then(data => {
      console.log(data.toJSON());
    });
  }
}
