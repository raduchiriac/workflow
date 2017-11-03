import { Pipe, PipeTransform } from '@angular/core';
import cronstrue from 'cronstrue';

@Pipe({
  name: 'cron2human'
})
export class CronToHuman implements PipeTransform {
  transform(cron: string): string {
    return cron ? cronstrue.toString(cron) : '';
  }
}
