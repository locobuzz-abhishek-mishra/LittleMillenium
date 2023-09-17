import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  cssPrefix = 'toolbar-notification';
  isOpen: boolean = false;
  @Input() notifications:any = [];
  constructor() { }

  ngOnInit(): void {
  }
  select() {
    	
  }

  delete(notification:any) {
  
  }
}
