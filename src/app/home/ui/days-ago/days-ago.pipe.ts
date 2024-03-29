import {NgModule, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'daysAgo'
})
export class DaysAgoPipe implements PipeTransform {

  transform(value: string): string {
    const now = new Date();
    const dateTaken = new Date(value);
    const oneDayInMs = 24 * 60 * 60 * 1000;
    const diffDays = Math.round(
      Math.abs((dateTaken.getTime() - now.getTime()) / oneDayInMs)
    );

    if(diffDays === 0) {
      return 'today';
    } else if (diffDays === 1) {
      return 'yesterday';
    } else {
      return `${diffDays} days ago`;
    }
  }
}

@NgModule({
  declarations: [DaysAgoPipe],
  exports: [DaysAgoPipe]
})
export class DaysAgoPipeModule {}
