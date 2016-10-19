import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from "ng2-webstorage/index";
declare var jQuery:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

    constructor(private _storage: LocalStorageService){}

    ngOnInit():void {
        this._storage.store('message', '');
    }

}
