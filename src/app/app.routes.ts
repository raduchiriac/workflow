import { Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { TriggersComponent } from './components/triggers/triggers.component';
import { TaskComponent } from './components/tasks/task.component';
import { PageNotFoundComponent } from './core/404/page-not-found.component';

export const AppRoutes: Routes = [{
    path: 'triggers',
    component: TriggersComponent,
    data: {
      title: `Triggers' List`
    }
  }, {
    path: 'jobs',
    component: TasksComponent,
    data: {
      title: `Jobs' List`
    }
  }, {
    path: 'task/:token',
    component: TaskComponent
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
