import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Sign up with email/password
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // Sign in with email/password
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  private URL = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private API_KEY = 'AIzaSyDfSEe4QPbHdVxso22Aj443mzB1jjzb2Lw';

  constructor( private httpClient: HttpClient ) { }

  logIn( user: UserModel ) {

  }

  logOut() {

  }

  signUp( user: UserModel ) {

    const REQUEST_BODY = {
      email: user.email,
      password: user.password,
      returnSecureToken: true
    };

    return this.httpClient.post(`${this.URL}signUp?key=${this.API_KEY}`, REQUEST_BODY);

  }
}
