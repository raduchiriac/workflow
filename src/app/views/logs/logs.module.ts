import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogsPageComponent } from './containers/logs-page';

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: '',
      component: LogsPageComponent },
    ]),
  ],
  declarations: [
    LogsPageComponent
  ],
  providers: [],
})
export class LogsModule {}
