import {Routes, RouterModule} from "@angular/router";
import {ReportsComponent} from "./reports.component";
import {ModuleWithProviders} from "@angular/core";
import {ReportComponent} from "./components/report/report.component";

const reportsRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ReportsComponent
            },
            {
                path: ':id',
                component: ReportComponent
            }
        ]
    }
];

export const ReportsRouterProvider: ModuleWithProviders = RouterModule.forChild(reportsRoutes);