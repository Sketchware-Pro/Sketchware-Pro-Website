---
sidebar_position: 1
---

# Connect Firebase

This tutorial explains how to connect Sketchware Pro project to Firebase.

## Create a Firebase app/project

First, open [Firebase console](https://console.firebase.google.com/) on your device.
![Firebase Console](/img/firebase_console.jpg)
Here, you will see a interface like shown above. You can open a existing project(except the demo one), or create a new project by clicking `Create a project`.
After that, click on the Add App button, and select Android from there. Then, you will need to enter the package name of your project(you can find it in Sketchware Pro).
It is written here:
![How to find package name](/img/package_name.jpg)
In this image, `com.my.newproject29` is the package name of this project. Type this exact same package name in Firebase. Then click on `Next`.
![Download Google Services](/img/google_services_json.jpg)
On this screen, click on `Download google-services.json`.
After downloading, just close your browser.
# Connect to Sketchware Pro project
Now you will need to open your project in Sketchware Pro.
After opening a project, click on three dots on top right corner.
![three dots image](/img/three_dots.jpg)

Then click on Library option on top.
Select Firebase > import google-services.json
and select the file we just downloaded from Firebase console. Then enable Firebase from the switch.
And that's all! Your app is connected to Firebase! Now you can start using Firebase DB, Auth, Storage, Dynamic Links, Cloud messaging and more.