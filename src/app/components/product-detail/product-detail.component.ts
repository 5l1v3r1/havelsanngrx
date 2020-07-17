
import { PRODUCTS } from './../../models/data';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import * as Cart from './../../store/actions/cart-actions';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product:Product;
  constructor(private activatedRoute:ActivatedRoute, private store:Store) { }

  ngOnInit(): void {
   this.getDetail();
  }

  getDetail(){
    this.activatedRoute.params.subscribe(p=>{
      let id = p["id"];
      let result = PRODUCTS.find(p=>p.id==id);
      this.product = result;
    })
  }

  addToCart(product){
    this.store.dispatch(new Cart.AddProduct(product));
  }

}
