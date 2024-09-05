package com.davidplbll.bcpmaps
import com.google.android.gms.maps.model.LatLng

class BcpPositionMarket(
    val position: LatLng,
    val title: String,
    val description: String? = null
){}