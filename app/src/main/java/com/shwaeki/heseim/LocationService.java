package com.shwaeki.heseim;

import android.annotation.SuppressLint;
import android.app.Service;
import android.content.Intent;
import android.location.Criteria;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.os.Bundle;
import android.os.IBinder;
import android.util.Log;

public class LocationService extends Service {
    LocationManager locationManager;
    LocationListener locationListener;

    @SuppressLint("MissingPermission")
    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        Log.i("TEST", "Services Start");


        locationListener = new LocationListener() {
            @Override
            public void onLocationChanged(Location location) {
                double latitude = location.getLatitude();
                double longitude = location.getLongitude();
                Intent intent = new Intent("LOCATION");
                intent.setPackage(getPackageName());
                intent.putExtra("longitude", String.valueOf(longitude));
                intent.putExtra("latitude", String.valueOf(latitude));
                getApplicationContext().sendBroadcast(intent);
                Log.i("TEST", "latitude: " + latitude + ", longitude:" + longitude);
            }

            @Override
            public void onStatusChanged(String s, int i, Bundle bundle) {
            }

            @Override
            public void onProviderEnabled(String s) {
            }

            @Override
            public void onProviderDisabled(String s) {
            }
        };
        locationManager = (LocationManager) getSystemService(LOCATION_SERVICE);
      //  locationManager.requestLocationUpdates(LocationManager.GPS_PROVIDER, 10000, 0, locationListener);
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
    @Override
    public void onDestroy() {
        Log.i("TEST", "onDestroy");
        locationManager.removeUpdates(locationListener);

    }
    private String getBestProvider() {
        Criteria criteria = new Criteria();
        criteria.setPowerRequirement(Criteria.POWER_LOW);
        criteria.setAccuracy(Criteria.ACCURACY_COARSE); //ACCURACY_FINE
        criteria.setSpeedRequired(false);
        criteria.setAltitudeRequired(false);
        criteria.setBearingRequired(false);
        criteria.setCostAllowed(false);
        return this.locationManager.getBestProvider(criteria, true);
    }

}