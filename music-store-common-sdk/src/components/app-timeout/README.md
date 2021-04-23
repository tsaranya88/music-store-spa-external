# MusicStore App Timeout
The component `MusicStoreAppTimeout` is an activity listener to timeout an application.

## Usage
```
<ms-common-app-timeout timer="{milliseconds}" timeout-url="{redirectUrl}" clear-session="{sessionStorageKey}"></ms-common-app-timeout>
```

## Attributes
### timer `<String>`
How long in milliseconds until redirecting to the timeoutUrl. Default 1800000 (30mins)

### timeout-url `<String>`
Where to send the user when timer is up. Default `/`

### clear-session `<String>`
sessionStorage key to clear when timer is up

## Properties
### appTimeout `<Number>`
Integer value for timeout reference 

## Methods
### resetTimer `(); void`
Clears current timeout and sets a new timeout

## Future Improvements
- [ ] set `clear-session` to take multiple sessionStorage keys by spacing
- [ ] allow timer to use semantic timing values, i.e. `30m` or `1h 20m`
