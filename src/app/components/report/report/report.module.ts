import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from '../report.component';
import { LineGraphComponent } from '../../line-graph/line-graph.component';
import { TableComponent } from '../../table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CardComponent } from '../../card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FooterComponent } from '../../footer/footer.component';

export const ROUTES: Routes = [
  { path: '', component:ReportComponent }, 
];

@NgModule({
  declarations: [
    ReportComponent,
    LineGraphComponent,
    TableComponent,
    CardComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule, 
    MatSortModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule, 
    MatSelectModule, 
    FormsModule, 
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class ReportModule { }
