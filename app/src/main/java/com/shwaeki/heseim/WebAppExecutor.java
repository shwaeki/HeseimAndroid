package com.shwaeki.heseim;


import android.util.Log;
import android.webkit.JavascriptInterface;

public class WebAppExecutor {

    @JavascriptInterface
    public void startTrip() {
        Log.i("TEST","startTrip");
     //   MainActivity.getInstace().startGPSListener();
    }


    @JavascriptInterface
    public void stopTrip() {
        Log.i("TEST","stopTrip");
     //   MainActivity.getInstace().startGPSListener();
    }

    @JavascriptInterface
    public void WriteToAnalyticsOnAppIsOpen() {
     //   MainActivity.getInstace().WriteToAnalyticsOnAppIsOpen();
    }

    @JavascriptInterface
    public void WriteToAnalyticsOnStartRide() {
        Log.i("TEST","startLocationService");
        MainActivity.getInstace().startLocationService();
    }

    @JavascriptInterface
    public void WriteToAnalyticsOnCloseRide() {
        Log.i("TEST","stopLocationService");
        MainActivity.getInstace().stopLocationService();
    }


}
