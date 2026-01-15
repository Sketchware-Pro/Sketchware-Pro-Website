---
title: Push to GitHub
description: Push your Sketchware Pro projects to GitHub directly from the app.
sidebar_position: 6
---

# Push to GitHub

Sketchware Pro now allows you to push your projects directly to GitHub. This feature simplifies version control and backup for your Android projects.

## How to use

1.  Open your project in Sketchware Pro.
2.  Tap on the project icon to open the **Project Settings** menu.

![Project Settings](/img/push-to-github/step-1.jpg)

3.  Select **Push to GitHub** from the menu options.

4.  You will be presented with a configuration screen. Fill in the following details:
    *   **GitHub Token (PAT):** Your GitHub Personal Access Token with `repo` scope.
    *   **Repository Name:** The name you want for your repository on GitHub.
    *   **Branch:** The branch name (default is `main`).
    *   **Commit Message:** A message describing your changes.

![Configuration Screen](/img/push-to-github/step-2.jpg)

5.  Tap the **Push to GitHub** button.
6.  The logs will verify the process steps: exporting sources, source file generation, authentication, repository creation (if needed), detailed file uploading, and branch updates.
7.  Once complete, you will see a "Push Successful!" message.

![Success Log](/img/push-to-github/step-3.jpg)
