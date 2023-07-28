import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductsComponent } from './component/products/products.component';
import { ProductDashboardComponent } from './component/product-dashboard/product-dashboard.component';
import { CartComponent } from './component/cart/cart.component';
import { SignupComponent } from './component/signup/signup.component';
// import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
    {path:'products', component: ProductDashboardComponent,
  children: [
    {path:'', component: ProductsComponent},
    {path:':id/details', component: ProductDetailComponent},
  ],
},
{path:'signup', component: SignupComponent},
{path:'cart', component: CartComponent},
{path:'', redirectTo:'/products',pathMatch:'full'},
  {path:'**', redirectTo:'/products', pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
