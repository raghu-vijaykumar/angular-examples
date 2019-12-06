import { Component, OnInit } from '@angular/core';


@Component({
  /* selector: '.app-server' =>  using selector as a class *
   * in HTML use as =>  <div class="app-server"> </div>    */
  /* selector: 'app-server'                                *
   * In HTML can be used as => <div app-server /> or <app-server /> */
  selector: 'app-server',
  // Inline template example
  template: `<p> server works! </p>`,
  // Inline style example
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
