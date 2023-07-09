import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  productId: string = "";

  constructor(private viewRoute: ActivatedRoute, private api: ApiService) { }
// to hold particular product details
  product:any=[]

  ngOnInit(): void {
    // fetch parameter details
    this.viewRoute.params.subscribe((result: any) => {
      console.log(result);
      console.log(result.productId);
      this.productId = result.productId;
      
      //to fetch product details
      this.api.viewProduct(this.productId).subscribe((result:any)=>{
        console.log(result);
        this.product=result  // product  details
      },
     (result:any)=>{
      console.log(result.error); // error message
      
     })
    })
  }

  //api function to add product to wishlist
  addToWishlist(){
    //destructure
    const {id,title,price,image}= this.product

    //api function
    this.api.addToWishlist(id,title,price,image).subscribe((result:any)=>{
      alert(result);
    },
    (result:any)=>{
      alert(result.error); // error message
    })
  }

  addToCart(product:any){
    console.log(product);
    //add quantity to cart
    Object.assign(product,{quantity:1})
    console.log(product);
    
    //api call to add quantity
    this.api.addToCart(product).subscribe((result:any)=>{
      //call cart count
      this.api.cartCount()
      
      alert(result) //added to cart
    },
    (result:any)=>{
      alert(result.error) //error message
    })
  } 
  
}
