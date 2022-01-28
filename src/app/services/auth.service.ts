import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import {map, switchMap} from 'rxjs/operators';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { AppUser } from '../models/app-user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  rememberMe: string = "session";

  constructor(private afAuth: AngularFireAuth,private userService: UserService) { }

  getAuth() {
    return this.afAuth.authState.pipe(map(auth => auth));
  }

  login(email: string, password:string){
    return this.afAuth.setPersistence(this.rememberMe).then(() => {
      return this.afAuth.signInWithEmailAndPassword(email,password);
    })
  }

  logout(){
    return this.afAuth.signOut();
  }

  setRememberMe(){
    this.rememberMe = firebase.auth.Auth.Persistence.LOCAL;
  }

  signup(email: string,password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email,password);
  }

  signUpWithGoogle(){
    return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  get appUser$() : Observable<AppUser>{
    return this.getAuth().pipe(
      switchMap(
        user => this.userService.getUser(user?.uid as string)
      )
    )
  }

}
