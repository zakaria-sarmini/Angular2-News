import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HeaderFooterModule} from "../header-footer/header-footer.module";
import {Ng2PaginationModule} from "ng2-pagination/index";
import {DeSortPipeModule} from "../shared/pipes/pipe.module";
import {CaricatureModuleComponent} from "./caricature-module.component";
import {FirebaseService} from "../shared/firebase.service";
import {CaricatureRouterProvider} from "./caricature.routes";

@NgModule({
    imports: [
        CommonModule,
        HeaderFooterModule,
        DeSortPipeModule,
        Ng2PaginationModule,
        CaricatureRouterProvider
    ],
    declarations: [
        CaricatureModuleComponent
    ],
    providers: [
        FirebaseService
    ]
})

export class CaricatureModule {}