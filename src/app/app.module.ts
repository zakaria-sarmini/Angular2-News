import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AngularFireModule, AuthProviders, AuthMethods} from "angularfire2/index";
import {AppComponent} from './app.component';
import {AppRouterProvider} from "./app.routes";
import {HomeModule} from "./home-module/home.module";
import {Ng2Webstorage} from "ng2-webstorage/index";



/*const fireBaseConfig = {  // reference
 apiKey: "AIzaSyDAFS1vWZisD9SNhnyd_5IKU8jgo2b7_Pg",
 authDomain: "syria-news-c5acc.firebaseapp.com",
 databaseURL: "https://syria-news-c5acc.firebaseio.com",
 storageBucket: "syria-news-c5acc.appspot.com",
 messagingSenderId: "209513193607"
 };
 firebase.initializeApp(fireBaseConfig)*/

const fireBaseConfig = {
    apiKey: "AIzaSyDAFS1vWZisD9SNhnyd_5IKU8jgo2b7_Pg",
    authDomain: "syria-news-c5acc.firebaseapp.com",
    databaseURL: "https://syria-news-c5acc.firebaseio.com",
    storageBucket: "syria-news-c5acc.appspot.com",
    messagingSenderId: "209513193607"
};

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HomeModule,
        AppRouterProvider,
        Ng2Webstorage,
        AngularFireModule.initializeApp(fireBaseConfig, {
            provider: AuthProviders.Password,
            method: AuthMethods.Password
        }),
    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
