import { LIVE_ANNOUNCER_ELEMENT_TOKEN } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Product } from 'src/app/model/product';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, AfterViewInit{
  // product:Product = {id:0,name:'',description:'',price:0,imageUrl:''};
  product:any;
  // product:Product| undefined = {id:0,name:'',description:'',price:0,imageUrl:''};
  constructor(private router:ActivatedRoute){
    this.products = [
      {
        id: 1,
        name: 'Product 1',
        price: 10.99,
        description: 'This is product 1 description',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRghZOEggL_ed-DvdEysVWX4kprbAl9kB-6GV_cI6Q4tnOd3C3GZqwIc8ZUU7iHw2uQ1QM&usqp=CAU'
      },
      {
        id: 2,
        name: 'Product 2',
        price: 15.99,
        description: 'This is product 2 description',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU91zJrjPT14vUbdGXGTnZp5xzXXpkmx57yF_Y1tXYIkzqkWrIgcFw94bZIqKIGDUcI9k&usqp=CAU'
      },
      {
        id: 3,
        name: 'Product 3',
        price: 15.99,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUeHDPADKSVNB-3CMC2JIszPCDleG4EdF39bLbm9VcoLsS-omWwhw8ytnQSUwXUf_0sJc&usqp=CAU'
      },
      {
        id: 4,
        name: 'Product 4',
        price: 15.99,
        description: 'This is product 4 description',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvFq-UL4ZmuR88p4xCydfFCqduVOerv7K_7NhmSCzk6IqzIQJgNSg4xfX3ytP1-obq0CM&usqp=CAU'
      },
      {
        id: 5,
        name: 'Product 5',
        price: 15.99,
        description: 'This is product 5 description',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6VExdykfmy4M2e45kYG1GKj2ET_nynF0h7sRJrYRT0qTjETBJAjZcPwBZd_hwhcuoPxU&usqp=CAU'
      },
      {
        id: 6,
        name: 'Product 6',
        price: 15.99,
        description: 'This is product 6 description',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKMwpD-ctbZJmzEUCP7J7vnsGFwJdoCJkzbrgisJ69_jcX-4DbQWoS1RY6prZ0CaNlQ3k&usqp=CAU'
      },
      {
        id: 7,
        name: 'Product 7',
        price: 15.99,
        description: 'This is product 7 description',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs0umiNEbKNdiVNz73MCcDEnB5EnLemuSdr8NPseXlZkxfwCmr5exuvsNBzmNV45Qkk-w&usqp=CAU'
      },
      {
        id: 8,
        name: 'Product 8',
        price: 15.99,
        description: 'This is product 8 description',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyd2PJ6bvuzldHS0hUxYWxSwdQMolHI0HKO20ZQsyGRIhnhPVJn6lMDZ0bSDg-U6k3nZk&usqp=CAU'
      },
      {
        id: 9,
        name: 'Product 9',
        price: 15.99,
        description: 'This is product 9 description',
        imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB4z3kNhVFaaar8I-_bQNWzKxHncW108oNDH_H4PfI4jfUr9Y0DUmmHJXHQG9mnhtPasc&usqp=CAU'
      },
      {
        id: 10,
        name: 'Product 10',
        price: 15.99,
        description: 'This is product 10 description',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvpEkEjcT2_mQm2MZ8HCi15QU1f-Jh9aidJ-uUt561tqcNQSE_O7WtgiekrF8kazP-iA&usqp=CAU'
      },
      {
        id: 11,
        name: 'Product 11',
        price: 15.99,
        description: 'This is product 11 description',
        imageUrl: 'https://www.expertclipping.com/wp-content/uploads/1-background-remove-after.png'
      },
      {
        id: 12,
        name: 'Product 12',
        price: 15.99,
        description: 'This is product 12 description',
        imageUrl: 'https://www.expertclipping.com/wp-content/uploads/ExpertClipping_Slide_2ff.jpg'
      }
      
    ];
  }
  ngAfterViewInit(): void {
    

    
  }
  ngOnInit(): void {
    this.product =this.getProductById(this.pid);

   
  }
  products:Product[] = [];
  pid = +this.router.snapshot.params['id'];
  getProductById = (id:number)=>{
    return this.products.find(e=> e.id === id);

  }

  

  
  
}



