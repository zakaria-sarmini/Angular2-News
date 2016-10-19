import {
    Component, OnInit, style, keyframes, animate, transition, state, trigger, HostBinding,
    Inject
} from '@angular/core';
import {FirebaseService} from "../shared/firebase.service";
import {PageScrollConfig, PageScrollService, PageScrollInstance} from "ng2-page-scroll/ng2-page-scroll";
import {DOCUMENT} from "@angular/platform-browser";

@Component({
    selector: 'app-reports',
    templateUrl: './reports.component.html',
    styleUrls: ['./reports.component.css','../shared/loading.css'],
    animations: [
        trigger('routeAnimation', [
            state('*', style({opacity: 1, transform: 'translateX(0)'})),
            transition('void => *', [
                animate('0.3s 0.3s', keyframes([
                    style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
                    style({opacity: 1, transform: 'translateX(25px)', offset: 0.3}),
                    style({opacity: 1, transform: 'translateX(0)', offset: 1.0})
                ]))
            ]),
            transition('* => void', [
                animate('0.3s', keyframes([
                    style({opacity: 1, transform: 'translateX(0)', offset: 0}),
                    style({opacity: 1, transform: 'translateX(-25px)', offset: 0.3}),
                    style({opacity: 0, transform: 'translateX(100%)', offset: 1})
                ]))
            ])
        ])
    ]
})
export class ReportsComponent implements OnInit {

    public regex = new RegExp(/[A-Z]/g);

    public reports: any;

    public status: string = 'loading';

    @HostBinding('@routeAnimation') get routeAnimation() {
        return true;
    }

    @HostBinding('style.position') get position() {
        return 'absolute';
    }

    @HostBinding('style.width') get width() {
        return '100%';
    }

    constructor(private _fireBaseService:FirebaseService, private pageScrollService:PageScrollService, @Inject(DOCUMENT) private document:Document) {

        PageScrollConfig.defaultScrollOffset = 50;  // scrolling animation
        PageScrollConfig.defaultDuration = 1000;
        PageScrollConfig.defaultEasingLogic = {
            ease: (t:number, b:number, c:number, d:number):number => {
                if (t === 0) return b;
                if (t === d) return b + c;
                if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        };
    }

    windowScroll():void {
        let pageScrollInstance:PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#goUp');
        this.pageScrollService.start(pageScrollInstance);
    }

    ngOnInit() {
        this._fireBaseService.getReports().subscribe(reports => {console.log(reports);this.reports = reports; this.status = 'ready'});
    }

}
