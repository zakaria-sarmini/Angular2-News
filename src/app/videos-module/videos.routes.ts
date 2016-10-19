import {Routes, RouterModule} from "@angular/router";
import {VideosComponent} from "./videos.component";
import {ModuleWithProviders} from "@angular/core";
import {VideoComponent} from "./video/video.component";

const videosRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: VideosComponent
            },
            {
                path: ':id',
                component: VideoComponent
            }
        ]
    }
];

export const VideosRouterProvider: ModuleWithProviders = RouterModule.forChild(videosRoutes);