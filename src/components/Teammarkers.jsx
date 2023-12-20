'use client'
import { InfoWindowF, MarkerF } from "@react-google-maps/api";
import React, { useState, useEffect } from "react";
import Data from "@/Shared/Data";
import { getBoundsOfDistance, getDistance, convertDistance } from "geolib";

const Teammarkers = () => {
  const [selectedPlace, setSelectedPlace] = useState(undefined);
  const [places, setPlaces] = useState(Data.places);
  const [loaded, setLoaded] = useState(false);
  const [distances, setDistances] = useState([]);
  const [curLoc, setCurLoc] = useState([]);



  return (
    // console.log(typeof(parseFloat(getData.lat)), parseFloat(getData.lat)),
    <div className="relative">
      {/* <MarkerF
        position={{ lat: parseFloat(getData.lat), lng: parseFloat(getData.lng) }}
      /> */}
      {places.map((place) => (
        <MarkerF
          key={`${place.latitude}-${place.longitude}`}
          onClick={() => {
            place === selectedPlace
              ? setSelectedPlace(undefined)
              : setSelectedPlace(place);
          }}
          position={{ lat: place.latitude, lng: place.longitude }}
        />
      ))}
      {/* {selectedPlace && (
        <InfoWindowF
          position={{
            lat: selectedPlace.latitude,
            lng: selectedPlace.longitude,
          }}
          zIndex={1}
          options={{ pixelOffset: new window.google.maps.Size(0, -30) }}
          onCloseClick={() => setSelectedPlace(undefined)}
        >
          <div>
            <h1 className="text-lg">{selectedPlace.name}</h1>
            <p className="text-base">PS:{selectedPlace.ps}</p>
            <p className="text-base">{selectedPlace.psno}</p>
          </div>
        </InfoWindowF>
      )} */}
    </div>
  );
};

export default Teammarkers;
