import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name: 'deSort'
})
export class DeSortPipe implements PipeTransform {
    transform(reports:any):any {
        if(reports){return reports.reverse()}
    }
}
