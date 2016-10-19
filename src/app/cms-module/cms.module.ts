import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CmsComponent} from "./cms.component";
import {CmsRouterProvider} from "./cms.routes";
import {AddUserComponent} from "./components/add-user/add-user.component";
import {TestComponent} from "./components/test/test.component";
import {FormsModule} from "@angular/forms";
import {FirebaseService} from "../shared/firebase.service";
import {ManageUsersComponent} from "./components/manage-users/manage-users.component";
import {GuardService} from "../shared/guard.service";
import {AddReportComponent} from "./components/add-report/add-report.component";
import {ManageReportsComponent} from "./components/manage-reports/manage-reports.component";
import {Ng2Webstorage} from "ng2-webstorage/index";
import {DeSortPipeModule} from "../shared/pipes/pipe.module";
import {Ng2PaginationModule} from "ng2-pagination/index";
import {AddInterviewComponent} from "./components/add-interview/add-interview.component";
import {ManageInterviewsComponent} from "./components/manage-interviews/manage-interviews.component";
import {VideosManagementComponent} from "./components/videos-management/videos-management.component";
import {PhotosComponent} from "./components/photos/photos.component";
import {Ng2PageScrollModule} from "ng2-page-scroll/src/ng2-page-scroll.module";
import {CaricatureManagementComponent} from "./components/manage-caricature/caricature-management/caricature-management.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CmsRouterProvider,
        Ng2Webstorage,
        DeSortPipeModule,
        Ng2PaginationModule,
        Ng2PageScrollModule
    ],
    declarations: [
        CmsComponent,
        AddUserComponent,
        ManageUsersComponent,
        AddReportComponent,
        ManageReportsComponent,
        AddInterviewComponent,
        ManageInterviewsComponent,
        VideosManagementComponent,
        PhotosComponent,
        CaricatureManagementComponent,
        TestComponent
    ],
    providers: [
        FirebaseService,
        GuardService,
    ]
})

export class CMSModule {}