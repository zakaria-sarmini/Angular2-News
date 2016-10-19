import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HeaderComponent} from "./header.component";
import {FooterComponent} from "./footer.component";
import {HeaderRouterProvider} from "./header-footer.routes";

@NgModule({
    imports: [
        CommonModule,
        HeaderRouterProvider
    ],
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ]
})

export class HeaderFooterModule {}