import {
    Component, style, keyframes, animate, transition, state, trigger, HostBinding, OnInit
} from "@angular/core";
import {AngularFire} from "angularfire2/index";
declare var jQuery:any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [
        trigger('routeAnimation', [
            state('*', style({opacity: 1, transform: 'translateX(0)'})),
            transition('void => *', [
                animate('0.1s 0.3s', keyframes([
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

export class HomeComponent implements OnInit {

    public mainSlider:any;
    public status: string = 'loading';
    public streamSectionStory: any;

    @HostBinding('@routeAnimation') get routeAnimation() {
        return true;
    }

    @HostBinding('style.position') get position() {
        return 'absolute';
    }

    @HostBinding('style.width') get width() {
        return '100%';
    }

    constructor(private _af:AngularFire) {
    }


    ngOnInit():void {
        this._af.database.list('/reports', {
            query: {
                limitToLast: 10
            }
        }).subscribe(stories => {
            this.mainSlider = stories.slice(5,10);
            this.status = 'ready';
            this.streamSectionStory = stories.slice(4,5);
            jQuery(document).ready(function () {
                var clickEvent = false;
                jQuery('#myCarousel').carousel({
                    interval: false,
                }).on('click', '.list-group li', function () {
                    clickEvent = true;
                    jQuery('.list-group li').removeClass('active');
                    jQuery(this).addClass('active');
                })
            });
        });
    }

}