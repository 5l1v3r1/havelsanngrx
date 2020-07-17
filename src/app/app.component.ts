import { Product } from './models/product';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngrxDemo';
  cart :Observable<Product[]>

  constructor(private store:Store<any>){}
  ngOnInit(): void {
    this.cart = this.store.select("cartReducer");
  }

   

}
