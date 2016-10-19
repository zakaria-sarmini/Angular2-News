import {Component, OnInit, AfterViewInit} from '@angular/core';
declare var jQuery: any;
@Component({
    selector: 'app-partners-section',
    templateUrl: './partners-section.component.html',
    styleUrls: ['./partners-section.component.css']
})
export class PartnersSectionComponent implements OnInit, AfterViewInit {

    constructor() {
    }


    ngAfterViewInit():void {
        jQuery(document).ready(function() {
            jQuery('#media').carousel({ //sliders interpolation prevent
                pause: true,
                interval: false
            });
        })
    }

    ngOnInit() {
    }

}
