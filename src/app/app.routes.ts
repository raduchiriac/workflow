import { Routes } from '@angular/router';
import { JobsComponent } from './components/jobs/jobs.component';
import { TriggersComponent } from './components/triggers/triggers.component';
import { JobComponent } from './components/jobs/job.component';
import { PageNotFoundComponent } from './core/404/page-not-found.component';

export const AppRoutes: Routes = [{
    path: 'triggers',
    component: TriggersComponent,
    data: {
      title: `Triggers' List`
    }
  }, {
    path: 'jobs',
    component: JobsComponent,
    data: {
      title: `Jobs' List`
    }
  }, {
    path: 'job/:token',
    component: JobComponent
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
