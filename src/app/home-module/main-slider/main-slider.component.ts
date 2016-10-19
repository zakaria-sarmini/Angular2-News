import {Component} from '@angular/core';
declare var jQuery:any;

@Component({
    selector: 'app-main-slider',
    templateUrl: './main-slider.component.html',
    styleUrls: ['./main-slider.component.css', '../../shared/loading.css'],
    inputs: ['mainSlider', 'status']
})
export class MainSliderComponent{
    public status:string;
    public mainSlider:any;

    constructor() {}

}



