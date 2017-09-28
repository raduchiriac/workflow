import { Routes } from '@angular/router';
import { JobsComponent } from './components/jobs/jobs.component';
import { TriggersComponent } from './components/triggers/triggers.component';
import { PageNotFoundComponent } from './core/404/page-not-found.component';

export const AppRoutes: Routes = [{
    path: 'triggers',
    component: TriggersComponent,
    data: {
      title: `Triggers' List`
    }
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
