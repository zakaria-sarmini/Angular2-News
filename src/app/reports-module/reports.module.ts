import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReportsComponent} from "./reports.component";
import {FirebaseService} from "../shared/firebase.service";
import {ReportsRouterProvider} from "./reports.routes";
import {HeaderFooterModule} from "../header-footer/header-footer.module";
import {ReportComponent} from "./components/report/report.component";
import {DeSortPipeModule} from "../shared/pipes/pipe.module";
import {Ng2PaginationModule} from "ng2-pagination/index";
import {Ng2PageScrollModule} from "ng2-page-scroll/src/ng2-page-scroll.module";

@NgModule({
    imports: [
        CommonModule,
        ReportsRouterProvider,
        HeaderFooterModule,
        DeSortPipeModule,
        Ng2PaginationModule,
        Ng2PageScrollModule
    ],
    declarations: [
        ReportsComponent,
        ReportComponent,
    ],
    providers: [
        FirebaseService
    ]
})

export class ReportsModule {}