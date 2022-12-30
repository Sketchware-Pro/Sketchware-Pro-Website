---
slug: webpage-to-pdf-app
title: Building a simple Web page to PDF converter
authors: [nicesapien]
---

Wow. See how high I scored in my exam. But if I share this link, everyone would need to login. Hmm... yes! I can share a PDF! But how?

<!--truncate-->

I'd choose building my own app for that. Here we go then.

To convert a web page on a WebView to PDF in Sketchware, follow the steps given below.
1. Create a more block named extra in your Sketchware project and put following code in it.
```java
}

android.print.PrintJob printJob;



@androidx.annotation.RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)

private void PrintTheWebPage(WebView webView) {

android.print.PrintManager printManager = (android.print.PrintManager) this.getSystemService(Context.PRINT_SERVICE);

String jobName = "My_webpage" + webView.getUrl();

android.print.PrintDocumentAdapter printAdapter = webView.createPrintDocumentAdapter(jobName);

assert printManager != null;

printJob = printManager.print(jobName, printAdapter, new android.print.PrintAttributes.Builder().build());

}

{
```

2. Create a which we should click to save the PDF.
3. Add onClick event of this button and use a Add Source Directly block to put some code:
```java
if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {

PrintTheWebPage(webview1);

} else { 

showMessage("Not available for device below Android LOLLIPOP");

}
```
You may replace the webview ID with yours.

Done. Now we can Save and RUN the project!
I'm so excited to share my results and see reaction of my friends. What about you?
