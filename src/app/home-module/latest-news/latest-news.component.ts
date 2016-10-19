import {Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2/index";
import {Router} from "@angular/router";

@Component({
    selector: 'app-latest-news',
    templateUrl: './latest-news.component.html',
    styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {

    public interviews: FirebaseListObservable<any>;
    public videos: FirebaseListObservable<any>;
    public picOfTheDay: any;
    public regex: RegExp = new RegExp(/[A-Z]/g);
    public readMe = "<a style='text-decoration: none' class='text-warning no-line'>Read More</a>"

    constructor(private _af: AngularFire, private _router: Router) {
    }

    openInterview(key: string) {
        this._router.navigate(['/interviews/' + key]);
    }

    openVideo(key) {
        this._router.navigate(['/videos/' + key]);
    }

    ngOnInit() {
        this.interviews = this._af.database.list('/interviews', {
            query: {
                limitToLast: 3
            }
        });
        this.videos = this._af.database.list('/videos', {
            query: {
                limitToLast: 3
            }
        });
        this._af.database.list('/images/photos', {
            query: {
                limitToLast: 1
            }
        }).subscribe(data =>  {this.picOfTheDay = data[0]})
    }
}
