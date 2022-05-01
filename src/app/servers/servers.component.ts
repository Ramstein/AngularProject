import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: 'app-servers', // selector by attribute
  // selector: '.app-servers', // selector by class
  // templateUrl: './servers.component.html',
  //using backtick to write multiline html contents in the template
  template: `
    <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
