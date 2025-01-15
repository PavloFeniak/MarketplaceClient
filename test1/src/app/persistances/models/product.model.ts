


export class Product {
    get image(): string {
        return this._image;
    }

    set image(value: string) {
        this._image = value;
    }
    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get city(): string {
        return this._city;
    }

    set city(value: string) {
        this._city = value;
    }

    get images(): string[] {
        return this._images;
    }

    set images(value: string[]) {
        this._images = value;
    }

    get previewImageId(): number {
        return this._previewImageId;
    }

    set previewImageId(value: number) {
        this._previewImageId = value;
    }

    get user(): number {
        return this._user;
    }

    set user(value: number) {
        this._user = value;
    }

    get dateOfCreated(): Date {
        return this._dateOfCreated;
    }

    set dateOfCreated(value: Date) {
        this._dateOfCreated = value;
    }
    constructor(
        private _id: number,
        private _title: string,
        private _description: string,
        private _price: number,
        private _city: string,
        private _images: string[] = [],
        private _previewImageId: number,
        private _user: number,
        private _dateOfCreated: Date,
        private _image: string
    ) {}

}
