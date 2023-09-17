import { Routes } from '@angular/router';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const appRoutes: Routes = [{
    path: '', component: DashboardComponent, children: [
        { path: 'report', loadChildren: () => import('./components/report/report/report.module').then(m => m.ReportModule) },
        { path: '**', component: PagenotfoundComponent},
    ]
}];