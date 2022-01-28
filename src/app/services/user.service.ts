import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';
import { AppUser } from '../models/app-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs: AngularFirestore) { }

  updateUser(id:string, email: string,name: string) {
    return this.afs.doc('/users/' + id).set({
      name:name,
      email:email
    }, {merge: true}).then(() => {
      console.log('user saved successfully')
    }).catch((reason: any) => {
      console.log('user creation unsuccessfully', reason)
    })
  }

  getUser(id:string): Observable<AppUser>{
    return this.afs.doc('/users/'+id).valueChanges() as Observable<AppUser>;
  }

}
