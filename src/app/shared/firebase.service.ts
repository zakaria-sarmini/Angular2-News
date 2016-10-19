import {Injectable} from "@angular/core";
import {AngularFire} from "angularfire2/index";
import {LocalStorageService} from "ng2-webstorage/index";
import {Router} from "@angular/router";
import 'rxjs/Rx';

@Injectable()

export class FirebaseService {

    constructor(private _af:AngularFire, private _storage:LocalStorageService, private _router:Router) {

    }

    /*-------------------------------------Users----------------------------------------*/

    addUser(firstName:string, lastName:string, email:string, password:string, phone:string):void {
        this._af.auth.createUser({
            email: email,
            password: password
        })
            .then((user) => {
                this._storage.store('success', 'New User has been successfully created');
                this._af.database.object('/users/' + user.uid).set({
                    firstname: firstName,
                    lastname: lastName,
                    email: email,
                    phone: phone
                })
            }, (error) => {
                console.trace(error);
                this._storage.store('error', error.message)
            })
    }

    getUsers() {
        return this._af.database.list('/users')
    }

    getUser() {
        return this._af.auth
    }

    login(email:string, password:string):void {
        this._af.auth.login({
            email: email,
            password: password
        }).then((done) => {
            this._router.navigate(['content-management'])
        }, (error) => {
            console.trace(error);
            this._storage.store('message', error.message);
            this._router.navigate(['sign-in']);
        })
    }

    logout():void {
        this._af.auth.logout();
        this._router.navigate(['/']);
    }

    /*---------------------------------------Stories--------------------------------------*/

    addReport(title:string, content:string, date:number, tags, image:string):void { //TODO remove consoles
        console.log('title : ' + title);
        console.log('content :' + content);
        console.log('date : ' + date);
        console.log('tags : ' + tags);
        this.getUser().subscribe(user => {
            console.log(user);
            this._af.database.object('/users/' + user.uid).subscribe(author => {
                console.log(author);
                this._af.database.list('/reports').push({
                    author: author.firstname + ' ' + author.lastname,
                    title: title,
                    content: content,
                    date: date,
                    tags: tags,
                    image: image,
                    facebookLink: '',
                    twitterLink: '',
                }).then((success) => this._storage.store('success', 'Report has been successfully added'));
            })
        });
    }

    getReports() {
        return this._af.database.list('/reports')
    }

    getReport(reportId) {
        return this._af.database.object('/reports/' + reportId)
    }

    deleteReport(key:string) {
        this._af.database.list('/reports').remove(key).then((success) => this._storage.store('success', 'Report has been successfully deleted'))
    }

    updateReport(key:string, content:string, title:string, image:string) {
        this._af.database.list('/reports').update(key, {
            content: content,
            image: image,
            title: title
        }).then(success => this._storage.store('success', 'Report has been successfully updated'))
    }

    /*-----------------------------------Interviews------------------------------------------*/

    addInterview(title:string, content:string, date:number, image:string) {
        this.getUser().subscribe(user => {
            this._af.database.object('/users/' + user.uid).subscribe(author => {
                this._af.database.list('/interviews').push({
                    author: author.firstname + ' ' + author.lastname,
                    title: title,
                    content: content,
                    date: date,
                    image: image,
                    facebookLink: '',
                    twitterLink: '',
                }).then((success) => this._storage.store('success', 'Interview has been successfully added'));
            })
        })
    }

    getInterviews() {
        return this._af.database.list('/interviews')
    }

    getInterview(reportId) {
        return this._af.database.object('/interviews/' + reportId)
    }

    updateInterview(key:string, content:string, title:string, image:string) { //TODO add failure messages
        this._af.database.list('/interviews').update(key, {
            content: content,
            image: image,
            title: title
        }).then(success => this._storage.store('success', 'Interview has been successfully updated'))
    }

    deleteInterview(key:string) {
        this._af.database.list('/interviews').remove(key).then((success) => this._storage.store('success', 'Interview has been successfully deleted'))
    }

    /*---------------------------------------Videos--------------------------------------*/

    addVideo(title:string, videoURL:string, description:string, date:number) {
        this.getUser().subscribe(user => {
            this._af.database.object('/users/' + user.uid).subscribe(author => {
                this._af.database.list('/videos').push({
                    author: author.firstname + ' ' + author.lastname,
                    title: title,
                    videoURL: videoURL,
                    description: description,
                    date: date,
                    facebookLink: '',
                    twitterLink: '',
                }).then((success) => this._storage.store('success', 'Interview has been successfully added'));
            })
        })
    }

    getVideos() {
        return this._af.database.list('/videos')
    }

    getVideo(videoID) {
        return this._af.database.object('/videos/' + videoID)
    }

    deleteVideo(key:string) {
        this._af.database.list('/videos').remove(key).then((success) => this._storage.store('success', 'Video has been successfully deleted'))
    }

    updateVideo(key:string, title:string, videoURL:string, description:string) { //TODO add failure messages
        this._af.database.list('/videos').update(key, {
            title: title,
            videoURL: videoURL,
            description: description,
        }).then(success => this._storage.store('success', 'Video has been successfully updated'))
    }

    /*---------------------------------------Images--------------------------------------*/

    addPhoto(photoURL) {
        this._af.database.list('/images/photos').push({
            photoURL: photoURL
        }).then((success) => this._storage.store('success', 'New Photo has been successfully added'))
    }

    getPhotos() {
        return this._af.database.list('/images/photos');
    }

    deletePhoto(key) {
        this._af.database.list('/images/photos').remove(key).then((success) => {
            this._storage.store('success', 'Photo has been successfully deleted');
            window.scroll(0, 0)
        })
    }

    addCaricature(photoURL) {
        this._af.database.list('/images/caricature').push({
            photoURL: photoURL
        }).then((success) => this._storage.store('success', 'Photo has been successfully added'))
    }

    getCaricature() {
        return this._af.database.list('images/caricature');
    }

    deleteCaricature(key) {
        this._af.database.list('/images/caricature').remove(key).then((success) => this._storage.store('success', 'Photo has been successfully removed'))
    }

}