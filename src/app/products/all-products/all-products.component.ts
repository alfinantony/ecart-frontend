import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  //to hold products details
  allproducts:any=[] //all array data in backend

  // to hold search term
 searchTerm: string=""

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.api.getAllProducts().subscribe((result:any)=>{
      console.log(result); // when we inspect- console - we can see the data we have given in backend.
      this.allproducts=result;
    })
    // this.searchTerm=this.api.searchTerm
    // console.log(this.searchTerm);
    this.api.searchTerm.subscribe((result:any)=>{
      this.searchTerm=result;
      console.log(this.searchTerm);
      
    })
  }
}
