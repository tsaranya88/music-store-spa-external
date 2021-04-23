# MusicStore Track Pageview
The component `MusicStoreTrackPageview` is meant to be used with `MusicStoreAnalytics` service and is a declarative way to send pageview data to the service.

## Usage
```
<ms-track-pageview pagename="albums"></ms-track-pageview>
<ms-track-pageview pagename="sign-in" start="ms app"></ms-track-pageview>
<ms-track-pageview pagename="events" completed="click link"></ms-track-pageview>
```

## Attributes
### pagename `<String>`
This attribute will be put in a pageDetail object and sent in the ms-track-event

use `:` to divide subpages for level5 in sitecatalyst <br>
**Warning** Only one `:` is expected from the Analytics service

### start `<String>`
This attribute will attach the `start` key to the pageDetails for SiteCatalyst with the value of whatever is in that attribute

### completed `<String>`
This attribute will attach the `completed` key to the pageDetails for SiteCatalyst with the value of whatever is in that attribute

## Properties
### pageDetails `<Object>`
This object gets sent as the detail of the `ms-track-pageview` event

## Methods
### appendProps `(...props): void`
Given any number of string arugments, this method will go through that list and append key/value pairs to the `pageDetails` property.

### connectedCallback `(): void`
Dispatches event `ms-track-pageview` with detail as `pageDetails` property with `pagename` attribute and calls `appendProps` with `start` and `completed` attributes.
