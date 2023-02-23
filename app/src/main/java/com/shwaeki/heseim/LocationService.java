package com.shwaeki.heseim;

import android.annotation.SuppressLint;
import android.app.Service;
import android.content.Intent;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.location.LocationProvider;
import android.os.Bundle;
import android.os.IBinder;
import android.support.v4.content.LocalBroadcastManager;
import android.util.Log;

import java.util.HashMap;
import java.util.Map;

public class LocationService extends Service {

    @SuppressLint("MissingPermission")
    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        Log.i("TEST", "Servics Start");


        LocationListener locationListener = new LocationListener() {
            @Override
            public void onLocationChanged(Location location) {
                Log.i("TEST", "Start Location Listener");
                double latitude = location.getLatitude();
                double longitude = location.getLongitude();
                Map<String, String> map = new HashMap<>();

                Intent intent = new Intent("LOCATION");
                intent.setPackage(getPackageName());
                intent.putExtra("longitude", String.valueOf(longitude));
                intent.putExtra("latutide", String.valueOf(latitude));
                getApplicationContext().sendBroadcast(intent);
                Log.i("TEST", "latitude: " + latitude + ", longitude:" + longitude);
            }

            @Override
            public void onStatusChanged(String s, int i, Bundle bundle) {
                Log.i("TEST","onStatusChanged " + s);
            }

            @Override
            public void onProviderEnabled(String s) {
            }

            @Override
            public void onProviderDisabled(String s) {
            }
        };
        LocationManager locationManager = (LocationManager) getSystemService(LOCATION_SERVICE);
        locationManager.requestLocationUpdates(LocationManager.GPS_PROVIDER, 10000, 0, locationListener);
        boolean isGPS = locationManager.isProviderEnabled (LocationManager.GPS_PROVIDER);

        Log.i("TEST","isGPS " + isGPS);
        return super.onStartCommand(intent, flags, startId);

    }

    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    @Override
    public void onTaskRemoved(Intent rootIntent) {
        super.onTaskRemoved(rootIntent);
        Log.i("TEST", "App Is Closed");
        stopSelf();
    }
}