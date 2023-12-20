'use client'
import {
  Autocomplete,
  GoogleMap,
  InfoWindow,
  InfoWindowF,
  LoadScript,
  Marker,
  MarkerF,
} from "@react-google-maps/api";
import React, { useEffect, useState } from "react";
import Data from "@/Shared/Data";
// import RangeSelect from "./RangeSelect";
import Teammarkers from "./Teammarkers";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";
// import Getdistance from "./Getdistance";

const GoogleMapDisasterView = ({data}) => {
  const router = useRouter();
  const [rad, setRad] = useState(1000);
  const places = Data.places;
  const [selectedPlace, setSelectedPlace] = useState(undefined);
  const [viewPort, setViewPort] = useState({ lat: 22.60, lng: 78.56 });
  const [value, setValue] = useState({
    lat: 0,
    lng: 0,
    radius: rad,
  });
  const mapData = data;
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const mapContainerStyle = {
    width: "55%",
    height: "90vh",
  };

  // async function getLatLong(city){
  //   const geoCodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`
  //   const geocodeResponse = await fetch(geoCodeUrl)
  //   const geocodeData = await geocodeResponse.json()
  //   const {lat,lng} = geocodeData.results[0].geometry.location;
  //   return {lat,lng}
  // }

  return (
    console.log(mapData),
    (
      <div className="flex ">
        
        <LoadScript
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
          libraries={["places"]}
        >
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={viewPort}
            options={{}}
            zoom={4.5}
          >
            <Teammarkers />
          </GoogleMap>
        </LoadScript>
      </div>
    )
  );
};

export default GoogleMapDisasterView;
