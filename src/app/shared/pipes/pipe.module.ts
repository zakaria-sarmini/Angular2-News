import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DeSortPipe} from "./de-sort.pipe";
import {ByPassSecurityPipe} from "./by-pass-security.pipe";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        DeSortPipe,
        ByPassSecurityPipe
    ],
    exports: [
        DeSortPipe,
        ByPassSecurityPipe
    ]
})

export class DeSortPipeModule {}