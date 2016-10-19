import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {FirebaseService} from "./firebase.service";
import {LocalStorageService} from "ng2-webstorage/index";
import 'rxjs/Rx';

@Injectable()

export class GuardService implements CanActivate {

    constructor(private _firebaseService:FirebaseService, private _storage:LocalStorageService, private _router:Router) {
    }

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean {
        return this._firebaseService.getUser().map(user => {
            if (user) {
                return true;
            } else {
                this._storage.store('message', 'You must be Logged in to see this page');
                this._router.navigate(['sign-in']);
            }
        }).first()
    }
}