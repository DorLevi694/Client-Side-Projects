import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuthenticateSubject$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  isAuthentication() {
    return this.isAuthenticateSubject$.asObservable();
  }

  login() {
    this.isAuthenticateSubject$.next(true);
  }

  logout() {
    this.isAuthenticateSubject$.next(false);
  }
}




