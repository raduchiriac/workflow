import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';
import { MaterialComponents } from './core/material-components';

import { AppComponent } from './app.component';
import AppRoutes from './core/app-routes';

import { TasksComponent } from './components/tasks/tasks.component';
import { TasksCountComponent } from './components/tasks/tasks-count.component';
import { TaskComponent } from './components/tasks/task.component';
import { TaskService } from './_services';

import { TasksReducer } from './_reducers';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TasksCountComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    CoreModule,
    RouterModule.forRoot(
      AppRoutes
    ),
    StoreModule.forRoot({
      tasks: TasksReducer
    }),
    StoreDevtoolsModule.instrument(),
    MaterialModule,
    MaterialComponents
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
