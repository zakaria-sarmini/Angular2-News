import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {HomeComponent} from "./home.component";

const homeRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    }
];

export const HomeRouterProvider: ModuleWithProviders = RouterModule.forChild(homeRoutes);