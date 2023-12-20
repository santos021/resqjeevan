"use client";
import React, { useState } from "react";
import {} from "geolib";
import GoogleMapView from "@/components/GoogleMapView";

const page = () => {
  const [showManpower, setShowManpower] = useState(false);
  const [showEquipment, setShowEquipment] = useState(false);
  const [manpowerInput, setManpowerInput] = useState("");
  const [userLocation, setUserLocation] = useState({lat:0,lng:0});
  const [equipmentSelection, setEquipmentSelection] = useState([]);
  const [loading, setLoading] = useState(null);
  const [status, setStatus] = useState(null);
  const amount = 10

  const handleRequestClick = () => {
    setShowManpower(!showManpower);
    setShowEquipment(!showEquipment);
  };

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      // console.log(pos)
      setUserLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  };
  getUserLocation();
  console.log(userLocation);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
  
    if (isChecked) {
      setEquipmentSelection((prevSelection) => [...prevSelection, value]);
    } else {
      setEquipmentSelection((prevSelection) =>
        prevSelection.filter((item) => item !== value)
      );
    }
  };

  const handleSubmitmanpower = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch(
        "http://11.0.101.244:8080/api/teams/postRequests",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            requestID: 123456789,
            senderID: 123456789,
            distanceKM: 5,
            membersRequired: parseInt(manpowerInput),
            resID: 123453,
          }),
        }
      );

      if (res.status === 200) {
        setStatus("success");
      } else {
        setStatus("failed");
      }
    } catch (err) {
      setStatus(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      
      const res = await fetch(
        `http://11.0.101.244:8080/api/teams/saveResources`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // resourceID, resourceName, tatal, lon, available, tmID
            // resourceID: 1234,
            // resourceName: equipmentSelection,
            // lat:userLocation.lat,
            // lon:userLocation.lng
            // id name total available, tmid
            resourceID:4,
            resourceName: 'crowbar',
            total: 50,
            available: 40,
            tmID:225
            // lat:userLocation.lat,
            // lon:userLocation.lng

          }),
        }
      );

      if (res.status === 200) {
        setStatus("success");
      } else {
        setStatus("failed");
      }
    } catch (err) {
      setStatus(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <div className="absolute right-10 top-0">
        <div className="mt-4 ml-4">
          <label htmlFor="manpowerCheckbox">Manpower</label>
          <div className="ml-6">
            <label htmlFor="manpowerInput">Input:</label>
            <input
              type="number"
              id="manpowerInput"
              placeholder="Number of members"
              value={manpowerInput}
              onChange={(e) => setManpowerInput(e.target.value)}
              className="ml-2 p-2 border-b-2 border-[#65D5FA] outline-none text-[12px] text-black"
            />
          </div>
        </div>
        <button
          type="button"
          className="bg-[#3688F3] text-[#fff] text-[16px] rounded-md mt-2 mb-1 p-2 px-12 ml-8"
          onClick={handleSubmitmanpower}
        >
          Request assistance
        </button>

        <div className="mt-4 ml-4">
          <label htmlFor="equipmentCheckbox">Equipment Requirement</label>
          <div className="ml-6">
            <div className="flex flex-col">
              <label>
                <input
                  type="checkbox"
                  name="equipment"
                  value="Firstaid"
                  checked={equipmentSelection.includes("Firstaid")}
                  onChange={handleCheckboxChange}
                />
                Firstaid
              </label>
              <label>
                <input
                   type="checkbox"
                   name="equipment"
                   value="Chainsaw"
                   checked={equipmentSelection.includes("Chainsaw")}
                   onChange={handleCheckboxChange}
                />
                Chainsaw
              </label>
              <label>
                <input
                  type="checkbox"
                  name="equipment"
                  value="Equipment Gascutter"
                  checked={equipmentSelection.includes("Equipment Gascutter")}
                  onChange={handleCheckboxChange}
                />
                Gas cutter
              </label>
              <label>
                <input
                   type="checkbox"
                   name="equipment"
                   value="Mask"
                   checked={equipmentSelection.includes("Mask")}
                   onChange={handleCheckboxChange}
                />
                Mask
              </label>
              <label>
                <input
                   type="checkbox"
                   name="equipment"
                   value="Equipment 1"
                   checked={equipmentSelection.includes("Equipment 1")}
                   onChange={handleCheckboxChange}
                />
                Life Jacket
              </label>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="bg-[#3688F3] text-[#fff] text-[16px] rounded-md mt-4 ml-6 p-2 px-6"
          onClick={handleSubmit}
        >
          Request Resource
        </button>
      </div>

      <div className=" mt-2">
        <GoogleMapView />
      </div>
    </div>
  );
};

export default page;
