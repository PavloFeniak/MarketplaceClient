

export class User {
    constructor(
    private  _id: number,
    private  _email: string,
    private  _phoneNumber: string,
    private  _name: string,
    private  _active: boolean,
    private  _password: String,
    private  _dateOfCreated: Date,
    private  _token: string,
    private  _products: number[]
    ){}

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }
  get products(): number[] {
    return this._products;
  }

  set products(value: number[]) {
    this.products = value;
  }
    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get phoneNumber(): string {
        return this._phoneNumber;
    }

    set phoneNumber(value: string) {
        this._phoneNumber = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get active(): boolean {
        return this._active;
    }

    set active(value: boolean) {
        this._active = value;
    }

    get password(): String {
        return this._password;
    }

    set password(value: String) {
        this._password = value;
    }

    get dateOfCreated(): Date {
        return this._dateOfCreated;
    }

    set dateOfCreated(value: Date) {
        this._dateOfCreated = value;
    }

    get token(): string {
        return this._token;
    }

    set token(value: string) {
        this._token = value;
    }
}
