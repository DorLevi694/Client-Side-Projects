import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DataService } from '../core/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class NewListGuard implements CanActivate {

  readonly addNewListUrl: string = '/lists/-1/edit';

  constructor(
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<true | UrlTree> {

    let res = (route.params.listId == -1) ? this.router.parseUrl('/lists/-1/edit') : true;

    return of(res);
  }

}