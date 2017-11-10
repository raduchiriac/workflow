import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/404/page-not-found.component';

export const AppRoutes: Routes = [
  {
    path: 'triggers',
    loadChildren: './views/triggers/triggers.module#TriggersModule',
  },
  {
    path: 'logs',
    loadChildren: './views/logs/logs.module#LogsModule',
  },
  {
    path: 'jobs',
    loadChildren: './views/jobs/jobs.module#JobsModule',
  },
  // Redirect
  {
    path: '',
    redirectTo: '/triggers',
    pathMatch: 'full'
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
];
