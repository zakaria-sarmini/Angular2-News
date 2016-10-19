import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {VideosRouterProvider} from "./videos.routes";
import {Ng2PaginationModule} from "ng2-pagination/index";
import {DeSortPipeModule} from "../shared/pipes/pipe.module";
import {HeaderFooterModule} from "../header-footer/header-footer.module";
import {VideosComponent} from "./videos.component";
import {FirebaseService} from "../shared/firebase.service";
import {VideoComponent} from "./video/video.component";
import {Ng2PageScrollModule} from "ng2-page-scroll/src/ng2-page-scroll.module";

@NgModule({
    imports: [
        CommonModule,
        VideosRouterProvider,
        HeaderFooterModule,
        DeSortPipeModule,
        Ng2PaginationModule,
        Ng2PageScrollModule
    ],
    declarations: [
        VideosComponent,
        VideoComponent
    ],
    providers: [
        FirebaseService
    ]
})

export class VideosModule {}