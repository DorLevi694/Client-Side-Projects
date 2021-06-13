import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { KefelComponent } from './components/kefel/kefel.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './gurds/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    KefelComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'kefel', component: KefelComponent , canActivate:[AuthGuard]},
      { path: 'about', component: AboutComponent },
      { path: '', pathMatch: 'full', redirectTo: 'home' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
