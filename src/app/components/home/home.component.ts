import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  titles: string[] = ['Why Us?', 'Top Travel', 'Holiday Tours'];
  texts: string[] = [
    'We’ve been creating roundtrips for 17 years and we’re determined to provide you with the trip Contrary to popular belief,' +
      'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin',
    'You’re in charge! Create your own roundtrip with our extensive services in cars, hotels and flights. ' +
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin',
    'Book travel tours worldwide including adventure and cultural tours from leading providers such as Intrepid' +
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin',
  ];

  constructor() {}

  ngOnInit(): void {}
}
