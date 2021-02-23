import { Injectable } from '@angular/core';

export const AUTHENTICATED_USER = 'authenticated';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    // console.log('Before ' + this.isUserLoggedIn())
    if(username === 'user' && password === 'password') {
      sessionStorage.setItem(AUTHENTICATED_USER, username)
      // console.log('After ' + this.isUserLoggedIn())
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER)
  }
}
