---
title: Get battery info in Sketchware
description: This post shows how you can detect user's battery charge, status etc.
authors: [nicesapien]
---

This post shows how you can detect user's battery charge, status etc.
<!--truncate-->
Sometimes your app has to start a long process and you need to check if there is enough battery for that. Then you have come to the right place if you want to detect just that.

To get the percentage of battery charge in an android device, we can use the following code:
```java
BatteryManager bm=(BatteryManager)getSystemService(BATTERY_SERVICE);

int battery_percent = bm.getIntProperty(BatteryManager.BATTERY_PROPERTY_CAPACITY);
```
The result battery_percent is an integer.



If we have a TextView textview1 on our page, to display the battery percentage in textview1 we can use following code:
```java
textview1.setText(battery_percent + "%");
```


To check if battery status is full or not, following code can be used:
```java
IntentFilter ifilter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);

Intent batteryStatus = registerReceiver(null, ifilter);

int status = batteryStatus.getIntExtra(BatteryManager.EXTRA_STATUS, -1);

if(status == BatteryManager.BATTERY_STATUS_FULL) {

Toast.makeText(getApplicationContext(),"Device is fully charged",Toast.LENGTH_LONG).show(); } else {

Toast.makeText(getApplicationContext(),"Device is not fully charged",Toast.LENGTH_LONG).show(); }
```
Apart from BATTERY_STATUS_FULL, other battery status integers which can be used include

BATTERY_STATUS_CHARGING

BATTERY_STATUS_DISCHARGING

BATTERY_STATUS_FULL

BATTERY_STATUS_NOT_CHARGING

BATTERY_STATUS_UNKNOWN

The codes can be used whenever you want to show the battery percentage. To show it as soon as app starts, put the code in onCreate event. To show it on button click, put the code in Button onClick event, etc.

To get the battery charging mode, use following code:
```java
IntentFilter ifilter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);

Intent batteryStatus = registerReceiver(null, ifilter);

int chargePlug = batteryStatus.getIntExtra(BatteryManager.EXTRA_PLUGGED,-1);

boolean usbCharge = chargePlug == BatteryManager.BATTERY_PLUGGED_USB;

boolean acCharge = chargePlug == BatteryManager.BATTERY_PLUGGED_AC;

if(usbCharge){

Toast.makeText(getApplicationContext(),"Device charging through USB",Toast.LENGTH_LONG).show();

} else if(acCharge) {

Toast.makeText(getApplicationContext(),"Device charging through AC",Toast.LENGTH_LONG).show();

} else {

Toast.makeText(getApplicationContext(),"Device not charging",Toast.LENGTH_LONG).show();

}
```
This code can be used to find out if the device is charging or not.



To get the battery temperature use following code:
```java
IntentFilter ifilter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);

Intent batteryStatus = registerReceiver(null, ifilter);

int temp = batteryStatus.getIntExtra(BatteryManager.EXTRA_TEMPERATURE,0);

float tempTwo = ((float) temp) / 10;

textview1.setText(tempTwo + " °C");
```