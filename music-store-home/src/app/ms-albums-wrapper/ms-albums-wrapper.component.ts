import {Component, Input, OnInit} from '@angular/core';
import {FetchManifestService} from '../services/fetch-manifest.service';
import {ShellService} from "../services/shell.service";

@Component({
  selector: 'app-ms-albums-wrapper',
  styleUrls: ['./ms-albums-wrapper.component.css'],
  templateUrl: './ms-albums-wrapper.component.html'
})
export class MsAlbumsWrapperComponent implements OnInit {
  document: Document;

  isScriptLoading = false;
  isScriptLoaded = false;
  scriptName: string;
  isScriptError = false;

  constructor(private shellService: ShellService, private  fetchManifestService: FetchManifestService) {
    console.log('constructor');
  }

  ngOnInit(): void {
    this.document = window.document;
    const origin = 'http://localhost:3000/assets/micro-frontends/music-store-albums';
    this.fetchManifestService.fetchManifest(origin).subscribe((json) => {
      this.scriptName = json['main.js'];
      this.shellService.init({
        outletId: 'albums-mfe',
        preload: true,
        clients: {
          "ms-albums": {
            loaded: false,
            src: 'assets/micro-frontends/music-store-albums/' + this.scriptName,
            element: 'ms-albums',
            route: '/albums'
          }
        }
      });
    })

    // this.loadScript();
  }

  loadScript(): void {
    this.isScriptLoading = true;

    // Check if script has already been loaded in previous instantiation
    if (!this.isScriptLoaded) {
      const script = this.document.createElement('script');
      script.src = `http://localhost:3000/assets/micro-frontends/music-store-albums/main.js`;
      script.id = 'ms-albums';
      // Set up handler for script load
      script.onload = (event) => {
        this.onScriptLoad();
      };

      // Set up handler if script load fails
      script.onerror = () => {
        this.onScriptLoadError();
      };

      this.document.body.appendChild(script);
      // Since script has not been loaded, fetch manifest to lookup correct script name
      // const origin = 'http://localhost:3000/orders';
      // this.fetchManifestService.fetchManifest(origin).subscribe(
      //   (json) => {
      //     // this.scriptName = json['ddpq-one-click-button.js'];
      //     this.scriptName = json['ms-order-list.js'];
      //
      //     const script = this.document.createElement('script');
      //     script.src = `${origin}/${this.scriptName}`;
      //     script.id = 'ms-order';
      //     // Set up handler for script load
      //     script.onload = (event) => {
      //       this.onScriptLoad();
      //     };
      //
      //     // Set up handler if script load fails
      //     script.onerror = () => {
      //       this.onScriptLoadError();
      //     };
      //
      //     this.document.body.appendChild(script);
      //   },
      //   () => {
      //     this.onScriptLoadError();
      //   }
      // );
    } else {
      this.isScriptLoading = false;
    }
  }

  add(tileKind: string): void {
    const tile = document.createElement(tileKind);

    const content = document.getElementById('albums-mfe');
    content.appendChild(tile);

  }

  onScriptLoad(): void {
    // Wrap changes in a timeout to solve issue with
    // IE firing script onload event too early, preventing
    // ngOnChanges from being called in MFE
    window.setTimeout(() => {
      this.isScriptLoaded = true;
      this.isScriptLoading = false;
      this.add('ms-albums')
    }, 0);
  }

  onScriptLoadError(): void {
    this.isScriptError = true;
    this.isScriptLoading = false;
  }

}
