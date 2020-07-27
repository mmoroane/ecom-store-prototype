import { UsersComponent } from './admin/users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './admin/items/items.component';
import { ShopitemComponent } from './shopitem/shopitem.component';


const routes: Routes = [
  { path: 'admin/users', component: UsersComponent, },
  { path: 'admin/items', component: ItemsComponent },
  { path: 'shop', component: ShopitemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
