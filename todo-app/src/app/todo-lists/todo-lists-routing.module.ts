import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HasListGuard } from '../core/guards/has-list.guard';
import { ListExistGuard } from '../core/guards/list-exist.guard';
import { NewListGuard } from '../core/guards/new-list.guard';
import { EditListComponent } from './components/edit-list/edit-list.component';
import { ListComponent } from './components/list/list.component';
import { ListsComponent } from './components/lists/lists.component';

const routes: Routes = [
  { path: '', component: ListsComponent, canActivate: [HasListGuard] },
  { path: ':listId', component: ListComponent, canActivate: [NewListGuard, ListExistGuard] },
  { path: ':listId/edit', component: EditListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoListsRoutingModule { }

