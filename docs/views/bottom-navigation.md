---
title: Bottom Navigation View
description: Bottom Navigation View is a part of Material Design library. Sketchware Pro supports it out of the box.
sidebar_position: 1
---
# Bottom Navigation
Bottom Navigation View is a part of Material Design library. Sketchware Pro supports it out of the box.

# Using it
First, add it in the bottom of the Activity.
Then open the onCreate event and add this block:
![BottomNavigation add item block](img/add_item.jpg)
Block fields:

1. View Name(BottomNavigation)
2. Item ID
This is the ID of the item. You can set 0 for first item, 1 for second, and so on.
3. Title
Title of the item.
4. Icon
Icon of the item. Add a image in Image manager and select it here.

Now open onNavigationItemSelected event. 
![](img/onNavigationItemSelected.jpg)
The above code would show a toast saying `First item` when first item is selected, `Second item` when second item is selected, and so on.