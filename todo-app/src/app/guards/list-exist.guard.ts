import { ConditionalExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { DataService } from '../core/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class ListExistGuard implements CanActivate {

  readonly notFoundUrl: string = 'not-found';
  readonly addNewListUrl: string = '/lists/-1/edit';

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> {

    let listId = route.params.listId;
    console.log('ListExistGuard: listId->    ', listId)

    let res = this.dataService.listExist(listId).pipe(
      tap(res => console.log('ListExistGuard: res --->',res)),
      map(res => res == true ? true : false),
      catchError(e => {console.log('ListExistGuard: listId->    ', e); return of(this.router.parseUrl(this.notFoundUrl)); })
    );

    return res;
  }
}
