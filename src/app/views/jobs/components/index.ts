import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { JobComponent } from './job.component';
import { JobsCountComponent } from './jobs-count.component';

const COMPONENTS = [
  JobComponent,
  JobsCountComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ComponentsModule {}
