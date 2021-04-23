# MusicStore Menu
This component is the common menu for music store applications

## Usage
Import index.js to already have the custom element defined or import MusicStoreMenu to define the element yourself
```
<ms-common-menu></ms-common-menu>
```

## Attributes
### logged-in `<Boolean>`
Determines whether or not to show sign-in or sign-out for menu item

## Properties
### isMenuOpen `<Boolean>`
Boolean saying if menu is open or not

### handleEsc `<BoundFn>`
Class instance bound function that checks if key pressed is esc, then calls closeMenu method

### firstElem `<HTMLElement>`
first focusable element in `.menu-container`

### lastElem `<HTMLElement>`
last focusable element in `.menu-container`

## Methods
### connectedCallback `(): void`
adds handleEsc keydown listener to the document

### disconnectedCallback `(): void`
removes handleEsc keydown listener from the document

### firstUpdated `(): void`
sets `firstElem` and `lastElem` class properties

### openMenu `(event): void`
sets `isMenuOpen` property to true

### closeMenu `(event): void`
sets `isMenuOpen` property to false and calls focus to menu link

### sendToBottom `(event): void`
sends focus to last focusable element in `.menu-container`

### sendToTop `(event): void`
sends focus to first focusable element in `.menu-container`
