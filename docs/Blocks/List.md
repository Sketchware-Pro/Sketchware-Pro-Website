---
title: List
description: Documentation for built-in List blocks in Sketchware Pro.
sidebar_position: 2
tags:
 - Blocks
 - Built-in 
 - List
---


In Sketchware Pro, a List is an interface that represents an ordered collection of elements. It allows for the storage of multiple elements of the same type and provides various methods to manipulate the elements within the list.
# Types of List
## List Map
This type of list stores multiple maps. Each map can contain key-value pairs, allowing you to store structured data. It's useful for organizing complex data where each item has multiple attributes.
## List Number
This type of list stores multiple numerical values, including integers (whole numbers) and decimals (floating-point numbers). It's commonly used for storing quantities, scores, or any numerical data in your app.
## List String
This type of list stores multiple text values or sequences of characters. It's commonly used for storing words, phrases, or sentences in your app, such as names, messages, or any other textual data.

### List Number contains ()
Used to check if a particular value/number is present in the list or not. Returns a boolean, true or false.

### get at () of List Number
Used to retrieve the element at the specified index in the list.

### index () in List Number
Used to check the index of a number. For example, let's say you have a list number with the following values: `42` and `64`. If you use this block by entering `1`, it will return `64`. If you enter `0`, it will return `42`.

### add () to List Number
Used to add a number to a list number variable.

### insert () at () to List Number
Used to add a number to a specific index in a List Number. For example, let's say you have a list number with the following value: `42` and `64`. If you use this block by `insert (69) at (0) to List Number`, the list number will now be this: `69`,`42`,`64`.

### set () at () of List Number
Used to set and/or change the value of a specific index in a list number variable.

### sort List Number
Used to sort the elements of the list into ascending order. For example, `69`,`42`,`64` will turn into `42`,`64`,`69` once this block is run.

### List String contains []
Used to check whether a specific item is present in a List of Strings. This block essentially checks if the given list contains a particular string. Returns a boolean value of true or false.

### index [] in List String
Used to retrieve the index (position) of a specified string within a List of Strings. Returns a number.

### get at () of List String
Used to retrieve the value of a specific index (position).

### add [] to List String
Used to add a String to a List String variable

### insert [] at () to List String
Used to add a String to a specific index (position) in a List String.

### set [] at () of List String
Used to set and/or change the value of a specific index in list string variable.

### sort List String
Used to sort the items of a list string. For example, `banana`,`orange`,`apple` will change into `apple`,`banana`,`orange`.

### List Map contains at () key []
Used to check if a specified key exists within a map at a specific index in a list of maps. Returns a boolean, either true or false.

### get value at () key [] of List Map
Used to retrieve the value associated with a specified key in a map at a specific index in a list of maps.

### get Map at () of List Map
Used to retrieve the map at a specified index in a list of maps.

### add key [] value [] to List Map
Used to add a key-value pair to a map and then add that map to a list of maps.

### insert key [] value [] at () to List Map
Used to insert a key-value pair into a map at a specified index within a list of maps.

### set key [] value [] at () to List Map
Used to set(edit/change) a key-value pair within a map located at a specific index in a list of maps.

### set Map at () of List Map
This block lets you swap out a map with another one in a list. So if you have a list of maps and you want to update the information for a specific item, you use this block to put a new map in its place. It's like changing a card in a deck.

### add Map to List Map
This block just adds a new map to the end of a list of maps. It's like adding a new item to the end of a shopping list.

### insert Map at () to List Map
This block inserts a map at a specific position into a list of maps. It's like placing a new item in a particular spot in a row of boxes.

### get at () of List Map to Map
This block retrieves a map from a specific position in a list of maps and stores it as a standalone map. It's like picking out one item from a row of boxes and putting it aside.

### delete Map of List Map
This block removes a map from a list of maps. It's like taking out an item from a row of boxes and discarding it.

### sort List Map key [] isNumber {} is Ascending 
This block sorts a list of maps. It's like alphabetizing a list of names.

### List String addAll from List
used to add all the elements from one list of strings into another list of strings.

### length of List
Used to check the index/length of a list.

### delete at () of List
Used to delete a specific index/position of a list.

### clear List
Used to clear an list entirely.

### reverse List
Used to reverse the items in a list. For example, a list with `apple`,`banana`,`orange` will turn into `orange`,`banana`,`apple`.

### shuffle List
Randomizes the order of elements within a list. This operation is similar to shuffling a deck of cards, where the cards are rearranged in a random order.

### swap List position () with ()
Used to exchange the positions of two elements within a list. This block is helpful when you need to reorder items in a list, for example, to move an item up or down within a list.

## Bottom line
That was the explanation for every List block in Sketchware Pro. If you think we missed something, or any information is incorrect, please let us know in our discord server or fix it yourself and open a pull request.