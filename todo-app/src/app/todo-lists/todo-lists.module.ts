import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './components/lists/lists.component';
import { ListComponent } from './components/list/list.component';
import { EditListComponent } from './components/edit-list/edit-list.component';
import { ShareModule } from 'src/app/share/share.module';
import { TodoListsRoutingModule } from './todo-lists-routing.module';



@NgModule({
  declarations: [ 
    ListsComponent,
    ListComponent,
    EditListComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    TodoListsRoutingModule
  ]
})
export class TodoListsModule { }
