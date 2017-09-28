import { Routes } from '@angular/router';
import { JobsComponent } from './components/jobs/jobs.component';
import { PageNotFoundComponent } from './core/404/page-not-found.component';

export const AppRoutes: Routes = [{
    path: 'triggers',
    loadChildren: './views/triggers/triggers.module#TriggersModule',
  }, {
    path: 'logs',
    loadChildren: './views/logs/logs.module#LogsModule',
  }, {
    path: 'jobs',
    component: JobsComponent,
    data: {
      title: `Jobs' List`
    }
  }, {
    // Redirect
    path: '',
    redirectTo: '/triggers',
    pathMatch: 'full'
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
];
