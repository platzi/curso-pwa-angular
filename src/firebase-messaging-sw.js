// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  apiKey: 'AIzaSyCehjKaeCl1j35pAId6TId-L2YdBQqKvSI',
  authDomain: 'angular-pwa-platzi.firebaseapp.com',
  databaseURL: 'https://angular-pwa-platzi.firebaseio.com',
  projectId: 'angular-pwa-platzi',
  storageBucket: 'angular-pwa-platzi.appspot.com',
  messagingSenderId: '1011695246249',
  appId: '1:1011695246249:web:1f9c4802a5cdff9c8842b8'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();