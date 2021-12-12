import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    animations: [
        trigger('mouseOverAnimation', [
          state(
            'on',
            style({              
              backgroundColor: '#00ced1',
              border: '2px solid gold'
            })
          ),
          state(
            'off', style({})),
          transition('on <=> off', [animate('0.2s')]),
        ]),
      ],
})
export class CardComponent implements OnInit{
    @Input() icon: string = ''
    @Input() title: string = ''
    @Input() content: string = ''

    mouseOverState: string = 'off'
    constructor(){}

    ngOnInit(){}
}