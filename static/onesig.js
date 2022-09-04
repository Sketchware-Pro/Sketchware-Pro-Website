window.OneSignal = window.OneSignal || [];
  OneSignal.push(function() {
    OneSignal.init({
      appId: process.env.ONESIGNAL_APPID,
    })
  })