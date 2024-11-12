importScripts('https://www.gstatic.com/firebasejs/11.0.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.0.1/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyADYEJqVHTqLSqWidFlE1_HUsKO3zV5MsQ",
    authDomain: "react-pwa-14512.firebaseapp.com",
    projectId: "react-pwa-14512",
    storageBucket: "react-pwa-14512.firebasestorage.app",
    messagingSenderId: "790290386851",
    appId: "1:790290386851:web:822fe36a17ecdc99111416"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

self.addEventListener('install', function(event) {
    console.log('Service Worker installing.');
});

self.addEventListener('activate', function(event) {
    console.log('Service Worker activating.');
});

messaging.onBackgroundMessage(function(payload) {
    console.log('Pesan latar belakang diterima:', payload);
    
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon || '/icons/icon-192x192.png'
    };
    return self.registration.showNotification(notificationTitle, notificationOptions);
});