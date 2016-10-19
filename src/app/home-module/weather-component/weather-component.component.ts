import {Component, OnInit} from '@angular/core';
declare var jQuery:any;

@Component({
    selector: 'app-weather-component',
    templateUrl: './weather-component.component.html',
    styleUrls: ['./weather-component.component.css']
})
export class WeatherComponentComponent implements OnInit {

    ngAfterViewInit() {
        jQuery(document).ready(function () {  //TODO DRY
            jQuery.simpleWeather({
                woeid: '1947122', //damaskus
                location: '',
                unit: 'c',
                success: function (weather) {
                    jQuery('#dmTm').html(weather.temp + '&deg;');
                    jQuery('#dmHm').text(weather.humidity + '%');
                    jQuery('#dmWs').text(weather.wind.speed + ' ' + weather.units.speed);
                    jQuery('#dmSVG').html("<img src='app/shared/weathericons/" + weather.code + ".svg' " + " class='wetterImg' style='width:100%;height: auto;'>");
                },
                error: function (error) {
                    jQuery(".location").text(error);
                }
            });

            jQuery.simpleWeather({
                woeid: '1947132', //aleppo
                location: '',
                unit: 'c',
                success: function (weather) {
                    jQuery('#alTm').html(weather.temp + '&deg;');
                    jQuery('#alHm').text(weather.humidity + '%');
                    jQuery('#alWs').text(weather.wind.speed + ' ' + weather.units.speed);
                    jQuery('#alSVG').html("<img src='app/shared/weathericons/" + weather.code + ".svg' " + " class='wetterImg' style='width: 100%;height: auto;'>");
                },
                error: function (error) {
                    jQuery(".location").text(error);
                }
            });

            jQuery.simpleWeather({
                woeid: '1947140', //Homs
                location: '',
                unit: 'c',
                success: function (weather) {
                    jQuery('#hmTm').html(weather.temp + '&deg;');
                    jQuery('#hmHm').text(weather.humidity + '%');
                    jQuery('#hmWs').text(weather.wind.speed + ' ' + weather.units.speed);
                    jQuery('#hmSVG').html("<img src='app/shared/weathericons/" + weather.code + ".svg' " + " class='wetterImg' style='width: 100%;height: auto;'>");
                },
                error: function (error) {
                    jQuery(".location").text(error);
                }
            });

            jQuery.simpleWeather({
                woeid: '1947075', //Lattakia
                location: '',
                unit: 'c',
                success: function (weather) {
                    jQuery('#ltTm').html(weather.temp + '&deg;');
                    jQuery('#ltHm').text(weather.humidity + '%');
                    jQuery('#ltWs').text(weather.wind.speed + ' ' + weather.units.speed);
                    jQuery('#ltSVG').html("<img src='app/shared/weathericons/" + weather.code + ".svg' " + " class='wetterImg' style='width: 100%;height: auto;'>");
                },
                error: function (error) {
                    jQuery(".location").text(error);
                }
            });

            jQuery.simpleWeather({
                woeid: '1947135', //hama
                location: '',
                unit: 'c',
                success: function (weather) {
                    jQuery('#haTm').html(weather.temp + '&deg;');
                    jQuery('#haHm').text(weather.humidity + '%');
                    jQuery('#haWs').text(weather.wind.speed + ' ' + weather.units.speed);
                    jQuery('#haSVG').html("<img src='app/shared/weathericons/" + weather.code + ".svg' " + " class='wetterImg' style='width: 100%;height: auto;'>");
                },
                error: function (error) {
                    jQuery(".location").text(error);
                }
            });

            jQuery.simpleWeather({
                woeid: '1947143', //idlib
                location: '',
                unit: 'c',
                success: function (weather) {
                    jQuery('#idTm').html(weather.temp + '&deg;');
                    jQuery('#idHm').text(weather.humidity + '%');
                    jQuery('#idWs').text(weather.wind.speed + ' ' + weather.units.speed);
                    jQuery('#idSVG').html("<img src='app/shared/weathericons/" + weather.code + ".svg' " + " class='wetterImg' style='width: 100%;height: auto;'>");
                },
                error: function (error) {
                    jQuery(".location").text(error);
                }
            });

            jQuery('#weather').carousel({ //sliders interpolation prevent
                pause: true,
                interval: false
            });
        });
    }

    constructor() {
    }

    ngOnInit() {
        this.ngAfterViewInit()
    }

}


