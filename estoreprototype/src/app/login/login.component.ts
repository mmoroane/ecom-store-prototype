import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user  = new User();
  

  constructor(private _http:HttpClientService) { }

  ngOnInit(): void {

  }

  loginFunc() {
    let username = this.user.name;
    this._http.getByName(username).subscribe((data) =>
    {
      console.log(data);
    }, (err: HttpErrorResponse | Error) => {

    })
  }

}
