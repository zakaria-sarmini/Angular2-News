import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
  name: 'byPassSecurity'
})
export class ByPassSecurityPipe implements PipeTransform {
    constructor(private _sanitizer: DomSanitizer){}

  transform(url: any): any {
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + url)
  }

}
