'use client'
import {
  Autocomplete,
  GoogleMap,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const GoogleMapView = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [viewPort, setViewPort] = useState({ lat: 22.60, lng: 78.56 });
  const [userLocation, setUserLocation] = useState();

  const mapContainerStyle = {
    width: "55%",
    height: "70vh",
  };

  const getUserLocation=()=>{
    navigator.geolocation.getCurrentPosition(function(pos){
      // console.log(pos)
      setUserLocation({
        lat:pos.coords.latitude,
        lng:pos.coords.longitude
      })
    })
  }

  getUserLocation();

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
      libraries={["places"]}
    >
      <div className="">
        
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={viewPort}
          options={{zoomControl:false,streetViewControl:false, fullscreenControl:false,mapTypeControl:false}}
          zoom={selectedPlace ? 10 : 4.5} // Adjust zoom level
        >
            <Marker
              position={userLocation}
            />
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default GoogleMapView;
