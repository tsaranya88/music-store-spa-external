import {Component, Input, OnInit} from '@angular/core';
import {FetchManifestService} from '../services/fetch-manifest.service';

@Component({
  selector: 'app-ms-orders-wrapper',
  styleUrls: ['./ms-orders-wrapper.component.css'],
  templateUrl: './ms-orders-wrapper.component.html'
})
export class MsOrdersWrapperComponent implements OnInit {
  document: Document;

  isScriptLoading = false;
  isScriptLoaded = false;
  scriptName: string;
  isScriptError = false;

  constructor(private fetchManifestService: FetchManifestService) {
    console.log('constructor');
  }

  ngOnInit(): void {
    this.document = window.document;
    this.loadScript();
  }

  loadScript(): void {
    this.isScriptLoading = true;

    // Check if script has already been loaded in previous instantiation
    if (!this.isScriptLoaded) {
      // Since script has not been loaded, fetch manifest to lookup correct script name
      const origin = 'http://localhost:3000/assets';
      this.fetchManifestService.fetchManifest(origin).subscribe(
        (json) => {
          // this.scriptName = json['ddpq-one-click-button.js'];
          this.scriptName = json['ms-order-list.js'];

          const script = this.document.createElement('script');
          script.src = `http://localhost:3003/orders/${this.scriptName}`;
          script.id = 'ms-orders';
          // Set up handler for script load
          script.onload = (event) => {
            this.onScriptLoad();
          };

          // Set up handler if script load fails
          script.onerror = () => {
            this.onScriptLoadError();
          };

          this.document.body.appendChild(script);
        },
        () => {
          this.onScriptLoadError();
        }
      );
    } else {
      this.isScriptLoading = false;
    }
  }

  onScriptLoad(): void {
    // Wrap changes in a timeout to solve issue with
    // IE firing script onload event too early, preventing
    // ngOnChanges from being called in MFE
    window.setTimeout(() => {
      this.isScriptLoaded = true;
      this.isScriptLoading = false;
    }, 0);
  }

  onScriptLoadError(): void {
    this.isScriptError = true;
    this.isScriptLoading = false;
  }

}
