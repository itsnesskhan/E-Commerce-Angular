import { Component } from '@angular/core';
import { CartItem } from 'src/app/model/CartItems';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: CartItem[] = [{product:{
    id: 3,
    name: 'Product 3',
    price: 15.99,
    description: 'This is product 3 description',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUeHDPADKSVNB-3CMC2JIszPCDleG4EdF39bLbm9VcoLsS-omWwhw8ytnQSUwXUf_0sJc&usqp=CAU'
  },quantity:2},{product:{
    id: 4,
    name: 'Product 4',
    price: 15.99,
    description: 'This is product 4 description',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvFq-UL4ZmuR88p4xCydfFCqduVOerv7K_7NhmSCzk6IqzIQJgNSg4xfX3ytP1-obq0CM&usqp=CAU'
  },quantity:1},

  {product:{
    id: 6,
    name: 'Product 6',
    price: 15.99,
    description: 'This is product 6 description',
    imageUrl: 'https://www.expertclipping.com/wp-content/uploads/ExpertClipping_Slide_2ff.jpg'
  },quantity:1}
]; 

  removeFromCart(item: any) {
    // this.cartService.removeFromCart(item.product.id);
    // this.cartItems = this.cartService.getCartItems();
  }

  
  increaseQuantity(item: CartItem) {
    // this.cartService.addToCart(item.product);
    // this.cartItems = this.cartService.getCartItems();
  }

  decreaseQuantity(item: CartItem) {
    // this.cartService.removeFromCart(item.product.id, true);
    // this.cartItems = this.cartService.getCartItems();
  }

  getTotalBill(): number {
    return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }
}
