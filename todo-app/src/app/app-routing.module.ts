import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditListComponent } from './components/edit-list/edit-list.component';
import { HomeComponent } from './components/home/home.component';
import { ItemsComponent } from './components/items/items.component';
import { ListComponent } from './components/list/list.component';
import { ListsComponent } from './components/lists/lists.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'lists', component: ListsComponent },
  { path: 'lists/:listId',component: ListComponent },
  { path: 'lists/:listId/edit', component: EditListComponent },
  { path: 'items', component: ItemsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
