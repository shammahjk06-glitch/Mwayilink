// File: lib/firebase_options.dart

// Here you can define your Firebase configuration for web, android, and ios

import 'package:firebase_core/firebase_core.dart';

class DefaultFirebaseOptions {
  static FirebaseOptions get currentPlatform {
    // Replace this with your own Firebase options
    if (identical(defaultTargetPlatform, TargetPlatform.android)) {
      return AndroidFirebaseOptions.currentPlatform;
    }
    if (identical(defaultTargetPlatform, TargetPlatform.iOS)) {
      return IosFirebaseOptions.currentPlatform;
    }
    // Web
    return web;
  }

  static FirebaseOptions get android => FirebaseOptions(
    apiKey: 'YOUR_ANDROID_API_KEY',
    appId: 'YOUR_ANDROID_APP_ID',
    messagingSenderId: 'YOUR_ANDROID_MESSAGING_SENDER_ID',
    projectId: 'YOUR_ANDROID_PROJECT_ID',
    storageBucket: 'YOUR_ANDROID_STORAGE_BUCKET',
  );

  static FirebaseOptions get ios => FirebaseOptions(
    apiKey: 'YOUR_IOS_API_KEY',
    appId: 'YOUR_IOS_APP_ID',
    messagingSenderId: 'YOUR_IOS_MESSAGING_SENDER_ID',
    projectId: 'YOUR_IOS_PROJECT_ID',
    storageBucket: 'YOUR_IOS_STORAGE_BUCKET',
  );

  static FirebaseOptions get web => FirebaseOptions(
    apiKey: 'YOUR_WEB_API_KEY',
    appId: 'YOUR_WEB_APP_ID',
    messagingSenderId: 'YOUR_WEB_MESSAGING_SENDER_ID',
    projectId: 'YOUR_WEB_PROJECT_ID',
    storageBucket: 'YOUR_WEB_STORAGE_BUCKET',
  );
}
