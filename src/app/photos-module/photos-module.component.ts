import {Component, OnInit, style, keyframes, animate, transition, state, trigger, HostBinding} from '@angular/core';
import {FirebaseService} from "../shared/firebase.service";
declare var jQuery: any;

@Component({
    selector: 'app-photos-module',
    templateUrl: './photos-module.component.html',
    styleUrls: ['./photos-module.component.css','../shared/loading.css'],
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
export class PhotosModuleComponent implements OnInit {

    public photos: any;

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

    constructor(private _fireBaseService:FirebaseService) {
    }

    pageChanged(event) {
        jQuery(document).ready(function(){ //Photos Gallery
            jQuery(".fancybox").fancybox({
                openEffect: "elastic",
                closeEffect: "none"
            });
        });
    }

    ngOnInit() {
        this._fireBaseService.getPhotos().subscribe(photos => {
            this.photos = photos;
            this.status = 'ready';
            jQuery(document).ready(function(){ //Photos Gallery
                jQuery(".fancybox").fancybox({
                    openEffect: "elastic",
                    closeEffect: "none"
                });
            });
        });
    }

}
