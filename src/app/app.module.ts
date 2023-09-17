import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { MaterialModule } from './Modules/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { SidemenuItemComponent } from './components/sidemenu-item/sidemenu-item.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NotificationComponent } from './components/notification/notification.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { LineGraphComponent } from './components/line-graph/line-graph.component';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PaginatorNumberDirective } from './directives/paginator-number.directive';
import { HeaderComponent } from './components/header/header.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { LazyloaderModule } from './Modules/lazyloader/lazyloader.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavComponent,
    SidemenuComponent,
    SidemenuItemComponent,
    ToolbarComponent,
    NotificationComponent,
    UserMenuComponent,
    PaginatorNumberDirective,
    HeaderComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    MaterialModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatFormFieldModule, 
    MatInputModule, 
    LazyloaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
