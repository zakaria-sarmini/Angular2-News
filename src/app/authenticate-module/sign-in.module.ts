import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SignInComponent} from "./sign-in.component";
import {SignInRouterProvider} from "./sign-in.routes";
import {FormsModule} from "@angular/forms";
import {FirebaseService} from "../shared/firebase.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SignInRouterProvider
    ],
    declarations: [
        SignInComponent
    ],
    providers: [
        FirebaseService
    ]
})

export class SignInModule {}