import { Routes } from '@angular/router';
import { TasksComponent } from '../components/tasks/tasks.component';
import { PageNotFoundComponent } from './404/page-not-found.component';

const AppRoutes: Routes = [{
    path: 'tasks',
    component: TasksComponent,
    data: {
      title: 'Tasks List'
    }
  }, {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
];

export default AppRoutes;

