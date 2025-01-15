export class Category{
  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get bannerPath(): string {
    return this._bannerPath;
  }

  set bannerPath(value: string) {
    this._bannerPath = value;
  }
  constructor(title: string, bannerPath: string) {
    this._title = title;
    this._bannerPath = bannerPath;
  }
  private _title: string;
  private _bannerPath: string;
}
