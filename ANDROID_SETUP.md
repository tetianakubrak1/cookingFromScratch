# Android App Setup

This project is ready to be wrapped as an Android app with Capacitor.

## Required Tools

Install these locally:

1. Node.js with npm from https://nodejs.org/
2. Android Studio from https://developer.android.com/studio
3. A Java runtime. Android Studio usually installs a compatible JDK.

## First-Time Setup

From this project folder:

```bash
npm install
npm run build
npm run android:add
```

Then open the native Android project:

```bash
npm run android:open
```

Android Studio will open the app. From there you can run it on an emulator or connected Android phone.

## After App Changes

Whenever `index.html`, `styles.css`, or `app.js` changes:

```bash
npm run android:sync
```

Then run again from Android Studio.

## App Identity

- App name: `Cooking From Scratch`
- Android package ID: `com.tetianakubrak.cookingfromscratch`
- Web build folder: `www`
