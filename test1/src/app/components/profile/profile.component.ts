import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../persistances/services/user.service";
import {ProductService} from "../../persistances/services/product.service";
import {Product} from "../../persistances/models/product.model";
import {forkJoin, Subscription} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private router: Router, private productService: ProductService, private userService: UserService) {
      this.products = []
  }


  isShow: boolean;
  isAdd: boolean;
  products: Product[];

  showAllProducts() {
    this.isShow = !this.isShow;
    if(this.isShow){
        for (let i = 0; i < this.userService.user.products.length; i++) {
            const productId = this.userService.user.products[i];
            const observable = this.productService.getProduct(productId);
            const subscription: Subscription = observable.subscribe(
                (product: Product) => {
                  this.productService.getImage(product.id).subscribe((imageUrl: string) => {
                    product.image = imageUrl
                  });
                    this.products.push(product);

                },
                (error) => {
                    console.error('Error fetching products:', error);
                });
        }
    }
    else{
      this.products = [];
    }


  }
getName(): string{
    return this.userService.user.name
}
getEmail(): string{
    return this.userService.user.email
}
  isAddProduct() {
    this.isAdd = !this.isAdd;
  }

  addProduct() {
      const _title = document.getElementById('title') as HTMLInputElement;
      const price = document.getElementById('price') as HTMLInputElement;
      const city = document.getElementById('city') as HTMLInputElement;
      const description = document.getElementById('description') as HTMLInputElement;

      const fileInput = document.getElementById('file1') as HTMLInputElement;
      const fileInput1 = document.getElementById('file2') as HTMLInputElement;
      const fileInput2 = document.getElementById('file3') as HTMLInputElement;

    if (fileInput.files && fileInput.files.length > 0 && fileInput1.files && fileInput1.files.length > 0 && fileInput2.files && fileInput2.files.length > 0) {
      const file = fileInput.files[0];
        const file1 = fileInput1.files[0];
        const file2 = fileInput2.files[0];

        this.productService.addProduct(_title.value, price.value, city.value, description.value, file, file1,file2).subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.error(error);
        }
      );
    }
      // this.router.navigate(['/']);

  }

  ngOnInit(): void {
    this.isShow = false;
    this.isAdd = false;
    this.products = new Array<Product>();
  }
}
