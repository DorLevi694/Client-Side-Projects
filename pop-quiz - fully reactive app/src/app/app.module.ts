import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { QuestionPresentorComponent } from './components/question-presentor/question-presentor.component';
import { SummeryComponent } from './components/summery/summery.component';
import { QuizOverComponent } from './components/quiz-over/quiz-over.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    QuestionPresentorComponent,
    SummeryComponent,
    QuizOverComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
