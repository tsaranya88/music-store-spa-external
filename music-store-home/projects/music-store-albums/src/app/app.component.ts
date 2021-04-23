import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ms-albums',
  template: `
  <div>
      <router-outlet></router-outlet>
  </div>
`,
})
export class AppComponent {
  constructor(private route: ActivatedRoute) {
    route.queryParams.subscribe(params => {
      console.debug('params', params);
    });

    window.addEventListener('client-message', e => console.debug('client-message event', e));
  }
}
