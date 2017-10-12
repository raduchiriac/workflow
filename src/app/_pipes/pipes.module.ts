import { NgModule } from '@angular/core';

import { CronToHuman } from './cron2human.pipe';

const PIPES = [
  CronToHuman
];

@NgModule({
  declarations: PIPES,
  exports: PIPES
})
export class PipesModule {}
