import { trigger, transition, style, animate, state } from '@angular/animations';

export const animacaoSlideIn = trigger('slideIn', [
  state('esquerda', style({
    transform: 'translateX(0)',
    opacity: 1
  })),
  state('direita', style({
    transform: 'translateX(0)',
    opacity: 1
  })),

  transition('void => direita', [
    style({ transform: 'translateX(100%)', opacity: 0 }),
    animate('0.8s 300ms ease-out')
  ]),

  transition('void => esquerda', [
    style({ transform: 'translateX(-100%)', opacity: 0 }),
    animate('0.8s 300ms ease-out')
  ])
]);