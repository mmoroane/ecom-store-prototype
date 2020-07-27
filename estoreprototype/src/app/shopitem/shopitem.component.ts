import { Component, OnInit } from '@angular/core';
import { Item } from '../model/Item';
import { Router } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-shopitem',
  templateUrl: './shopitem.component.html',
  styleUrls: ['./shopitem.component.css']
})
export class ShopitemComponent implements OnInit {

  items: Array<Item>;
  itemsRecieved: Array<Item>;

  cartItems: any;

  constructor(private router: Router, private httpClientService: HttpClientService) { }


  ngOnInit() {
    this.httpClientService.getItems().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
    //from localstorage retrieve the cart item
    let data = localStorage.getItem('cart');
    //if this is not null convert it to JSON else initialize it as empty
    if (data !== null) {
      this.cartItems = JSON.parse(data);
    } else {
      this.cartItems = [];
    }
  }

  // we will be taking the books response returned from the database
  // and we will be adding the retrieved   
  handleSuccessfulResponse(response) {
    this.items = new Array<Item>();
    //get books returned by the api call
    this.itemsRecieved = response;
    for (const item of this.itemsRecieved) {

      const itemWithRetrievedImageField = new Item();
      itemWithRetrievedImageField.id = item.id;
      itemWithRetrievedImageField.name = item.name;
      //populate retrieved image field so that book image can be displayed
      itemWithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + item.picByte;
      itemWithRetrievedImageField.description = item.description;
      itemWithRetrievedImageField.price = item.price;
      itemWithRetrievedImageField.picByte = item.picByte;
      this.items.push(itemWithRetrievedImageField);
    }
  }
  addToCart(itemId) {
    //retrieve book from books array using the book id
    let item = this.items.find(item => {
      return item.id === +itemId;
    });
    let cartData = [];
    //retrieve cart data from localstorage
    let data = localStorage.getItem('cart');
    //prse it to json 
    if (data !== null) {
      cartData = JSON.parse(data);
    }
    // add the selected book to cart data
    cartData.push(item);
    //updated the cartBooks
    this.updateCartData(cartData);
    //save the updated cart data in localstorage
    localStorage.setItem('cart', JSON.stringify(cartData));
    //make the isAdded field of the book added to cart as true
    item.isAdded = true;
  }

  updateCartData(cartData) {
    this.cartItems = cartData;
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  emptyCart() {
    this.cartItems = [];
    localStorage.clear();
  }
}
