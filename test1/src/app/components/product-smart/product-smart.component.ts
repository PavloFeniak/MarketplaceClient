import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../persistances/models/product.model";
import {Router} from "@angular/router";
import {UserService} from "../../persistances/services/user.service";
import {max, min} from "rxjs";
import {Category} from "../../persistances/models/category.model";
import {ProductService} from "../../persistances/services/product.service";

@Component({
  selector: 'app-product-smart',
  templateUrl: './product-smart.component.html',
  styleUrls: ['./product-smart.component.css']
})
export class ProductSmartComponent implements OnInit{
@Input() product: Product;
category: Category[][];

  constructor(private router: Router, private productService: ProductService) {

  }



  //
  openProductInfoPage(){
    this.router.navigate(['/product-info', this.product.id]);
  }

  ngOnInit(): void {
    this.category = [
      [
        new Category("Smartphones and tablets", "../../../assets/images/category-img/electronics/img_3.png"),
        new Category("Photo equipment", "../../../assets/images/category-img/electronics/img_4.png"),
        new Category("Game consoles", "../../../assets/images/category-img/electronics/img_7.png"),
        new Category("Televisions", "../../../assets/images/category-img/electronics/img.png"),
        new Category("Audio equipment", "../../../assets/images/category-img/electronics/img_1.png"),
        new Category("Navigation", "../../../assets/images/category-img/electronics/img_5.png"),
        new Category("Electronic accessories", "../../../assets/images/product-banner.png"),
      ],
      [
        new Category("Washing machines", "../../../assets/images/category-img/household/img.png"),
        new Category("Dishwashers", "../../../assets/images/category-img/household/img_2.png"),
        new Category("Toasters", "../../../assets/images/category-img/household/img_4.png"),
        new Category("Robot vacuum cleaners", "../../../assets/images/category-img/household/img_5.png"),
        new Category("Coffee machines", "../../../assets/images/category-img/household/img_6.png"),
        new Category("Air conditioners", "../../../assets/images/category-img/household/img_7.png"),
        new Category("Ovens", "../../../assets/images/category-img/household/img_3.png"),
      ]
    ];

  }


}
