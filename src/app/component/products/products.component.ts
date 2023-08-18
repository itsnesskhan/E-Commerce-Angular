import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterViewInit, Component } from '@angular/core';
import { Product } from 'src/app/model/product';
import { SharedService } from 'src/app/service/shared.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {
  sidenavIsClosed = false;
  private subscription: Subscription;
  public cols: number = 3;

  toggleSidenavStatus() {
    this.sidenavIsClosed = !this.sidenavIsClosed; // Toggle the value
  }

  constructor(private sharedService: SharedService,
              private breakpointObserver:BreakpointObserver
    ) {
    this.subscription = this.sharedService.sidenavClosed$.subscribe(() => {
      this.toggleSidenavStatus()
      this.sidenavIsClosed?this.cols=4:this.cols=3
    });
  }

  // lazy loading image
  // ngAfterViewInit(): void {
  //   const imageTarget = document.querySelectorAll('img[data-src]');
  //   console.log(imageTarget)
  //   const loadImage = function (entries:any, observe:any){
  //     const [entry] = entries;
  //     console.log(entry);

  //     if(!entry.isIntersecting) return;

  //     //replace src with data-srcc
  //     console.log(entry.target.src ," ", entry.target.dataset.src)
  //     entry.target.src = entry.target.dataset.src;

  //     entry.target.addEventListener('load', ()=>{
  //       entry.target.classList.remove('lazy-img');
  //     })

  //     observe.unobserve(entry.target)
      
  //   }
    
  //   const imageObserver = new IntersectionObserver(loadImage, {
  //     root:null,
  //     threshold: 0
  //   })
  //   imageTarget.forEach(img=> imageObserver.observe(img))
  // }

  products: Product[] = [
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
      description: 'This is product 3 description',
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

  ngOnInit() {
    this.calculateCols();
    this.observeScreenChanges();
  }

  calculateCols() {
    if (this.breakpointObserver.isMatched(Breakpoints.Handset)) {
      this.cols = 1;
    } else if (this.breakpointObserver.isMatched(Breakpoints.Tablet)) {
      this.cols = 2;
    } else {
      this.cols = 3;
    }
  }

  observeScreenChanges() {
    this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet,
      Breakpoints.Web
    ]).subscribe(result => {
      if (result.matches) {
        this.calculateCols();
      }
    });
  }

  getGridCols(): number {
    return this.cols;
  }

  

}
