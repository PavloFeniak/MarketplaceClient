import {Component, OnInit} from '@angular/core';
import {Product} from "../../persistances/models/product.model";
import {ProductService} from "../../persistances/services/product.service";
import {ActivatedRoute, Params} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  previousButton: string;
  previousSliderBtn: string;
  slideIndex: number;
  product: Product;
  priceUAN: string;
  priceEUR: string;
  isShow: boolean;
  isShowInfo: boolean;
  imagesArr: string[];


  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private http: HttpClient) {
  }

  scrollToSection(id: number, buttonId: string) {
    const element = document.getElementById(id.toString());
    const button = document.getElementById(buttonId);
    const prev = document.getElementById(this.previousButton);
    if (element != null && button != null) {
      element.scrollIntoView({behavior: 'smooth'});
      button.style.visibility = 'visible';
      if (prev != null) prev.style.visibility = 'hidden';
      this.previousButton = buttonId;
    }
  }
  showFullDescription(){
    this.isShow = !this.isShow
  }
  showFullInfo(){
    this.isShowInfo = !this.isShowInfo
  }
  plusDivs(n: number) {
    const temp = this.slideIndex += n
    this.showDivs(temp);
  }

  showDivs(n: number) {
    let i: number;
    const x = document.getElementsByClassName("banner") as HTMLCollectionOf<HTMLElement>;
    if (n > x.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[this.slideIndex - 1].style.display = "block";
    const img = document.getElementById((this.slideIndex + 9).toString());
    const prev = document.getElementById(this.previousButton);

    const sliderBtn = document.getElementById((this.slideIndex + 12).toString())
    const prevBtn = document.getElementById(this.previousSliderBtn);
    if (img != null && img != prev && sliderBtn != null && sliderBtn != prevBtn) {
      img.style.border = "1px solid grey";
      sliderBtn.style.background = "#a4e2ca"
      if (prev != null && prevBtn != null) {
        prev.style.border = "none";
        prevBtn.style.background = "#e0e0e0"
      }
      this.previousButton = (this.slideIndex + 9).toString();
      this.previousSliderBtn = (this.slideIndex + 12).toString()
    }
  }

  getExchangeRate(): Observable<any> {
    const apiUrl = 'https://v6.exchangerate-api.com/v6/6a7318621f0dcaf1f9afb8ec/latest/USD';

    return this.http.get<any>(apiUrl);
  }
   formatNumberWithCommas(number: number, currency: string): string {
    return number.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " "+currency;
  }
  convertCurrency(fromCurrency: string, toCurrency: string, amount: number): void {
    this.getExchangeRate().subscribe(response => {
      const rates = response.conversion_rates;

      const fromRate = rates[fromCurrency];
      const toRate = rates[toCurrency];

      if (fromRate && toRate) {
        // Проведіть конвертацію тут
        const convertedValue = (amount / fromRate) * toRate;
        console.log(`${amount} ${fromCurrency} = ${convertedValue} ${toCurrency}`);
        if(toCurrency == "UAH"){
          const num = 1000000.0;
          this.priceUAN = this.formatNumberWithCommas(convertedValue, "UAH");
        }
        else if(toCurrency == "EUR"){
          this.priceEUR = this.formatNumberWithCommas(convertedValue, "€");
        }
      } else {
        console.error('Invalid currency codes');
      }
    });
  }
  getProduct(): void{

  }
  ngOnInit(): void {
    this.slideIndex = 1;
    this.showDivs(this.slideIndex);
    this.route.params.subscribe(
      (params: Params) => {
        this.productService.getProduct(params['id']).subscribe(
          (product: Product | null) => {
            if (product !== null) {
              this.product = product;
              // for (let img of this.product.images) {
              //   this.productService.getImage(img).subscribe((imageUrl: string) => {
              //     this.imagesArr.push(imageUrl)
              //     console.log("dopjas")
              //   });
              //
              // }
              product.images= []
              for( let img = product.previewImageId; img < product.previewImageId + 3; img++){
                this.productService.getImage(img).subscribe((imageUrl: string) => {
                      product.images.push(imageUrl)
                });
              }

              // for (let i = 0; i < 3; i++) {
              //   this.productService.getImage(product.previewImageId).subscribe((imageUrl: string)=>{
              //     this.imagesArr.push(imageUrl)
              //   })
              // }
              this.convertCurrency('USD', 'UAH', this.product.price); // Конвертація 100 доларів в гривні
              this.convertCurrency('USD', 'EUR', this.product.price);
            }
          }
        );


      }
    );
  }

}
