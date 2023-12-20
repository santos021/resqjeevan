"use client";
import GoogleMapDisasterView from "@/components/GoogleMapDisasterView";
import React, { useState } from "react";
import Data from "@/Shared/Data";

const page = () => {
  const [selectedPlace, setSelectedPlace] = useState(undefined);
  const [data, setData] = useState(Data.places);
  return (
    <div className="flex flex-col ">
      <div className="">
        <GoogleMapDisasterView value={data}/>
      </div>
      <div>
        <div className="flex mt-[22px] w-full gap-[30px]">
          <div className="basis-[100%] border bg-white shadow-md rounded-[4px]">
            <div className="bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]">
              <h2 className="text-[#4e73df] text-[16px] leading-[19px] font-bold">
                Disasters
              </h2>
            </div>
            <div>
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b text-black">DisasterID</th>
                    <th className="py-2 px-4 border-b text-black">Disaster Type</th>
                    {/* <th className="py-2 px-4 border-b">Accept</th> */}
                    {/* <th className="py-2 px-4 border-b">Reject</th> */}
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr className={` text-center`}>
                      <td className="py-2 px-4 border-b">{item.name}</td>
                      <td className={` py-2 px-4 border-b`}>{item.address}</td>
                      <td className="py-2 px-4 border-b">
                        <button className="bg-green-500 text-white px-4 py-2 rounded">
                          Accept
                        </button>
                      </td>
                      <td className="py-2 px-4 border-b">
                        <button className="bg-red-500 text-white px-4 py-2 rounded">
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
