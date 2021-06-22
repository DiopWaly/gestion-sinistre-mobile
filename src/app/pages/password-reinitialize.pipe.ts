import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passwordReinitialize'
})
export class PasswordReinitializePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
