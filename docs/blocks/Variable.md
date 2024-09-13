---
title: Variable
description: Documentation for built-in variable blocks in Sketchware Pro.
sidebar_position: 1
slug: variable
tags:
 - Blocks
 - Built-in 
 - Variable
---

In Sketchware Pro, variables are containers used to store data temporarily. Think of them as labeled boxes where you can put different types of information, such as numbers, text, or objects.

# Types of Variables

## String
This type of variable is used to store text or sequences of characters, such as words, phrases, or sentences. For example, you might use a string variable to store a user's name or a message to display in your app.
## Number
Number variables are used to store numerical values, including integers (whole numbers) and decimals (floating-point numbers). You might use number variables to represent quantities, scores, or measurements in your app.
## Boolean
Boolean variables can only have two possible values: true or false. They're often used to represent conditions or states, such as whether a button is clicked or if a condition is met in your app's logic.
## Map
Map variables store key-value pairs, where each key is associated with a value. They're useful for storing structured data, like settings, user preferences, or any data that requires a relational structure.

### set Boolean to {}
Sets a boolean's value. Can be either true or false.

### set Number to ()
Sets a number variable's value. Can be any integer.

### Number increase 1
Adds 1 to the value of a number variable.

### Number decrease 1
Removes/Decreases the value of a Number variable by 1.

### set String to []
Used to give a value to a string variable, can be any string.

### Map create new map
Used to initialize a map variable.

### Map put key [] value []
Used to assign a value of a string to a key of a map. If the key doesn't already exist, it is automatically created.

### Map put key [] value int ()
Used to assign a value of a number or a integer to a key of a map. If the key doesn't already exist, it is automatically created.

### Map put key [] value double ()
Used to assign a value of a double to a key of a map. A double is basically just a number but with decimal points, such as `0.69`, `29.48` etc. If the key doesn't already exist, it is automatically created.

### Map put key [] value {}
Used to assign a boolean value to a key of a map. Usually true or false.

### Map put key [] value Map
Used to assign a value of another map into a key of a map variable.

### Map put key [] value List String
Used to assign a value of a [list string](list#list-string) to a key of a map variable.

### Map put key [] value List Map
Used to assign a value of a [list map](list#list-map) to a key of a map variable.

### Map get key []
Reads the value of a key containing a string value from a map variable.

### Map get number key []
Reads the value of a key containing a number value from a map variable.

### Map get boolean key []
Reads the value of a key containing a boolean value from a map variable.

### Map get Map key
Reads the value of a key containing a value of another map from a map variable.

### Map get List String key []
Reads the value of a key containing a value of [list string](list#list-string) from a map variable.

### Map get List Map key []
Reads the value of a key containing a value of another [list map](list#list-map) from a map variable.

### Map is empty
Returns a boolean value of either true or false. Used to identify if a map has a value or not.

### Map contain key []
Used to check if a map contains a specific key. Returns a boolean value.

### Map contain value []
Used to check if a map contains a specific value at any point. Returns a boolean value.

### Map size
Used to check the length of a map. For example, if a map variable has 3 keys, this will return a number, 3.

### Map remove key []
Used to remove a key from a map variable.

### Map clear
Clears the data of a map. Removes every key/value pair from it.

### Map get all keys to List String
Used to automatically set the value of every key of a map into a [list string](list#list-string) variable.

## Bottom line
That was the explanation of every built-in Variable block in Sketchware Pro. If you think some info is wrong or doesn't exist, please let us know in our discord server or simply open a Pull Request in our website's GitHub repository.