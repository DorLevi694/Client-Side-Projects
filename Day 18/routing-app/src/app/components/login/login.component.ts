import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isAuthenticate$!: Observable<boolean>;
  redirectUrl!: string;

  constructor(
    private authService: AuthenticationService,
    private activatedRoute: ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.isAuthenticate$ = this.authService.isAuthentication();
    
    let redirectUrl$ = this.activatedRoute.queryParams.subscribe( qp =>{ 
      this.redirectUrl = qp.redirectUrl;
    });
  }

  login() {
    this.authService.login();
    if(this.redirectUrl)
      this.router.navigateByUrl(this.redirectUrl);
  }


  logout() {
    this.authService.logout();
  }

}
