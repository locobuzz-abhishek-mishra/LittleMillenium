import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyloaderRoutingModule } from './lazyloader-routing.module';
import { ReportModule } from 'src/app/components/report/report/report.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LazyloaderRoutingModule,
    ReportModule
  ]
})
export class LazyloaderModule { }
