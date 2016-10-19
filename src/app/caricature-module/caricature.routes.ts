import {Routes, RouterModule} from "@angular/router";
import {CaricatureModuleComponent} from "./caricature-module.component";
import {ModuleWithProviders} from "@angular/core";
export const caricatureRoutes: Routes = [
    {
        path: '',
        component: CaricatureModuleComponent
    }
];

export const CaricatureRouterProvider: ModuleWithProviders = RouterModule.forChild(caricatureRoutes);