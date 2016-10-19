import {Component, OnInit, style, keyframes, animate, transition, state, trigger, HostBinding} from '@angular/core';
import {LocalStorage, LocalStorageService} from "ng2-webstorage/index";
import {FirebaseService} from "../../../../shared/firebase.service";
declare var jQuery: any;
@Component({
    selector: 'app-caricature-management',
    templateUrl: './caricature-management.component.html',
    styleUrls: ['./caricature-management.component.css'],
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
export class CaricatureManagementComponent implements OnInit {

    public photoURL: string;
    public photos: any;
    public key: string;

    @HostBinding('@routeAnimation') get routeAnimation() {
        return true;
    }

    @HostBinding('style.position') get position() {
        return 'absolute';
    }

    @HostBinding('style.width') get width() {
        return '100%';
    }

    @LocalStorage('success')
    public success;

    constructor(private _firebaseService: FirebaseService, private _storage: LocalStorageService) {}

    emptyMsg(){
        this._storage.store('success', '')
    }

    ngAfterViewInit() {
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

    submit(){
        const photoURL = this.photoURL;
        this._firebaseService.addCaricature(photoURL);
    }

    pageChanged(event) {
        jQuery(document).ready(function(){ //Photos Gallery
            jQuery(".fancybox").fancybox({
                openEffect: "gallery",
                closeEffect: "none"
            });
        });
    }

    onDelete(key) {
        this.key = key;
    }

    delete(){
        this._firebaseService.deleteCaricature(this.key);
    }

    ngOnInit() {
        this._storage.store('success', '');
        this._firebaseService.getCaricature().subscribe((photos) => {
            this.photos = photos;
            jQuery(document).ready(function(){ //Photos Gallery
                jQuery(".fancybox").fancybox({
                    openEffect: "elastic",
                    closeEffect: "none"
                });
            });
        })
    }

}
