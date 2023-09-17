import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu-item',
  templateUrl: './sidemenu-item.component.html',
  styleUrls: ['./sidemenu-item.component.scss']
})
export class SidemenuItemComponent implements OnInit {
  @Input() menu: any;
  @Input() iconOnly: boolean | undefined;
  @Input() secondaryMenu = false;
  constructor() { }

  ngOnInit(): void {
  }
  openLink() {
    this.menu.open = !this.menu.open;
  }
}
