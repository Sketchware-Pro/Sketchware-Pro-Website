---
title: Connecting to Firebase
description: This tutorial explains how to connect Sketchware Pro project to Firebase.
sidebar_position: 1
tags:
  - Google
  - Firebase
---

# Connect Project to Firebase

This tutorial explains how to connect Sketchware Pro project to Firebase.

## Create a Firebase app/project

First, open [Firebase console](https://console.firebase.google.com/) on your device.

<div class="screenshot">

![Firebase Console](/img/firebase_console.jpg)

</div>

Here, you will see a interface like shown above. You can open a existing project(except the demo one), or create a new project by clicking `Create a project`.
After that, click on the Add App button, and select Android from there. Then, you will need to enter the package name of your project(you can find it in Sketchware Pro).
It is written here:
![How to find package name](/img/package_name.jpg)
In this image, `com.my.newproject29` is the package name of this project. Type this exact same package name in Firebase. Then click on `Next`.

<div class="screenshot">

![Download Google Services](/img/google_services_json.jpg)

</div>

On this screen, click on `Download google-services.json`.
After downloading, just close your browser.

## Connect to Sketchware Pro project

Now you will need to open your project in Sketchware Pro.
After opening a project, click on three dots on top right corner.



![three dots image](/img/three_dots.jpg)


Then click on Library option on top.
Select Firebase > import google-services.json
and select the file we just downloaded from Firebase console. Then enable Firebase from the switch.
And that's all! Your app is connected to Firebase! Now you can start using Firebase DB, Auth, Storage, Dynamic Links, Cloud messaging and more.

## Frequently asked questions

### What is Firebase

Firebase is backed by Google. Firebase has many services for app developers, like Database, Storage and Authentication, all without need of any server.

### Firebase pricing

For small apps, **Firebase is free to use**, but If you've reached the limits, you can upgrade and pay for only what you use.

### Why use Firebase

There are many reasons to use Firebase, and the main ones are:

1. Firebase is fast and secure by using firebase rules.
2. Firebase works for Android, IOS, and even web.
3. Firebase is free to use for small applications under [Firebase limit](https://firebase.google.com/pricing).
4. Firebase is easy to use.
5. Firebase is developed by google hence you can use Google Analytics and also connect AdMob to firebase.
