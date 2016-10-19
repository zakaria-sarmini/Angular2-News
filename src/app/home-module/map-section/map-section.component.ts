import {Component, OnInit} from '@angular/core';
import {AngularFire} from "angularfire2/index";

@Component({
    selector: 'app-map-section',
    templateUrl: './map-section.component.html',
    styleUrls: ['./map-section.component.css']
})
export class MapSectionComponent implements OnInit {

    public articles: any;

    constructor(private _af: AngularFire) {
    }

    ngOnInit() {
        this._af.database.list('/interviews', {
            query: {
                limitToLast: 10
            }
        }).subscribe(data => {this.articles=data.slice(3,7)})
    }
}
