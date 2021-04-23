# Analytics Service
Analytics Service documentation

## How to Use
Import the class into your main application component or js:
```
import { MusicStoreAnalytics } from '@ms/web-sdk/dist/index.js';
```
Instantiate the class with at least two arguments
- analyticsList`<String[]>` containing any of the currently available analytics libraries
- appname`<String>` sets the name of the application in potomac and l3 of SiteCatalyst
```
const appAnalytics = new MusicStoreAnalytics(['sitecatalyst', 'potomac'], 'album');
```

## Analytics Events:
- ms-track-pageview: sends pageview name
- click: send first composedPath element with attribute `data-track`
- ms-track-event: sends event detail
- at-content-succeeded: sends adobe target test name and experience name
- visibilitychange: sends whether user has `tabbed away` or `tabbed back`

## Available Libraries
- SiteCatalyst
- Potomac
