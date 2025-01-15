import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {User} from "../models/user.model";

@Injectable()
export class UserService {
    public user: User;
    constructor(private router: Router, private http: HttpClient) {
    }

    public registration() {
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        const body = new HttpParams()
            .set('name', (document.getElementById('name') as HTMLInputElement).value)
            .set('password', (document.getElementById('password') as HTMLInputElement).value)
            .set('email', (document.getElementById('email') as HTMLInputElement).value)
            .set('phoneNumber', (document.getElementById('phoneNumber') as HTMLInputElement).value)


        return this.http.post(environment.backendURL + "/registration", body.toString(), {headers}).subscribe(
            {
                next: ((response: any) => {
                    console.log("Response received:", response);
                    // Обробляйте відповідь відповідно до вашого вимоги
                    if (response) {

                        this.router.navigate(['/login']);
                    } else {
                        (document.getElementById("error") as HTMLElement).style.display = 'flex'
                        this.router.navigate(['/registration']);
                    }
                }),
                error: (error => {
                    console.log("ERROR ERRROROROROR");
                    console.error(error);
                })
            });
    }


    public login() {

        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        const body = new HttpParams()
            .set('username', (document.getElementById('username') as HTMLInputElement).value)
            .set('password', (document.getElementById('password') as HTMLInputElement).value);

        return this.http.post(environment.backendURL + "/login", body.toString(), {headers}).subscribe(
            {
                next: ((response: any) => {
                        console.log("User object received:");
                        console.log(response.body);
                        this.user = this.getUser(response);
                        this.router.navigate(['/']);

                }),
                error: (error => {
                    console.log("Wrong email or password");
                    (document.getElementById("error") as HTMLElement).style.display = 'flex'
                })
            });
    }

    public getUser(response: any): User{
        const userObject = JSON.parse(response.user);
        return new User(userObject.id, userObject.email, userObject.phoneNumber, userObject.name,
            userObject.active,userObject.password, userObject.dateOfCreated, response.token, userObject.products);
    }
    public getUsers(){
        return this.http.get<User[]>(environment.backendURL + "/admin")
    }
    public banUser(id: number){
        const body = new HttpParams()
            .set('id', id);
        return this.http.post<any>(environment.backendURL+ "/admin/user/ban/${id}", body);
    }
}
