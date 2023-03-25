---
slug: detect-battery-charge-mode
title: Detect device's battery charging mode
authors: [nicesapien]
---

Hey! How's everybody? Hope y'all fine.

Today we'll learn how to detect user's battery charging mode. Sometimes we're building a app for detecting details of the client device. This SIMPLE code can sometimes come handy in such cases.
<!--truncate-->
## Detecting in a Toast
So basically what you have to do is add a button in your app. Style it as you want and stuff.
In the onClick event of the button, paste this code with a add source directly block.
```java
IntentFilter ifilter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED); Intent batteryStatus = registerReceiver(null, ifilter); int chargePlug = batteryStatus.getIntExtra(BatteryManager.EXTRA_PLUGGED,-1);

boolean usbCharge = chargePlug == BatteryManager.BATTERY_PLUGGED_USB; boolean acCharge = chargePlug == BatteryManager.BATTERY_PLUGGED_AC; if(usbCharge){
/*BATTERY CHARGING THROUGH USB*/
 Toast.makeText(getApplicationContext(),"Device charging through USB",Toast.LENGTH_LONG).show(); } else if(acCharge) {
/*BATTERY CHARGING THROUGH AC*/
 Toast.makeText(getApplicationContext(),"Device charging through AC",Toast.LENGTH_LONG).show(); } else {
/*DEVICE NOT CHARGING*/

 Toast.makeText(getApplicationContext(),"Device not charging",Toast.LENGTH_LONG).show(); }
```

See? Piece of cake.

## Detecting and handeling yourself
Earlier it was a piece of cake, this time I'd say its a slice of pizza.
```java
IntentFilter ifilter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED); Intent batteryStatus = registerReceiver(null, ifilter); int chargePlug = batteryStatus.getIntExtra(BatteryManager.EXTRA_PLUGGED,-1);

boolean usbCharge = chargePlug == BatteryManager.BATTERY_PLUGGED_USB; boolean acCharge = chargePlug == BatteryManager.BATTERY_PLUGGED_AC; if(usbCharge){
/*BATTERY CHARGING THROUGH USB*/
} else if(acCharge) {
	/* BATTERY CHARGING THROUGH AC */
} else {
	/ *DEVICE NOT CHARGING */
}
```
BOOM! I have mentioned conditions in those code comments, so handle it yourself.
That's all for today(or for this post, I'd say). Thanks for reading.