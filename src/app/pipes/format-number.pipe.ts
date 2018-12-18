import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {

  transform(value: number | string, locale?: string): any {
    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: 0
    }).format(Number(value));
  }

}
