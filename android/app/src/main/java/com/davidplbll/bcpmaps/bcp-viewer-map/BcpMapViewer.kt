package com.davidplbll.bcpmaps

import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.google.android.gms.maps.MapView
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.GoogleMap
import android.util.Log
import com.google.android.gms.maps.model.LatLng
import com.google.android.gms.maps.CameraUpdateFactory
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.bridge.Callback
import com.google.android.gms.maps.model.MarkerOptions
import com.google.android.gms.maps.model.Marker
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.bridge.Arguments
import com.facebook.react.modules.core.DeviceEventManagerModule

class BcpMapViewerManager() : SimpleViewManager<MapView>(), OnMapReadyCallback {
    
    private var googleMap: GoogleMap? = null
    private var markers = mutableListOf<BcpPositionMarket>()
    private var selectMarketCallbak: Callback? =null
    private var selectedMarker: Marker? = null
    private var reactContext: ReactContext? = null

    override fun getName() = REACT_CLASS

    companion object {
      const val REACT_CLASS = "BcpMapViewer"
    }

    override fun createViewInstance(context: ThemedReactContext): MapView {
        reactContext = context
        val mapView = MapView(context)
        mapView.onCreate(null)
        mapView.onResume()
        mapView.getMapAsync(this)
        return mapView
    }

    override fun onMapReady(googleMap:GoogleMap) {
        this.googleMap = googleMap
        val initialPosition = LatLng(37.7749, -122.4194)// San Francisco
        googleMap.moveCamera(CameraUpdateFactory.newLatLngZoom(initialPosition, 16f))
        googleMap.setOnMarkerClickListener { marker ->
            selectedMarker?.hideInfoWindow()
            selectedMarker = marker
            marker.showInfoWindow() 
            onMarkerSelectEmit(marker)
            true
        }
        if (markers.isNotEmpty()) {
            loadMarkers()
        }
    }

    @ReactProp(name = "markers")
    fun setMarkers(mapView: MapView,markersInput: ReadableArray) {

        if (markersInput.size() == 0) {
            return
        }

        markers = mutableListOf<BcpPositionMarket>()

        for (i in 0 until markersInput.size()) {
            val marker = markersInput.getMap(i)
            markers.add(
                BcpPositionMarket(
                    LatLng(
                        marker?.getDouble("latitude") ?: 0.0,
                        marker?.getDouble("longitude") ?: 0.0
                    ),
                    marker?.getString("title") ?: "",
                    marker?.getString("deescription") ?: ""
                )
            )
        }

        loadMarkers()

    }
    
    fun onMarkerSelectEmit(marker: Marker) {
        val param = Arguments.createMap()
        param.putString("title", marker.title)
        param.putDouble("latitude", marker.position.latitude)
        param.putDouble("longitude", marker.position.longitude)
        
        reactContext?.let {
            it
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                .emit("onMarkerSelect", param)
            
        }
    }

    fun loadMarkers(){
        this.googleMap?.let { map ->
            map.clear()
            for (markerData in markers) {
                map.addMarker(
                    MarkerOptions()
                        .position(markerData.position)
                        .title(markerData.title)
                )
            }

            if (markers.isNotEmpty()) {
                map.moveCamera(CameraUpdateFactory.newLatLngZoom(markers[0].position, 16f))
            }
        }
    }

}