import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class HasListGuard implements CanActivate {

  readonly addNewListUrl:string = '/lists/-1/edit';

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<true | UrlTree> {
    return this.dataService.getCountOfLists().pipe(
      map(num => num > 0 ? true : this.router.parseUrl(this.addNewListUrl))
    );
  }

}
