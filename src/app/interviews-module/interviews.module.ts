import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {InterviewsComponent} from "./interviews.component";
import {InterviewsRouterProvider} from "./interviews.routes";
import {HeaderFooterModule} from "../header-footer/header-footer.module";
import {DeSortPipeModule} from "../shared/pipes/pipe.module";
import {Ng2PaginationModule} from "ng2-pagination/index";
import {FirebaseService} from "../shared/firebase.service";
import {InterviewComponent} from "./interview/interview.component";
import {Ng2PageScrollModule} from "ng2-page-scroll/src/ng2-page-scroll.module";

@NgModule({
    imports: [
        CommonModule,
        HeaderFooterModule,
        DeSortPipeModule,
        Ng2PaginationModule,
        InterviewsRouterProvider,
        Ng2PageScrollModule
    ],
    declarations: [
        InterviewsComponent,
        InterviewComponent
    ],
    providers: [
        FirebaseService
    ]
})

export class InterviewsModule {}