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
        this.action = params['action'];
      }
    );
  }

  handleSuccessfulResponse(response) {
    this.items = response;
  }

  setItem(x: number) {

  }

  addItem() {
    this.selectedItem = new Item();
    this.router.navigate(['admin', 'items'], { queryParams: { action: 'add' } });
  }
}
