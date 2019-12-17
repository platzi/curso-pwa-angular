import { Component, HostListener, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private swUpdate: SwUpdate,
  ) {}

  ngOnInit() {
    this.updatePWA();
  }

  updatePWA() {
    this.swUpdate.available
    .subscribe(value => {
      console.log('update:', value);
      window.location.reload();
    });
  }
}
