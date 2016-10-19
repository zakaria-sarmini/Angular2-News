import {
    Component, OnInit, style, keyframes, animate, transition, state, trigger, HostBinding,
    OnDestroy
} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {FirebaseService} from "../../../shared/firebase.service";
import {LocalStorage, LocalStorageService} from "ng2-webstorage/index";

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css'],
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
export class AddUserComponent implements OnInit, OnDestroy{

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

    @LocalStorage('error')
    public error;

    constructor(private _title:Title, private _firebaseService:FirebaseService, private _storage:LocalStorageService) {
    }

    public user:any = {};

    addUser(user) {
        console.log(user);
        this.user = user;
        this._firebaseService.addUser(user.firstName, user.lastName, user.email, user.password, user.phone)
    }

    emptyMsg():void {
        this._storage.store('success', '');
        this._storage.store('error', '');
    }

    ngOnInit() { //TODO set titles to all pages
        this._title.setTitle('User Management');
        this._storage.store('message', '');
    }


    ngOnDestroy():void {
        this._storage.store('success', '')
    }
}
