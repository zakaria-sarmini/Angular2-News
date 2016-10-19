import {Component, OnInit, style, keyframes, animate, transition, state, trigger, HostBinding} from '@angular/core';
import {FirebaseService} from "../../../shared/firebase.service";
import {ActivatedRoute} from "@angular/router";
import {FirebaseObjectObservable} from "angularfire2/index";
import "rxjs/add/operator/map";

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css'],
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
export class ReportComponent implements OnInit {

    @HostBinding('@routeAnimation') get routeAnimation() {
        return true;
    }

    @HostBinding('style.position') get position() {
        return 'absolute';
    }

    @HostBinding('style.width') get width() {
        return '100%';
    }

    public report: FirebaseObjectObservable<any>;

    constructor(private _firebaseService:FirebaseService, private _route:ActivatedRoute) {
    }

    ngOnInit() {
        window.scroll(0,0);
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this.report = this._firebaseService.getReport(id);
            })
    }

}
