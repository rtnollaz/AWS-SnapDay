import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  image: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getPost().subscribe(data => {
      this.image = data;
      console.log(this.image);
    })
  }

  // AuthService(event) {
  //   event.preventDefault()
  //   console.log(event)
  // }

}
