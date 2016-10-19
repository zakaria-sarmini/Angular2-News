import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'content-management',
        loadChildren: 'app/cms-module/cms.module#CMSModule'
    },
    {
        path: 'sign-in',
        loadChildren: 'app/authenticate-module/sign-in.module#SignInModule'
    },
    {
        path: 'stories',
        loadChildren: 'app/reports-module/reports.module#ReportsModule'
    },
    {
        path: 'interviews',
        loadChildren: 'app/interviews-module/interviews.module#InterviewsModule'
    },
    {
        path: 'videos',
        loadChildren: 'app/videos-module/videos.module#VideosModule'
    },
    {
        path: 'photos',
        loadChildren: 'app/photos-module/photos.module#PhotosModule'
    },
    {
        path: 'caricature',
        loadChildren: 'app/caricature-module/caricature.module#CaricatureModule'
    }
];

export const AppRouterProvider: ModuleWithProviders = RouterModule.forRoot(appRoutes);
