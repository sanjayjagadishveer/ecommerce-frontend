import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CAMERAS } from 'src/mock-camera';
import { TELEVISIONS } from 'src/mock-television';
import { PHONES } from 'src/mock-smartphone';
import { LAPTOPS } from 'src/mock-laptop';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  // cameras=CAMERAS;
  // televisions=TELEVISIONS;
  // phones=PHONES; 
  // laptops=LAPTOPS;
  // categoryname:string;
  productList:any
  productId :any
  constructor(private api:ApiService ,private route:ActivatedRoute) {
    this.productId=this.route.snapshot.params["productId"]
   }

  ngOnInit(): void {
    this.fetchProductList();
  }
 

  // selectCameras(link:any)
  // {
  //   this.router.navigate([link])
  // }
  // selectPhones(link:any)
  // {
  //   this.router.navigate([link])
  // }
  // selectLaptops(link:any)
  // {
  //   this.router.navigate([link])
  // }
  // selectTelevisions(link:any)
  // {
  //   this.router.navigate([link])
  // }

  // propertyList(){
  //   this.api.getProductDetails(this.id).subscribe(res=>{console.log(res)})
  // }

  
fetchProductList(){
  this.api.getProductDetails(this.productId).subscribe((res:any)=>{
    console.log(res)
    this.productList=res.response.productDetails
  })
}
}