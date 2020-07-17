import { CartComponent } from './components/cart/cart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


const routes: Routes = [
  {path:"", redirectTo:"/products", pathMatch:"full"},
  {path:"products",component:ProductsComponent},
  {path:"cart",component: CartComponent},
  {path:"product/:id",component:ProductDetailComponent},
  {path:"**",redirectTo:"", pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
