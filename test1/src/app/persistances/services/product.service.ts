import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {User} from "../models/user.model";
import {Product} from "../models/product.model";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {catchError, map, Observable, of} from "rxjs";
import {UserService} from "./user.service";


@Injectable()
export class ProductService implements OnInit {
    get products(): Product[] {
        return this._products;
    }

    private _products: Product[];
    private user: User;
    first: number;
    last: number;
    public blob: Blob;

    constructor(private router: Router, private http: HttpClient, private userService: UserService) {
        this.first = 0;
        this.last = 0;
    }

    getProducts(title?: string): Observable<Product[]> {
        let body = new HttpParams()
        if (title) {
            body.set('title', title);
        }
        return this.http.get<any>(`${environment.backendURL}/${body}`)
    }

    getProduct(id: number): Observable<Product> {
        let body = new HttpParams()
        body.set('id', id);
        return this.http.post<any>(`${environment.backendURL}/product/${id}`, body)
    }
    searchProduct(name: string): Observable<Product[]>{
      let body = new HttpParams()
      body.set('name', name);
      return this.http.post<any>(`${environment.backendURL}/product/search/${name}`, body)
    }

  getImage(imageId: number): Observable<string> {
    return new Observable<string>((observer) => {
      this.http.get(`${environment.backendURL}/images/${imageId}`, { responseType: 'blob' }).subscribe(
        (response: Blob) => {
          const imageUrl = URL.createObjectURL(response);
          observer.next(imageUrl);
          observer.complete();
        },
        (error) => {
          console.error('There has been a problem with your HTTP operation:', error);
          observer.error(error);
        }
      );
    });
  }



    addProduct(title: string, price: string, city: string, description: string, file: File,file1: File,file2: File): Observable<string> {
        this.user = this.userService.user;
        const formData = new FormData();
        formData.append('file1', file);
        formData.append('file2', file1);
        formData.append('file3', file2);
        formData.append('title', title);
        formData.append('price', price);
        formData.append('city', city);
        formData.append('description', description);

        const options = {
            headers: new HttpHeaders({
                'Authorization': `Bearer ${this.user.token}`
            }),
            responseType: 'text' as 'json'
        };
        return this.http.post(environment.backendURL + "/profile/add-product", formData, options).pipe(
            map((response: any) => 'product successfully added'),
        );

    }


    ngOnInit(): void {

    }

}
