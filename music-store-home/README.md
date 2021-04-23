# Micro Apps with Web Components and Angular Elements

This example consists of three Angular projects that demonstrate how to use Web Components/ Angular Elements to implement a shell that loads micro apps:

- **music-store-home (/src):** Shell loading micro apps
- **music-store-albums (/projects/music-store-albums)**: Demo micro app
- **music-store-events (/projects/music-store-events)**: Another demo micro app

## Install Dependencies

```
npm install
```

## Standalone

For debugging and testing, you can start each of those projects individually. Please note that the music-store-home will throw some exceptions when doing so because it does not find the micro apps that are expected in an sub folder for the sake of simplicity.

Use one of the following commands for this:

```
ng serve --project music-store-home --open
ng serve --project music-store-albums --open
ng serve --project music-store-events --open
```

## Everything together

For using everything together, you have to build the example and run it:

```
npm run build
npm start
```
