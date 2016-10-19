import {Component, OnInit, style, keyframes, animate, transition, state, trigger, HostBinding} from '@angular/core';
import {FirebaseService} from "../shared/firebase.service";

declare var jQuery:any;

@Component({
    selector: 'app-cms',
    templateUrl: './cms.component.html',
    styleUrls: ['./cms.component.css'],
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
export class CmsComponent implements OnInit {

    @HostBinding('@routeAnimation') get routeAnimation() {
        return true;
    }


    @HostBinding('style.display') get display() {
        return 'block';
    }

    ngAfterViewInit() {
        jQuery(function () {  //CMS
            jQuery('.navbar-toggle').click(function () {
                jQuery('.navbar-nav').toggleClass('slide-in');
                jQuery('.side-body').toggleClass('body-slide-in');
                jQuery('#search').removeClass('in').addClass('collapse').slideUp(200);
            });
            jQuery('#search-trigger').click(function () {
                jQuery('.navbar-nav').removeClass('slide-in');
                jQuery('.side-body').removeClass('body-slide-in');
            });
        });

        jQuery(document).on('click', '#close-preview', function () {  // uploader jQuery
            jQuery('.image-preview').popover('hide');
            jQuery('.image-preview').hover(
                function () {
                    jQuery('.image-preview').popover('show');
                },
                function () {
                    jQuery('.image-preview').popover('hide');
                }
            );

        });
    }

    constructor(private _firebaseService:FirebaseService) {
    }

    logout():void {
        event.preventDefault();
        this._firebaseService.logout()
    }


    ngOnInit() {
    }

}
