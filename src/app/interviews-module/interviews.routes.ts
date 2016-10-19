import {Routes, RouterModule} from "@angular/router";
import {InterviewsComponent} from "./interviews.component";
import {ModuleWithProviders} from "@angular/core";
import {InterviewComponent} from "./interview/interview.component";

const interviewsRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: InterviewsComponent
            },
            {
                path: ':id',
                component: InterviewComponent
            }
        ]
    }
];

export const InterviewsRouterProvider: ModuleWithProviders = RouterModule.forChild(interviewsRoutes);