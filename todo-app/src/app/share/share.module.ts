import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { IconsComponent } from './components/icons/icons.component';
import { TodoItemPresenterComponent } from './components/todo-item-presenter/todo-item-presenter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IconsComponent,
    TodoItemPresenterComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule, 
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MatIconModule, 
    MatButtonModule, 
    FormsModule,
    ReactiveFormsModule,

    IconsComponent,
    TodoItemPresenterComponent
  ]

})
export class ShareModule { }
