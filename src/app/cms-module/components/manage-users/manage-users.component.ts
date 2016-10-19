import {
    Component, OnInit, style, keyframes, animate, transition, state, trigger, HostBinding,
    OnDestroy
} from '@angular/core';
import {FirebaseService} from "../../../shared/firebase.service";
import {FirebaseListObservable} from "angularfire2/index";
import {Subscription} from "rxjs/Rx";

@Component({
    selector: 'app-manage-users',
    templateUrl: './manage-users.component.html',
    styleUrls: ['./manage-users.component.css'],
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
export class ManageUsersComponent implements OnInit, OnDestroy{
    @HostBinding('@routeAnimation') get routeAnimation() {
        return true;
    }

    @HostBinding('style.position') get position() {
        return 'absolute';
    }

    @HostBinding('style.width') get width() {
        return '100%';
    }

    public usersSubscription: Subscription;

    public users: FirebaseListObservable<any>;

    constructor(private _firebaseService:FirebaseService) {
    }

    ngOnInit() {
        this.usersSubscription = this._firebaseService.getUsers().subscribe(()=>{
            this.users = this._firebaseService.getUsers()
        })
    }

    ngOnDestroy():void {
        this.usersSubscription.unsubscribe();
    }
}
