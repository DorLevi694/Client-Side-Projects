import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditListComponent } from './components/edit-list/edit-list.component';
import { HomeComponent } from './components/home/home.component';
import { ItemsComponent } from './components/items/items.component';
import { ListComponent } from './components/list/list.component';
import { ListsComponent } from './components/lists/lists.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HasListGuard } from './guards/has-list.guard';
import { ListExistGuard } from './guards/list-exist.guard';
import { NewListGuard } from './guards/new-list.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'lists', component: ListsComponent, canActivate: [ HasListGuard] },
  { path: 'lists/:listId', component: ListComponent, canActivate: [NewListGuard, ListExistGuard] },
  { path: 'lists/:listId/edit', component: EditListComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
