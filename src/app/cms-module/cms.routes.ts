import {Routes, RouterModule} from "@angular/router";
import {CmsComponent} from "./cms.component";
import {ModuleWithProviders} from "@angular/core";
import {AddUserComponent} from "./components/add-user/add-user.component";
import {TestComponent} from "./components/test/test.component";
import {ManageUsersComponent} from "./components/manage-users/manage-users.component";
import {GuardService} from "../shared/guard.service";
import {AddReportComponent} from "./components/add-report/add-report.component";
import {ManageReportsComponent} from "./components/manage-reports/manage-reports.component";
import {AddInterviewComponent} from "./components/add-interview/add-interview.component";
import {ManageInterviewsComponent} from "./components/manage-interviews/manage-interviews.component";
import {VideosManagementComponent} from "./components/videos-management/videos-management.component";
import {PhotosComponent} from "./components/photos/photos.component";
import {CaricatureManagementComponent} from "./components/manage-caricature/caricature-management/caricature-management.component";

const cmsRoutes: Routes = [
    {
        path: '',
        component: CmsComponent,
        canActivate: [GuardService],
        children: [
            {
                path: '',
            },
            {
                path: 'add-user',
                component: AddUserComponent
            },
            {
                path: 'manage-users',
                component: ManageUsersComponent
            },
            {
                path: 'add-report',
                component: AddReportComponent
            },
            {
                path: 'manage-reports',
                component: ManageReportsComponent
            },
            {
                path: 'add-interview',
                component: AddInterviewComponent
            },
            {
                path: 'test',
                component: TestComponent
            },
            {
                path: 'manage-interviews',
                component: ManageInterviewsComponent
            },
            {
                path: 'videos-management',
                component: VideosManagementComponent
            },
            {
                path: 'photos',
                component: PhotosComponent
            },
            {
                path: 'caricature-management',
                component: CaricatureManagementComponent
            }
        ]
    }
];

export const CmsRouterProvider: ModuleWithProviders = RouterModule.forChild(cmsRoutes);