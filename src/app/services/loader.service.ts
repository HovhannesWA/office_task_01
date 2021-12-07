import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  showButtonLoader(el: HTMLElement):void{    
    el.classList.add('button_loading');
  }

 hideButtonLoader():void{
    let elements = document.getElementsByClassName('button_loading');
    for(let i = 0; i < elements.length; i++){
      elements[i].classList.remove('button_loading')
    }
  }
}
