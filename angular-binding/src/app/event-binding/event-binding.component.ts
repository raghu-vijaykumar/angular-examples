import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  val = 'No button is clicked';
  constructor() { }

  ngOnInit() {
  }

  onBtnClick() {
    this.val = 'Button Clicked';
  }

}
