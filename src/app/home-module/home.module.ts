import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HomeRouterProvider} from "./home.routes";
import {VideoSectionComponent} from "./video-section/video-section.component";
import {PartnersSectionComponent} from "./partners-section/partners-section.component";
import {MapSectionComponent} from "./map-section/map-section.component";
import {LatestNewsComponent} from "./latest-news/latest-news.component";
import {WeatherComponentComponent} from "./weather-component/weather-component.component";
import {StreamSectionComponent} from "./stream-section/stream-section.component";
import {MainSliderComponent} from "./main-slider/main-slider.component";
import {HomeComponent} from "./home.component";
import {LoadingAnimateService} from "ng2-loading-animate/ng2-loading-animate";
import {HeaderFooterModule} from "../header-footer/header-footer.module";
import {FirebaseService} from "../shared/firebase.service";
import {DeSortPipeModule} from "../shared/pipes/pipe.module";

@NgModule({
    imports: [
        CommonModule,
        HomeRouterProvider,
        HeaderFooterModule,
        DeSortPipeModule,
    ],
    declarations: [
        HomeComponent,
        MainSliderComponent,
        StreamSectionComponent,
        LatestNewsComponent,
        MapSectionComponent,
        WeatherComponentComponent,
        PartnersSectionComponent,
        VideoSectionComponent,
    ],
    providers: [
        LoadingAnimateService,
        FirebaseService
    ]
})

export class HomeModule {}