import { trigger, state, style, animate, transition } from '@angular/animations';

export function <%= classifiedModuleName %>AnimationTrigger() {
  return trigger('<%= camelizedModuleName %>Animation', [
    state('void', style({
      opacity: '0'
    })),
    state('*', style({
      opacity: '1'
    })),
    transition('void <=> *', animate('5000ms ease'))
  ])
}

export const <%= classifiedModuleName %>Animation = <%= classifiedModuleName %>AnimationTrigger();
