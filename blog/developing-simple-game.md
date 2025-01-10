---
slug: simple-car-game
title: Making a simple car game
authors: [nicesapien]
---

I see. I see you're here. And I also know the reason why you're here. Most probably because you wanna develop a cool simple game using Sketchware, or you're just messing around.

Shall we work on the next blockbuster game now? Sure, let's go.
<!--truncate-->
## Setup

1. Create a new project in Sketchware.

2. In VIEW area of main.xml add a TextView named `textview3` for displaying score of previous game, a TextView `textview4` for displaying high score, and a Button `button1` for starting game.

<img src="https://4.bp.blogspot.com/-mSii4wZ6t1c/XGD-WPsEaeI/AAAAAAAAE6g/xlXeXJtLz7IzsGZymE85KLLuii2PU4KJACLcBGAs/s1600/Screenshot_2019-02-11-10-12-14.png" alt="main.xml" width="300"/>

3. In *MainActivity*, add a Shared Preferences component `sp:sp`.

4. Add onStart event and put blocks to set the text of `textview3` and `textview4`.

<img src="https://3.bp.blogspot.com/-CezIAb40m9Q/XGEHmg6TkxI/AAAAAAAAE6s/qKrWq6Fuy_I8mqz5ZYXfujxtDTZuGlsggCLcBGAs/s1600/Screenshot_2019-02-11-10-53-34.png" alt="drawing" width="300"/>

7. On *page2.xml* add a LinearV `linear1` with padding 0 and width and height `MATCH_PARENT`.

8. In *Page2Activity*, add a Shared Preferences component again `sp:sp`.

9. Create a number variable `highscore`.

10. In onCreate event of *Page2Activity*, use blocks to set the value of number variable `highscore`, and use codes to create a new GameView and add it to `linear1`, as shown in image below.

<img src="https://3.bp.blogspot.com/-UzRSLXVrarY/XGFF1WiOrFI/AAAAAAAAE7E/5AeEnvbZJ9k9W9RmPuolTY8vM2KMOOL4gCLcBGAs/s1600/Screenshot_2019-02-11-15-20-49.png" alt="drawing" width="300"/>

The code used in the add source directly block is:
```java
GameView bcv = new GameView(this);
linear1.addView(bcv);
```

11. Create a more block. Name it extra.

<img src="https://1.bp.blogspot.com/-T2o2ssH32ik/W28BieGbM8I/AAAAAAAAEaY/HVNTJYxjDBMO0R5U5jgD1Brz5EoROraQwCPcBGAYYCw/s1600/Screenshot_2018-08-11-20-39-59_crop_540x361.png" alt="drawing" width="300"/>

Now the setup is done, time to start the main process.

## Programming

12. In the more block extra, use an add source directly block and put codes to create a new View class GameView.

```java
}

public class GameView extends View{
private Paint myPaint;
private int speed=1;
private int time = 0;
private int score = 0;
private int myCarPosition = 0;
private ArrayList<HashMap<String, Object>> otherCars = new ArrayList<>();

int viewWidth = 0;
int viewHeight = 0;

public GameView(Context context){
super(context);
myPaint = new Paint();
}

@Override
protected void onDraw(Canvas canvas) {
viewWidth = this.getMeasuredWidth();
viewHeight = this.getMeasuredHeight();

if (time%700 < 6 + 2*speed){
HashMap<String, Object> map = new HashMap<>();
map.put("lane", getRandom(0,2));
map.put("startTime", time);
otherCars.add(map);
}

time = time + 6 + 2*speed;

int carWidth = viewWidth/5;
int carHeight = carWidth+10;

myPaint.setStyle(android.graphics.Paint.Style.FILL);

myPaint.setColor(Color.RED);
canvas.drawRect((myCarPosition*viewWidth/3) + viewWidth/15, viewHeight - 2 -carHeight, (myCarPosition*viewWidth/3) + (viewWidth/15) + carWidth, viewHeight-2, myPaint);

myPaint.setColor(Color.GREEN);

for (int i = 0; i<otherCars.size(); i++){
int carX = ((int)otherCars.get(i).get("lane")*viewWidth/3) + viewWidth/15;
int carY = time - (int)otherCars.get(i).get("startTime");

canvas.drawRect(carX, carY-carHeight, carX + carWidth, carY, myPaint);

if ((int)otherCars.get(i).get("lane") == myCarPosition){
if (carY > viewHeight - 2 - carHeight && carY < viewHeight - 2){
sp.edit().putString("hs", String.valueOf(highscore)).commit();
sp.edit().putString("score", String.valueOf(score)).commit();
finish();
}}

if (carY > viewHeight + carHeight){
otherCars.remove(i);
score++;
speed = 1 + Math.abs(score/10);
if (score > highscore){
highscore = score;
}
}
}

myPaint.setColor(Color.BLACK);
myPaint.setTextSize(40);
canvas.drawText("Score: " + String.valueOf(score), 80f, 80f, myPaint);
canvas.drawText("Speed: " + String.valueOf(speed), 380f, 80f, myPaint);

invalidate();
}

@Override
public boolean onTouchEvent(MotionEvent event) {
switch(event.getAction()) {
case MotionEvent.ACTION_DOWN:
float x1 = event.getX();
if ( x1<viewWidth/2){
if (myCarPosition>0){
myCarPosition--;
}
}
if ( x1>viewWidth/2){
if (myCarPosition<2){
myCarPosition++;
}
}
invalidate();
break;
case MotionEvent.ACTION_UP:
break;
}
return true;

}
```

You're done. Enjoy. Compile and play!

## Making cars look better

* Add images of cars using image manager. Example car_blue, and car_yellow.
* Replace the code in More Block with following code:
```java
}

public class GameView extends View{
private Paint myPaint;
private int speed=1;
private int time = 0;
private int score = 0;
private int myCarPosition = 0;
private ArrayList<HashMap<String, Object>> otherCars = new ArrayList<>();

int viewWidth = 0;
int viewHeight = 0;

public GameView(Context context){
super(context);
myPaint = new Paint();
}

@Override
protected void onDraw(Canvas canvas) {
viewWidth = this.getMeasuredWidth();
viewHeight = this.getMeasuredHeight();

if (time%700 < 10 + speed){
HashMap<String, Object> map = new HashMap<>();
map.put("lane", getRandom(0,2));
map.put("startTime", time);
otherCars.add(map);
}

time = time + 10 + speed;

int carWidth = viewWidth/5;
int carHeight = carWidth+10;

myPaint.setStyle(android.graphics.Paint.Style.FILL);

android.graphics.drawable.Drawable d = getResources().getDrawable(R.drawable.car_blue, null);
d.setBounds((myCarPosition*viewWidth/3) + viewWidth/15 + 25, viewHeight - 2 -carHeight, (myCarPosition*viewWidth/3) + (viewWidth/15) + carWidth-25, viewHeight-2);
d.draw(canvas);

myPaint.setColor(Color.GREEN);

for (int i = 0; i<otherCars.size(); i++){
int carX = ((int)otherCars.get(i).get("lane")*viewWidth/3) + viewWidth/15;
int carY = time - (int)otherCars.get(i).get("startTime");

android.graphics.drawable.Drawable d2 = getResources().getDrawable(R.drawable.car_yellow, null);
d2.setBounds(carX+25, carY-carHeight, carX + carWidth-25, carY);
d2.draw(canvas);

if ((int)otherCars.get(i).get("lane") == myCarPosition){
if (carY > viewHeight - 2 - carHeight && carY < viewHeight - 2){
sp.edit().putString("hs", String.valueOf((int)highscore)).commit();
sp.edit().putString("score", String.valueOf(score)).commit();
finish();
}}

if (carY > viewHeight + carHeight){
otherCars.remove(i);
score++;
speed = 1 + Math.abs(score/8);
if (score > highscore){
highscore = score;
}
}
}

myPaint.setColor(Color.WHITE);
myPaint.setTextSize(40);
canvas.drawText("Score: " + String.valueOf(score), 80f, 80f, myPaint);
canvas.drawText("Speed: " + String.valueOf(speed), 380f, 80f, myPaint);

invalidate();
}

@Override
public boolean onTouchEvent(MotionEvent event) {
switch(event.getAction()) {
case MotionEvent.ACTION_DOWN:
float x1 = event.getX();
if ( x1<viewWidth/2){
if (myCarPosition>0){
myCarPosition--;
}
}
if ( x1>viewWidth/2){
if (myCarPosition<2){
myCarPosition++;
}
}
invalidate();
break;
case MotionEvent.ACTION_UP:
break;
}
return true;


}
```

You now have neat cars, and your block-buster game is ready to play. Compare your score with your friend's and Enjoy the best you can!