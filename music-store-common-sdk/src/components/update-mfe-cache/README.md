# MusicStore Update Mfe Cache
This component is the common update mfe for music store applications

## Usage
Import index.js to already have the custom element defined or import MusicStoreUpdateMfeCache to define the element yourself
```
<ms-common-update-mfe-cache mfe-name="String"></ms-common-update-mfe-cache>
```

## Attributes
### mfe-name `<String>`
gives name to the serviceworker to postMessage with

## Properties
### sw `<ServiceWorkerController>`
controller instance of current ServiceWorker
