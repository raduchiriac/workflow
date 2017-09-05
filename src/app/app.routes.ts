import { Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskComponent } from './components/tasks/task.component';
import { PageNotFoundComponent } from './core/404/page-not-found.component';

export const AppRoutes: Routes = [{
    path: 'tasks',
    component: TasksComponent,
    data: {
      title: 'Tasks List'
    }
  }, {
    path: 'task/:token',
    component: TaskComponent
  }, {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
];
