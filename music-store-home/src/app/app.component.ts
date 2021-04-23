import { Component } from '@angular/core';
import 'music-store-common-sdk/components/menu/index.js';
import 'music-store-common-sdk/components/footer/index.js';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

}
