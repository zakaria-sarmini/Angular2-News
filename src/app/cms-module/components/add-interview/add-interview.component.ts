import {Component, OnInit, style, keyframes, animate, transition, state, trigger, HostBinding} from '@angular/core';
import {LocalStorageService, LocalStorage} from "ng2-webstorage/index";
import {FirebaseService} from "../../../shared/firebase.service";
declare var tinymce:any;
declare var tinyMCE:any;
declare var jQuery:any;

@Component({
    selector: 'app-add-interview',
    templateUrl: './add-interview.component.html',
    styleUrls: ['./add-interview.component.css'],
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
export class AddInterviewComponent implements OnInit {

    public title: string;
    public image: string;

    @HostBinding('@routeAnimation') get routeAnimation() {
        return true;
    }

    @HostBinding('style.position') get position() {
        return 'absolute';
    }

    @HostBinding('style.width') get width() {
        return '100%';
    }

    ngAfterViewInit() {
        jQuery(document).on('click', '#close-preview', function () {  // uploader jQuery
            jQuery('.image-preview').popover('hide');
            jQuery('.image-preview').hover(
                function () {
                    jQuery('.image-preview').popover('show');
                },
                function () {
                    jQuery('.image-preview').popover('hide');
                }
            );
        });

        jQuery(function () {
            var closebtn = jQuery('<button/>', {
                type: "button",
                text: 'x',
                id: 'close-preview',
                style: 'font-size: initial;',
            });
            closebtn.attr("class", "close pull-right");
            jQuery('.image-preview').popover({
                trigger: 'manual',
                html: true,
                title: "<strong>Preview</strong>" + jQuery(closebtn)[0].outerHTML,
                content: "There's no image",
                placement: 'bottom'
            });
            jQuery('.image-preview-clear').click(function () {
                jQuery('.image-preview').attr("data-content", "").popover('hide');
                jQuery('.image-preview-filename').val("");
                jQuery('.image-preview-clear').hide();
                jQuery('.image-preview-input input:file').val("");
                jQuery(".image-preview-input-title").text("Browse");
            });
            jQuery(".image-preview-input input:file").change(function () {
                var img = jQuery('<img/>', {
                    id: 'dynamic',
                    width: 250,
                    height: 200
                });
                var file = this.files[0];
                var reader = new FileReader();
                reader.onload = function (e) {
                    jQuery(".image-preview-input-title").text("Change");
                    jQuery(".image-preview-clear").show();
                    jQuery(".image-preview-filename").val(file.name);
                    /*img.attr('src', e.target.result);*/ //TODO uncomment me
                    jQuery(".image-preview").attr("data-content", jQuery(img)[0].outerHTML).popover("show");
                };
                reader.readAsDataURL(file);
            });
        })
    }

    @LocalStorage('success')
    public success;

    constructor(private _firebaseService:FirebaseService, private _storage:LocalStorageService) {
    }

    emptyMsg() {
        this._storage.store('success', '')
    }

    getContent(value){ // TODO empty fields on submit
        let title = this.title;
        const content = tinyMCE.activeEditor.getContent();
        const date = Date.now();
        const image = this.image;
        this._firebaseService.addInterview(title, content, date, image);
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
        this._storage.store('success', '');
    }

}
