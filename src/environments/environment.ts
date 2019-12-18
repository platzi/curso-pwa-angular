// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'https://platzi-store.herokuapp.com',
  firebase: {
    apiKey: 'AIzaSyCehjKaeCl1j35pAId6TId-L2YdBQqKvSI',
    authDomain: 'angular-pwa-platzi.firebaseapp.com',
    databaseURL: 'https://angular-pwa-platzi.firebaseio.com',
    projectId: 'angular-pwa-platzi',
    storageBucket: 'angular-pwa-platzi.appspot.com',
    messagingSenderId: '1011695246249',
    appId: '1:1011695246249:web:1f9c4802a5cdff9c8842b8'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
