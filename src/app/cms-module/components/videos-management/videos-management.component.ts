import {
    Component, OnInit, style, keyframes, animate, transition, state, trigger, HostBinding
} from '@angular/core';
import {PageScrollConfig} from "ng2-page-scroll/ng2-page-scroll";
import {LocalStorageService, LocalStorage} from "ng2-webstorage/index";
import {FirebaseService} from "../../../shared/firebase.service";
import {DomSanitizer} from "@angular/platform-browser";
declare var jQuery:any;

@Component({
    selector: 'app-videos-management',
    templateUrl: './videos-management.component.html',
    styleUrls: ['./videos-management.component.css'],
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
export class VideosManagementComponent implements OnInit {

    public videos:any;
    public show:boolean = false;
    public video:any = {};
    public currentPage: number;

    @LocalStorage('success')
    public success;


    @HostBinding('@routeAnimation') get routeAnimation() {
        return true;
    }

    @HostBinding('style.position') get position() {
        return 'absolute';
    }

    @HostBinding('style.width') get width() {
        return '100%';
    }

    public title:string = '';
    public videoURL:string = '';
    public description:string = '';

    constructor(private _firebaseService:FirebaseService, private _storage:LocalStorageService, private _sanitizer:DomSanitizer) {

        PageScrollConfig.defaultScrollOffset = 50;  // scrolling animation
        PageScrollConfig.defaultDuration = 1000;
        PageScrollConfig.defaultEasingLogic = {
            ease: (t:number, b:number, c:number, d:number):number => {
                // easeInOutExpo easing
                if (t === 0) return b;
                if (t === d) return b + c;
                if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        };

    }

    submit() {
        let title = this.title;
        let videoURL = this.videoURL;
        let description = this.description;
        const date = Date.now();
        this._firebaseService.addVideo(title, videoURL, description, date)
    }

    pageChanged(event){
        this.currentPage = event;
        jQuery(document).ready(function () {
            console.log('fancy')//Photos Gallery
            jQuery(".fancybox").fancybox({
                openEffect: "elastic",
                closeEffect: "none"
            });
        });
    }

    emptyMsg() {
        this._storage.store('success', '');
    }

    onDelete(video):void {
        this.video = video;
    }

    getVideo(video):void {
        event.preventDefault();
        this.show = true;
        this.video = video;
    }

    hide():void {
        this.show = false;
    }

    delete(key:string) {
        this._firebaseService.deleteVideo(key)
    }

    update() {
        const key = this.video.$key;
        const title = this.video.title;
        const videoURL = this.video.videoURL;
        const description = this.video.description;
        this._firebaseService.updateVideo(key, title, videoURL, description)
    }

    ngOnInit() {
        this._firebaseService.getVideos().subscribe(videos => {
            this.videos = videos;
            jQuery(document).ready(function () {
                console.log('fancy')//Photos Gallery
                jQuery(".fancybox").fancybox({
                    openEffect: "elastic",
                    closeEffect: "none"
                });
            });
        });
        this._storage.store('success', '');

    }

}
