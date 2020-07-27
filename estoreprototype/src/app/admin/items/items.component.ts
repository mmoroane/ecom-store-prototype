import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/Item';
import { HttpClientService } from 'src/app/service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Array<Item>;
  selectedItem: Item;
  action: string;
  itemsRecieved: Array<Item>;

  constructor(private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.refreshData();
  }

  refreshData() {
    this.httpClientService.getItems().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    this.activedRoute.queryParams.subscribe(
      (params) => {
        // get the url parameter named action. this can either be add or view.
        this.action = params['action'];
	// get the parameter id. this will be the id of the book whose details 
	// are to be displayed when action is view.
	const id = params['id'];
	// if id exists, convert it to integer and then retrive the book from
	// the books array
        if (id) {
          this.selectedItem = this.items.find(item => {
            return item.id === +id;
          });
        }
      }
    );
  }

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
      itemWithRetrievedImageField.picByte=item.picByte;
      this.items.push(itemWithRetrievedImageField);
    }
  }

  setItem(x: number) {

  }

  addItem() {
    this.selectedItem = new Item();
    this.router.navigate(['admin', 'items'], { queryParams: { action: 'add' } });
  }

  viewItem(id: number) {
    this.router.navigate(['admin', 'items'], { queryParams: { id, action: 'view' } });
  }
}
