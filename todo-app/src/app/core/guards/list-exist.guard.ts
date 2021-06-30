import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class ListExistGuard implements CanActivate {

  readonly notFoundUrl: string = 'not-found';

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> {

    let listId = route.params.listId;

    let res = this.dataService.listExist(listId).pipe(
      map(res => res == true ? true : false),
      catchError( e => of(this.router.parseUrl(this.notFoundUrl)) )
    );

    return res;
  }
}
