import {Component, Input, OnInit} from '@angular/core';
import {FetchManifestService} from '../services/fetch-manifest.service';
import {ShellService} from "../services/shell.service";

@Component({
  selector: 'app-ms-events-wrapper',
  styleUrls: ['./ms-events-wrapper.component.css'],
  templateUrl: './ms-events-wrapper.component.html'
})
export class MsEventsWrapperComponent implements OnInit {
  document: Document;

  isScriptLoading = false;
  isScriptLoaded = false;
  scriptName: string;
  isScriptError = false;

  constructor(private shellService: ShellService, private fetchManifestService: FetchManifestService) {
    console.log('constructor');
  }

  ngOnInit(): void {
    this.document = window.document;
    const origin = 'http://localhost:3000/assets/micro-frontends/music-store-events';
    this.fetchManifestService.fetchManifest(origin).subscribe((json) => {
      this.scriptName = json['main.js'];

      this.shellService.init({
        outletId: 'events-mfe',
        preload: true,
        clients: {
          "ms-events": {
            loaded: false,
            src: 'assets/micro-frontends/music-store-events/' + this.scriptName,
            element: 'ms-events',
            route: '/events'
          }
        }
      });
    });
  }
}
