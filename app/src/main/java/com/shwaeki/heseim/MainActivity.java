package com.shwaeki.heseim;

import android.Manifest;
import android.annotation.SuppressLint;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.pm.PackageManager;
import android.os.Build;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.webkit.GeolocationPermissions;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.Toast;

import static android.Manifest.permission.ACCESS_FINE_LOCATION;
import static android.Manifest.permission.ACCESS_COARSE_LOCATION;

public class MainActivity extends AppCompatActivity {

    private static final int PERMISSION_REQUEST_CODE = 200;
    WebView myWebView;

    private BroadcastReceiver broadcastReceiver = new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            double latitude = Double.parseDouble(intent.getStringExtra("latutide"));
            double longitude = Double.parseDouble(intent.getStringExtra("longitude"));
            String str = latitude + "," + longitude;
            Log.d("TEST", "Msg = "+str);
            MainActivity.this.callJsWebView("javascript:getLocationJS('" + str + "');");
            MainActivity.this.callJsWebView("javascript:clearGPSStatus();");
        }
    };

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        myWebView = findViewById(R.id.webview);
        myWebView.getSettings().setJavaScriptCanOpenWindowsAutomatically(true);
        myWebView.getSettings().setJavaScriptEnabled(true);
        myWebView.getSettings().setDomStorageEnabled(true);
        myWebView.getSettings().setAppCacheEnabled(true);
        myWebView.getSettings().setAllowFileAccess(true);
        myWebView.getSettings().setGeolocationEnabled(true);
        myWebView.getSettings().setGeolocationDatabasePath(getFilesDir().getPath());
        myWebView.setWebChromeClient(new WebChromeClient() {
            public void onGeolocationPermissionsShowPrompt(String origin, GeolocationPermissions.Callback callback) {
                callback.invoke(origin, true, false);
            }
        });

        //  myWebView.loadUrl("https://heseim.academia-jerusalem.com/");
        myWebView.loadUrl("file:///android_asset/heseim/index.html");
        requestPermission();
        Log.i("TEST", "App 1");


        Thread thread = new Thread() {
            @Override
            public void run() {
                startService(new Intent(getApplicationContext(), LocationService.class));
                Log.i("TEST", "App 2");

            }
        };
        thread.start();
        Log.i("TEST", "App 3");

    }


    @Override
    public void onResume() {
        super.onResume();
        registerReceiver(this.broadcastReceiver, new IntentFilter("LOCATION"));
        MainActivity.this.callJsWebView("javascript:clearGPSStatus();");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override

    public void onPause() {
        super.onPause();
        unregisterReceiver(this.broadcastReceiver);
        MainActivity.this.callJsWebView("javascript:clearGPSStatus();");
    }




    public void callJsWebView(final String str) {
        Log.i("TEST", "callJsWebView "+str);

        runOnUiThread(new Runnable() {
            @Override
            public void run() {

                MainActivity.this.myWebView.post(new Runnable() {
                    String str;

                    @Override
                    public void run() {
                        MainActivity.this.myWebView.loadUrl(this.str);
                    }

                    public Runnable init(String str2) {
                        this.str = str2;
                        return this;
                    }
                }.init(str));
            }
        });
    }


    private boolean checkPermission() {
        int result = ContextCompat.checkSelfPermission(getApplicationContext(), ACCESS_FINE_LOCATION);
        int result1 = ContextCompat.checkSelfPermission(getApplicationContext(), ACCESS_COARSE_LOCATION);

        return result == PackageManager.PERMISSION_GRANTED && result1 == PackageManager.PERMISSION_GRANTED;
    }

    private void requestPermission() {

        ActivityCompat.requestPermissions(this, new String[]{ACCESS_FINE_LOCATION, ACCESS_COARSE_LOCATION}, PERMISSION_REQUEST_CODE);

    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String permissions[], int[] grantResults) {
        switch (requestCode) {
            case PERMISSION_REQUEST_CODE:
                if (grantResults.length > 0) {

                    boolean locationAccepted = grantResults[0] == PackageManager.PERMISSION_GRANTED;
                    boolean cameraAccepted = grantResults[1] == PackageManager.PERMISSION_GRANTED;

                    if (locationAccepted && cameraAccepted) {
                    } else {

                        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                            if (shouldShowRequestPermissionRationale(ACCESS_FINE_LOCATION)) {
                                showMessageOKCancel("You need to allow access to both the permissions",
                                        new DialogInterface.OnClickListener() {
                                            @Override
                                            public void onClick(DialogInterface dialog, int which) {
                                                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                                                    requestPermissions(new String[]{ACCESS_FINE_LOCATION, ACCESS_COARSE_LOCATION},
                                                            PERMISSION_REQUEST_CODE);
                                                }
                                            }
                                        });
                                return;
                            }
                        }

                    }
                }


                break;
        }
    }


    private void showMessageOKCancel(String message, DialogInterface.OnClickListener okListener) {
        new AlertDialog.Builder(MainActivity.this)
                .setMessage(message)
                .setPositiveButton("OK", okListener)
                .setNegativeButton("Cancel", null)
                .create()
                .show();
    }

}
