import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-stream-section',
    templateUrl: './stream-section.component.html',
    styleUrls: ['./stream-section.component.css'],
    inputs: ['streamSectionStory']
})
export class StreamSectionComponent implements OnInit {

    public streamSectionStory:any;

    constructor() {
    }

    ngOnInit() {
    }

}
