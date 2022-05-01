import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: '<p>You are in danger.</p>',
  // styleUrls: ['./app.component.css']
  styles: [`
    p {
      padding: 20px;
      background-color: mistyrose;
      border: 1px solid red;
    }
  `]
})
export class warningAlertComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
