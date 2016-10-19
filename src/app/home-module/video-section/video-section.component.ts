import {Component, OnInit} from '@angular/core';
import {AngularFire} from "angularfire2/index";

@Component({
    selector: 'app-video-section',
    templateUrl: './video-section.component.html',
    styleUrls: ['./video-section.component.css']
})
export class VideoSectionComponent implements OnInit {
    public caricature: any;
    public video:any;
    constructor(private _af: AngularFire) {
    }

    ngOnInit() {
        this._af.database.list('/images/caricature', {
            query: {
                limitToLast: 1
            }
        }).subscribe(data => this.caricature = data)
        this._af.database.list('/videos', {
            query: {
                limitToLast: 1
            }
        }).subscribe(data => {console.log(data[0]);this.video = data[0]})
    }

}
