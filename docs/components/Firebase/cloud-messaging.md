---
title: Firebase Cloud Messaging
description: This is a simple and easy guide to use Firebase Cloud Messaging in Sketchware Pro.
sidebar_position: 2
---
# Firebase Cloud Messaging
Welcome! This is a simple and easy guide to use Firebase Cloud Messaging in Sketchware Pro.

## What it is
As you might already know, Firebase is developed by Google. It is a service for developers of small apps(but some big ones use it too). It has many features to try, visit [their website](https://firebase.google.com) to see them all. So, basically, **Firebase Cloud Messaging allows app developers to send push notifications to users**. The notification can have a image, title, description and more - just check it in Firebase console.
## How to use it
First of all, you will probably need to [connect your app to Firebase](/docs/connect-to-firebase). Make sure you have downloaded and **install**ed **the latest version of Sketchware Pro.**

1. Add the Component

First, create a new project(or use one you already have). Then, open it and open component manager. From there, click on the `+` button which is on the bottom right of the screen. Then, click on `Cloud Message`. Here enter any name for the component.
![Cloud Message component](/img/cloud_message.jpg)
2. Compile, run

Wait, **that's it**? Well, yes! That's true! Implementing Firebase Cloud Messaging is as simple as that!

## Component events
### onCompleteRegister

  | Name | Type | Use |
  | ---- | ---- | --- |
  | token | string | If you want to target single devices or create device groups, you'll need to access this token |
  | success | boolean | Tells whether did the component work or not |
  | errorMessage | string | If `success` is false, then it shows the reason why the component didn't work |

## Sending a Notification
You can easily send a notification from Firebase console. Check Firebase console and you'll get to know how to send notifications yourself.