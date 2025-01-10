---
slug: excluded-builtin-libraries
title: How to use the Excluded built-in libraries screen
authors: [jbk0]
---

Learn exactly what the new excluded built-in libraries screen is for and how to use it!
<!--truncate-->

## 1. What is a 'built-in library'?

It's a library in Sketchware Pro's .apk file which it can add to projects. For example, Glide, or `androidx.activity`, or OkHttp. Usually, when you use specific built-in Blocks (e.g. the set image from url Block) or Components/Views (e.g. FAB, Drawer require AppCompat to be on, adding lots of `androidx` built-in libraries), necessary ones are added to your project. Internally, they're named [for example `activity-1.3.0`](https://github.com/Sketchware-Pro/Sketchware-Pro/blob/4c65b566c1837219439fd71a06b9f0f1c156f4b5/app/src/main/java/mod/jbk/build/BuiltInLibraries.java#L27).

## 2. When to use the Excluded built-in libraries screen?

Those built-in libraries that Sketchware Pro contains have a specific version. In the `activity-1.3.0` example, it's more specifically the Gradle dependency `androidx.activity:activity:1.3.0`. Over time, the versions shipped in Sketchware Pro *will* be out-of-date. Therefore, you might want to upgrade the version of those libraries.

Users can add new "custom" libraries with Local library Manager. Those are Local libraries.  
Before the Excluded built-in libraries screen was created, they couldn't be used to update a built-in library version. Now it's possible though!

<details>
<summary>Why it doesn't work without the Excluded built-in libraries screen</summary>

When not using the Excluded built-in libraries screen, the .apk file of the project contains two definitions of a library in the .dex files. Android only uses the first definition of a class, and built-in libraries' .dex files are preferred over Local libraries' when Sketchware Pro creates a project .apk file. This is similar to the Java boot classpath and not being able to overwrite core Java classes.
</details>

## 3. How to use the Excluded built-in libraries screen?

Example steps for upgrading the `androidx.activity` built-in library:

1. Add the new library version as Local library, e.g. `androidx.activity:activity:1.9.2`. You can use Local library Manager's downloader for that.
2. Open the Excluded built-in libraries screen of your project and enable the feature. To open it: Open project > press on 3-dot menu / open drawer > Library (at the top of the right drawer) > Excluded built-in libraries
3. Select the built-in library version of `androidx.activity`, so `activity-1.3.0`, then press save.

Now Sketchware Pro will add its usual built-in libraries to the project, except for `androidx.activity` of version `1.3.0`. It will add the Local library version of `androidx.activity` and version 1.9.2 instead. This is the only way to "update libraries" unless you modify Sketchware Pro itself.

**Make sure that Local library dependencies are met, and that you repeat the same exclusion steps above for them!** For example, if you wanted to use the Material Design Components library with Gradle dependency `com.google.android.material:material:1.12.0`, you'd first have to download and save it as Local library, **including sub-dependencies**. Then, for every single new Local library (a dependency of the Material library), exclude the corresponding built-in library (if it exists, some libraries are just new). This is a lot of work, but it's all necessary to avoid crashes and misconfiguration.

This is for example how to properly update the Material Design Components built-in library:

<div class="screenshot">

![Screenshot_20240913_131303_Sketchware Pro](https://github.com/user-attachments/assets/ed33efa4-6f72-435a-a8f2-435ce1516091)

</div>