import {Component, Input} from '@angular/core';
import {Product} from "../../persistances/models/product.model";
import {Router} from "@angular/router";
import {Category} from "../../persistances/models/category.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Category;

  constructor(private router: Router) {

  }
  openProductInfoPage(){
    console.log("odehvhudsfuiisuKJBISFVBSIV")
    this.router.navigate(['/product-info']);
  }
}
