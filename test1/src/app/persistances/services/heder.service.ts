import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private headerHeight: number = 0;

  setHeaderHeight(height: number): void {
    this.headerHeight = height;
  }

  getHeaderHeight(): number {
    return this.headerHeight;
  }
}
