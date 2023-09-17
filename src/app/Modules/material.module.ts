import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';

const MaterialMods=[
  CommonModule,
  MatListModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatChipsModule,
  // PerfectScrollbarModule,
  NgScrollbarModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatTabsModule,
  MatSliderModule,
  MatProgressBarModule,
  MatCardModule,
  CommonModule,
  FlexLayoutModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatInputModule,
  MatIconModule,
  MatCheckboxModule,
  MatListModule,
  MatChipsModule,
  MatDividerModule,
]

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [],
  imports: [
    CommonModule,
    ...MaterialMods,
    MatToolbarModule,
    FormsModule
  ],
  exports: [...MaterialMods, MatToolbarModule]
})
export class MaterialModule { }
