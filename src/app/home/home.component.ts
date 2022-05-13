import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/categorieslist';
import { CATEGORYLIST } from 'src/mock-categories';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories=CATEGORYLIST;
  list: any;



 
  constructor(private router:Router, private api:ApiService) { }

  ngOnInit(): void {
    this.catergory();
  }
  // onNavigateTo(name:any)
  // {
  //   this.router.navigate(['/categorylist',name])
  // }

  catergory(){
    this.api.getCategaryDetails().subscribe((res:any)=>{console.log(res)
    this.list=res.response.productResponses
    })
  }
  navigateCategory(productId:any){
    this.router.navigate(["/category-list",productId])
  }
 
}

