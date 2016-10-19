import {Component, OnInit, style, keyframes, animate, transition, state, trigger, HostBinding} from '@angular/core';
import {FirebaseService} from "../../../shared/firebase.service";
import {FirebaseListObservable} from "angularfire2/index";
import {LocalStorage, LocalStorageService} from "ng2-webstorage/index";
import {PageScrollConfig} from "ng2-page-scroll/ng2-page-scroll";
declare var tinymce:any;
declare var tinyMCE: any;

@Component({
    selector: 'app-manage-reports',
    templateUrl: './manage-reports.component.html',
    styleUrls: ['./manage-reports.component.css'],
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
export class ManageReportsComponent implements OnInit {

    public reports:FirebaseListObservable<any>;
    public bindKey:string;
    public show:boolean = false;
    public report:any = {};
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


    constructor(private _firebaseService:FirebaseService, private _storage:LocalStorageService) {

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

    pageChanged(event){
        this.currentPage = event;
    }

    onDelete(report):void {
        this.report = report;
    }

    delete(key:string) {
        this._firebaseService.deleteReport(key);
    }

    emptyMsg() {
        this._storage.store('success', '')
    }

    getReport(report):void{
        event.preventDefault();
        this.show = true;
        this.report = report;
        tinyMCE.activeEditor.setContent(this.report.content);// editor content set
    }

    hide():void {
        this.show = false;
    }

    update():void { //TODO bind facebook and twitter links to reports
        const key = this.report.$key;
        const content = tinyMCE.activeEditor.getContent();
        const title = this.report.title;
        const image = this.report.image;
        this._firebaseService.updateReport(key, content, title, image)
    }

    ngOnInit() {

        tinymce.init({
            relative_urls: false,
            convert_urls: false,
            remove_script_host: false,
            selector: 'input.form-report',
            height: 500,
            plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table contextmenu paste code'
            ],
            toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
            content_css: [
                '//fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
                '//www.tinymce.com/css/codepen.min.css'
            ]
        });

        this.reports = this._firebaseService.getReports();  //TODO fix item counting
        this._storage.store('success', '');
    }

}
