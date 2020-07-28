import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Item } from '../model/Item';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { }

  getUsers()
  {
    return this.httpClient.get<User[]>('http://localhost:8080/users/get');
  }

  addUser(newUser: User) 
  {
    return this.httpClient.post<User>('http://localhost:8080/users/add', newUser);   
  }

  deleteUser(id) 
  {
    return this.httpClient.delete<User>('http://localhost:8080/users/' + id);
  }

  getItems() {
    return this.httpClient.get<Item[]>('http://localhost:8080/items/get');
  }

  addItem(newItem: Item) {
    return this.httpClient.post<Item>('http://localhost:8080/items/add', newItem);
  }

  getUser(id) {
    return this.httpClient.get<User>('http://localhost:8080/users/' + id);
  }

  deleteItem(id) {
    return this.httpClient.delete<Item>('http://localhost:8080/items/' + id);
  }

  updateItem(updatedItem: Item) {
    return this.httpClient.put<Item>('http://localhost:8080/items/update', updatedItem);
  }
}
