import {Component} from "@angular/core";

@Component({
    selector: 'app-header',
    template: `
                <style>
                    .black {
                        background-color: #222;
                    }
                    
                    .allign {
                        margin: 3px 8%;
                    }
                    
                    ul.social-network {
                        list-style: none;
                        display: inline;
                        margin-left:0 !important;
                        padding: 0;
                    }
                    ul.social-network li {
                        display: inline;
                        margin: 0 5px;
                    }
                    
                     li a.icoRss:hover {
                        background-color: #F56505;
                    }
                     li a.icoFacebook:hover {
                        background-color:#3B5998;
                    }
                     li a.icoTwitter:hover {
                        background-color:#33ccff;
                    }
                     li a.icoGoogle:hover {
                        background-color: #bd1415;
                    }
                    
                    
                    .social-network a.icoRss:hover i, .social-network a.icoFacebook:hover i, .social-network a.icoTwitter:hover i,
                    .social-network a.icoGoogle:hover i, .social-network a.icoVimeo:hover i, .social-network a.icoLinkedin:hover i {
                        color:#fff;
                    }
                    a.socialIcon:hover, .socialHoverClass {
                        color:#44BCDD;
                    }
                    
                    .social-circle li a {
                        display:inline-block;
                        position:relative;
                        margin:0 auto 0 auto;
                        -moz-border-radius:50%;
                        -webkit-border-radius:50%;
                        border-radius:50%;
                        text-align:center;
                        width: 50px;
                        height: 50px;
                        font-size:23px;
                    }
                    .social-circle li i {
                        margin:0;
                        line-height:50px;
                        text-align: center;
                    }
                    
                     li a:hover i, .triggeredHover {
                        -moz-transform: rotate(360deg);
                        -webkit-transform: rotate(360deg);
                        -ms--transform: rotate(360deg);
                        transform: rotate(360deg);
                        -webkit-transition: all 0.2s;
                        -moz-transition: all 0.2s;
                        -o-transition: all 0.2s;
                        -ms-transition: all 0.2s;
                        transition: all 0.2s;
                    }
                    li a i {
                        color: #fff;
                        -webkit-transition: all 0.8s;
                        -moz-transition: all 0.8s;
                        -o-transition: all 0.8s;
                        -ms-transition: all 0.8s;
                        transition: all 0.8s;
                    }     
                                       
                    nav.novi {
                        background-color: #222;
                        margin-bottom: 0px;
                    }
                    
                    a.dropdown-toggle {
                        color: #fff !important;
                    }
                    
                    a.dropdown-toggle:hover {
                        color: #ffa300 !important;
                        background-color: #fff !important;
                    }
                    .navbar-default .navbar-nav>.open>a {
                        background-color: #fff !important;
                        color: #ffa300 !important;
                    }
                    
                    span.input.input--kaede {
                        float: right;
                        margin: 0.5%;
                        margin-top: 1%;
                    }
                </style>
                <div class="container-fluid black">
            <nav class="navbar navbar-default novi">
                <div class="container width">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" routerLink="/home">L O G O</a>
                    </div>
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav">
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle text-center" data-toggle="dropdown" role="button"
                                   aria-haspopup="true" aria-expanded="false">Reports <span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a routerLink="/stories">Stories</a></li>
                                    <li><a routerLink="/interviews">Interviwes</a></li>
                                    <li role="separator" class="divider"></li>
                                    <li><a routerLink="/content-management/manage-reports">Stories Management</a></li>
                                    <li><a routerLink="/content-management/manage-interviews">Interviews Management</a></li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle text-center" data-toggle="dropdown" role="button"
                                   aria-haspopup="true" aria-expanded="false">Media<span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a routerLink="/videos">Videos</a></li>
                                    <li><a routerLink="/photos">Photos</a></li>
                                    <li><a routerLink="/caricature">Caricature</a></li>
                                    <li role="separator" class="divider"></li>
                                    <li><a routerLink="/content-management/photos">Photos Management</a></li>
                                    <li><a routerLink="/content-management/videos-management">Videos Management</a></li>
                                </ul>
                            </li>
                            <li><a>This is an Angular 2 News App with simple CMS made by Zakaria Sarmini</a></li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li><a  class="icoRss text-center" title="Rss"><i class="fa fa-rss"></i></a></li>
                            <li><a  class="icoFacebook text-center" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                            <li><a  class="icoTwitter text-center" title="Twitter"><i class="fa fa-twitter"></i></a></li>
                            <li><a  class="icoGoogle text-center" title="Youtube"><i class="fa fa-youtube-play"
                                                                                 aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    `
})

export class HeaderComponent { //TODO hide content management from visitors

}