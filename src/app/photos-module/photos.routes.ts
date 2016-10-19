import {Routes, RouterModule} from "@angular/router";
import {PhotosModuleComponent} from "./photos-module.component";
import {ModuleWithProviders} from "@angular/core";

const photosRoutes: Routes = [
    {
        path: '',
        component: PhotosModuleComponent
    }
];

export const PhotosRouterProvider: ModuleWithProviders = RouterModule.forChild(photosRoutes);