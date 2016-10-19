import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Ng2PageScrollModule} from "ng2-page-scroll/src/ng2-page-scroll.module";
import {Ng2PaginationModule} from "ng2-pagination/index";
import {DeSortPipeModule} from "../shared/pipes/pipe.module";
import {HeaderFooterModule} from "../header-footer/header-footer.module";
import {FirebaseService} from "../shared/firebase.service";
import {PhotosModuleComponent} from "./photos-module.component";
import {PhotosRouterProvider} from "./photos.routes";

@NgModule({
    imports: [
        CommonModule,
        HeaderFooterModule,
        DeSortPipeModule,
        Ng2PaginationModule,
        Ng2PageScrollModule,
        PhotosRouterProvider
    ],
    declarations: [
        PhotosModuleComponent
    ],
    providers: [
        FirebaseService
    ]
})

export class PhotosModule {}