import {Component, OnInit} from '@angular/core';
import {LocalStorageService, LocalStorage} from "ng2-webstorage/index";
import {FirebaseService} from "../shared/firebase.service";

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

    constructor(private _storage: LocalStorageService, private _firebaseService: FirebaseService) {
    }

    @LocalStorage('message')
    public message;

    emptyMsg():void{
        this._storage.store('message', '')
    }

    signIn(userInfo):void {
        this._firebaseService.login(userInfo.email, userInfo.password);
    }

    ngOnInit() {
        this._storage.store('message', '')
    }

}
