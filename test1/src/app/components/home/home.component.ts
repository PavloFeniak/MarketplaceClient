import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../../persistances/services/product.service";
import {Product} from "../../persistances/models/product.model";
import {HeaderService} from "../../persistances/services/heder.service";
import {Category} from "../../persistances/models/category.model";
import {map, take} from "rxjs";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public products: Product[];
  previousButton : string;
  public category: Category[][];
  public categoryIndex: number;
  public isShow: boolean
  public searchText: string;

  constructor(private productService: ProductService, private headerService: HeaderService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    //this.products = this.productService.getProducts("");
    this.route.params.subscribe(params => {
      this.searchText = params['text'];
      console.log(this.searchText);
    });
    this.loadProducts(this.searchText)
    this.chooseCategory("1");
    this.categoryIndex = 0;
    this.isShow = true;
   this.category = [
      [
        new Category("Smartphones and tablets", "../../../assets/images/category-img/electronics/img_3.png"),
        new Category("Photo equipment", "../../../assets/images/category-img/electronics/img_4.png"),
        new Category("Computers and laptops", "../../../assets/images/category-img/electronics/img_2.png"),
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
  public isShowAll(): boolean{
    this.isShow = !this.isShow;

    return this.isShow
  }
  private loadProducts(search: string): void {
    if( typeof search === "undefined" || search === ""){
      this.productService.getProducts().subscribe(
        (data) => {
          this.products = data;
          for (let pr of this.products) {
            this.productService.getImage(pr.previewImageId).subscribe((imageUrl: string) => {
              pr.image = imageUrl
            });

          }
        },
        (error) => {
          console.error('Помилка завантаження продуктів', error);
        }
      );
    }
    else{
      this.productService.searchProduct(search).subscribe(
        (data) => {
          this.products = data;
          for (let pr of this.products) {
            this.productService.getImage(pr.previewImageId).subscribe((imageUrl: string) => {
              pr.image = imageUrl
            });

          }
        },
        (error) => {
          console.error('Помилка завантаження продуктів', error);
        }
      );
    }

  }
  chooseCategory(buttonId: string){
    const button = document.getElementById(buttonId);
    const prev = document.getElementById(this.previousButton);
    if(button != null && button != prev){
      this.categoryIndex = Number(buttonId)-1;
      button.style.background = "#0ACF83";
      const h3Element = button.querySelector('h3');
      if (h3Element != null) {
        h3Element.style.color = "#FFFFFF";
      }
      if(prev != null){
        prev.style.background = "transparent";
        const prevH3Element = prev.querySelector('h3');
        if (prevH3Element != null) {
          prevH3Element.style.color = "#525252";
        }        }
      this.previousButton = buttonId;
    }
  }











}
