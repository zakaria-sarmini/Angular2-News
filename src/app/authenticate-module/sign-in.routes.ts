import {Routes, RouterModule} from "@angular/router";
import {SignInComponent} from "./sign-in.component";
import {ModuleWithProviders} from "@angular/core";

const signInRoutes:Routes = [
    {
        path: '',
        component: SignInComponent
    }
];

export const SignInRouterProvider: ModuleWithProviders = RouterModule.forChild(signInRoutes);