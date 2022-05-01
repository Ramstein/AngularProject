import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: 'app-servers', // selector by attribute
  // selector: '.app-servers', // selector by class
  templateUrl: './servers.component.html',
  //using backtick to write multiline html contents in the template
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = "TestServer";
  serverCreated: boolean = false;
  servers = ['Testserver', 'DevServer'];

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

