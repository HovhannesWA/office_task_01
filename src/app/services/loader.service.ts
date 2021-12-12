import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  constructor() {}

  showButtonLoader(el: HTMLElement): void {
    el.classList.add('button_loading');
  }

  hideButtonLoader(): void {
    let elements = document.getElementsByClassName('button_loading');
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove('button_loading');
    }
  }

  showTableLoader(el: HTMLElement): void {
    let rows = Array.from(el.querySelectorAll('tr'));
    if(rows.length){
      rows.forEach((row, index) => {
        let class_name = index % 2 === 0 ? 'loading_row_dark' : 'loading_row_light';
        row.classList.add(class_name);
      })
    }    
  }

  hideTableLoader(): void {
    let rows = Array.from(document.querySelectorAll('tr'));
    if(rows.length){
      rows.forEach(row => {
        row.classList.remove('loading_row_dark');
        row.classList.remove('loading_row_light');
      })
    }
  }

  showSectionLoader(el: HTMLElement): void {
    this.showButtonLoader(el);
  }

  hideSectionLoader(): void {
    this.hideButtonLoader();
  }
}
