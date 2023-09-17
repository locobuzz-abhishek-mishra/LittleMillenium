import { Component, Input, OnInit } from '@angular/core';
import { ToolbarHelpers } from './toolbar.helper';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() sidebar: any;
	@Input() drawer: any;
	@Input() matDrawerShow: any;
  @Input() sidenav: any;
  
	searchOpen: boolean = false;
  toolbarHelpers = ToolbarHelpers;
  constructor() { }

  ngOnInit(): void {
  }

}
