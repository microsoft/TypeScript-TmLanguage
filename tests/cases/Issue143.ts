import {Component, HostListener, Directive} from 'angular2/core';

@Directive({selector: 'button[counting]'})
class CountClicks {
  numberOfClicks = 0;
  @HostListener('click', ['$event.target']) onClick(btn) {
    console.log("button", btn, "number of clicks:", this.numberOfClicks++);
  }
}
@Component({
  selector: 'my-app',
  template: `<button counting>Increment</button>`,
  directives: [CountClicks]
})
export class AppComponent {
  constructor() { console.clear(); }
}