import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
productId :any
  constructor(private api:ApiService ,private route:ActivatedRoute) {
    this.productId=this.route.snapshot.params["productId"]
   }

  ngOnInit(): void {
  }


}
