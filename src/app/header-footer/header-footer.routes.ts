import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {HeaderComponent} from "./header.component";

const headerRoutes: Routes = [
    {
        path:'header',
        component: HeaderComponent
    }
];

export const HeaderRouterProvider: ModuleWithProviders = RouterModule.forChild(headerRoutes);