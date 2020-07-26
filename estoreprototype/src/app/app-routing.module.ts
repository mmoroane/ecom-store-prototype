import { UsersComponent } from './admin/users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './admin/items/items.component';


const routes: Routes = [
  { path: 'admin/users', component: UsersComponent, },
  { path: 'admin/items', component: ItemsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
