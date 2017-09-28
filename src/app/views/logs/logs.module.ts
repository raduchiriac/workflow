import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogsContainerComponent } from './containers/logs.container';

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: '',
      component: LogsContainerComponent },
    ]),
  ],
  declarations: [
    LogsContainerComponent
  ],
  providers: [],
})
export class LogsModule {}
