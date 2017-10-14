// import the required animation functions from the angular animations module
import { trigger, state, style, animate, transition, keyframes, query, stagger } from '@angular/animations';
 
export const formAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('formAnimation', [
      transition('* => *', [
          animate('.5s ease-in', keyframes([
            style({opacity: 0,  transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 1,  transform: 'translateY(0)',    offset: 1.0}),
          ]))
      ])
    ]);