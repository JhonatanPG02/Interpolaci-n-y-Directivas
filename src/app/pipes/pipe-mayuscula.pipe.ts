import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeMayuscula'
})
export class PipeMayusculaPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.toUpperCase();
  }

}
