import { Store, State } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import * as Cart from './../../store/actions/cart-actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:Product[];

  constructor(private store:Store<any>) { }

  ngOnInit(): void {
    this.store.select('cartReducer').subscribe(state=>this.cart = state);
  }

  removeFromCart(product){
    this.store.dispatch(new Cart.RemoveProduct(product));
  }

}
