import {Component} from "@angular/core";
declare var jQuery:any;

@Component({
    selector: 'app-footer',
    template: `
        <style>
            .black {
                        background-color: #222;
                    }
            #copyright {
                color: #fff;
            }
            
            p {
                margin-bottom: 0px !important;
            }
            
            .middle-copyright p {
                color: #fff;
                margin-top: 2%;
            }
            
            .middle-copyright a{
                color: #fff;
                text-decoration: none;
                transition: 0.3s;
            }
            
            .middle-copyright a:hover{
                color: #47c0f0;
                text-decoration: none;
                font-size: 17px;
            }
            
            .middle-copyright span {
                color: #47c0f0;
            }
        </style>
        <div class="container-fluid black">
            
                <div class="row" style="margin-top: 1%">
                    <div class="col-md-4 col-sm-4 col-xs-12 text-center">
                        <p id="copyright"> LOGO &#169; </p>
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-12 text-center middle-copyright">
                        <p><a href="#" target="_blank">About us</a> <span>|</span> <a href="#" target="_blank">Legal Infos</a>
                            <span>|</span> <a href="#" target="_blank" style="margin-top: 2%">Contact us</a></p>
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-12 text-center middle-copyright">
                        <p>All rights reserved</p>
                    </div>
                </div>
           
            <br>
        </div>
    `
})

export class FooterComponent {

    ngAfterViewInit() {
        jQuery("#copyright").append((new Date).getFullYear());
    }

}