import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-server',
  // Inline template example
  template: `<p> server works! </p>`,
  styles: [`
    p {
        color: blue;
    }
  `]
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
