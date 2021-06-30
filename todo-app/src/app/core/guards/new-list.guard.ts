import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewListGuard implements CanActivate {

  readonly addNewListUrl: string = '/lists/-1/edit';

  constructor(
    private router: Router,
  ) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<true | UrlTree> {

    let res = (route.params.listId == -1) ? this.router.parseUrl(this.addNewListUrl) : true;

    return of(res);
  }

}