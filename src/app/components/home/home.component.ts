import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: any[] = []
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(
      (prod:{count:Number,products: any[]}) =>
      {
        this.products = prod.products
        console.log(this.products)
      })
  }

}
