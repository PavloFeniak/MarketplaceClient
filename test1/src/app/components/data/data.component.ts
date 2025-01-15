import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit{

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    // console.log("dataComponent");
    // this.http.get<any>(environment.backendURL+"/temp/test").subscribe(
    //   {
    //     next: ((response: any)=>{
    //       console.log(response)
    //       console.log(response.data)
    //     }),
    //     error: (error => {
    //       console.log("kjvwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwKJWGVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV")
    //       console.log(error);
    //     })
    //   });


    const data = {email: "test@gmail.com"}
    const body = JSON.stringify(data)


    console.log("dataComponent");
    this.http.post<any>(environment.backendURL+"/temp/data", body, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe(
      {
        next: ((response: any)=>{
          console.log(response)
          console.log("rhoghg")
          console.log(response.data)
        }),
        error: (error => {
          console.log("ERROR ERRROROROROR")
          console.log(error);
        })
      });
  }

}
