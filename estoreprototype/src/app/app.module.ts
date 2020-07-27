import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UsersComponent } from './admin/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { AdduserComponent } from './admin/users/adduser/adduser.component';
import {FormsModule} from '@angular/forms';
import { ViewuserComponent } from './admin/users/viewuser/viewuser.component';
import { ItemsComponent } from './admin/items/items.component';
import { AdditemComponent } from './admin/items/additem/additem.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewitemComponent } from './admin/items/viewitem/viewitem.component';
import { ShopitemComponent } from './shopitem/shopitem.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsersComponent,
    AdduserComponent,
    ViewuserComponent,
    ItemsComponent,
    AdditemComponent,
    LoginComponent,
    HomeComponent,
    ViewitemComponent,
    ShopitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path:"", component:HomeComponent,pathMatch:"full"},
      { path:"login", component:LoginComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
