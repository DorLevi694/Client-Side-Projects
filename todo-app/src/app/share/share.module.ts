import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemPresenterComponent } from './components/todo-item-presenter/todo-item-presenter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoListBoxComponent } from './components/todo-list-box/todo-list-box.component';
import { MaterialModule } from '../material/material.module';

// import { MatIconModule } from '@angular/material/icon';
// import { MatButtonModule } from '@angular/material/button';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    TodoItemPresenterComponent,
    TodoListBoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    
    MaterialModule,
    TodoItemPresenterComponent,
    TodoListBoxComponent
  ]

})
export class ShareModule { }
