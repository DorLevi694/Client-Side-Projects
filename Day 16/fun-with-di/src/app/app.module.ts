import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalcComponent } from './components/calc/calc.component';
import { GroupComponent } from './components/group/group.component';
import { AdditionService } from './services/addition.service';
import { HistoryService } from './services/history.service';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    GroupComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AdditionService, 
    HistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
