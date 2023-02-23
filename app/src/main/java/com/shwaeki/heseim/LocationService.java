package com.shwaeki.heseim;

import android.annotation.SuppressLint;
import android.app.Service;
import android.content.Intent;
import android.location.Criteria;
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
    LocationManager locationManager;
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
        locationManager = (LocationManager) getSystemService(LOCATION_SERVICE);
        locationManager.requestLocationUpdates(getBestProvider(), 10000, 0, locationListener);
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

    private String getBestProvider() {
        Criteria criteria = new Criteria();
        criteria.setPowerRequirement(Criteria.POWER_LOW);
        criteria.setAccuracy(Criteria.ACCURACY_COARSE);
        criteria.setSpeedRequired(false);
        criteria.setAltitudeRequired(false);
        criteria.setBearingRequired(false);
        criteria.setCostAllowed(false);
        return this.locationManager.getBestProvider(criteria, true);
    }

}