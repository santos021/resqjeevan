"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";


function page() {
  const [value, setValue] = useState({
    licenseNo: "",
    orgName: "",
    orgType: "",
    noOfTeams: "",
    noOfMembers: "",
    areaofActivity: "",
    StationAddress: "",
    password: "",
    equipments: "",
    token: "",
  });
  const [selectedOption, setSelectedOption] = useState(null);

  const [status, setStatus] = useState();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValue((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch("http://192.168.137.167:8080/api/org/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          licenseNo: value.licenseNo,
          orgName: value.orgName,
          orgType: value.orgType,
          noOfTeams: value.noOfTeams,
          noOfMembers: value.noOfMembers,
          areaofActivity: value.areaofActivity,
          StationAddress: value.StationAddress,
          password: value.password,
          equipments: value.equipments,
          token: "abczy",
        }),
      });
      const data = await res.text();
      console.log(data);
      // console.log(res.headers)
      // console.log(res.json)
      // console.log(res.arrayBuffer)
      // console.log(res.body)
      // console.log(res.bodyUsed)
      // console.log(res.formData)
      // console.log(res.type)
      // console.log(res.clone)
      // console.log(res.body.getReader)

      const router = useRouter();
      if (res.status === 200) {
        setValue({
          licenseNo: "",
          orgName: "",
          orgType: "",
          noOfTeams: "",
          noOfMembers: "",
          areaofActivity: "",
          StationAddress: "",
          password: "",
          equipments: "",
        });
        setStatus("success");
        router.push("login");
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
    <main className="flex min-h-screen flex-col items-center justify-between p-5 bg-gradient-to-r from-cyan-300 to-blue-400 text-black capitalize">
      <div className="bg-[#DFF9EE] h-[500px] w-[450px] rounded-lg shadow-md shadow-slate-900 flex flex-col pl-6 pr-6">
        <h1 className="mt-3 text-2xl text-center pr-[20px] text-[#3688F3]">
          Registration
        </h1>
        <form className="mt-5" onSubmit={handleSubmit}>
          <div className=" flex">
            <div className="mt-2 flex flex-col w-[180px]">
              <label htmlFor="License No" className="text-[15px]">
                License No:
              </label>
              <input
                type="number"
                name="licenseNo"
                placeholder="Enter your license No: "
                value={value.licenseNo}
                onChange={handleChange}
                className="border-b-2 border-[#65D5FA] bg-[#DFF9EE] outline-none p-2 text-[12px] text-black"
                required
              />
            </div>
            <div className="mt-2 flex flex-col w-[180px] ml-6">
              <label htmlFor="Organization Name" className="text-[15px]">
                Organization Name:
              </label>
              <input
                type="text"
                name="orgName"
                placeholder="Enter your Organization Name: "
                value={value.orgName}
                onChange={handleChange}
                className="border-b-2 border-[#65D5FA] bg-[#DFF9EE] outline-none p-2 text-[12px] text-black"
                required
              />
            </div>
          </div>

          <div className=" flex">
            <div className="mt-2 flex flex-col w-[180px] ">
              <label htmlFor="Number of Teams" className="text-[15px]">
                Number of Teams:
              </label>
              <input
                type="number"
                name="noOfTeams"
                placeholder="Enter your Number of Teams: "
                value={value.noOfTeams}
                onChange={handleChange}
                className="border-b-2 border-[#65D5FA] bg-[#DFF9EE] outline-none p-2 text-[12px] text-black"
                required
              />
            </div>
            <div className="mt-2 flex flex-col w-[180px] ml-6">
              <label htmlFor="Number of Members" className="text-[15px]">
                Number Of Members:
              </label>
              <input
                type="number"
                name="noOfMembers"
                placeholder="Enter your Number of Members: "
                value={value.noOfMembers}
                onChange={handleChange}
                className="border-b-2 border-[#65D5FA] bg-[#DFF9EE] outline-none p-2 text-[12px] text-black"
                required
              />
            </div>
          </div>
          <div className=" flex">
            <div className="mt-2 flex flex-col w-[180px]">
              <label htmlFor="Area of Activity" className="text-[15px]">
                Area of Activity:
              </label>
              <input
                type="text"
                name="areaofActivity"
                placeholder="Area of Activity: "
                value={value.areaofActivity}
                onChange={handleChange}
                className="border-b-2 border-[#65D5FA] bg-[#DFF9EE] outline-none p-2 text-[12px] text-black"
                required
              />
            </div>
            <div className="mt-2 flex flex-col w-[180px] ml-6">
              <label htmlFor="EquipmentAvailable" className="text-[15px]">
                Equipment Available:
              </label>
              <input
                type="text"
                name="equipments"
                placeholder="Enter your EquipmentAvailable : "
                value={value.equipments}
                onChange={handleChange}
                className="border-b-2 border-[#65D5FA] bg-[#DFF9EE] outline-none p-2 text-[12px] text-black"
                required
              />
            </div>
          </div>

          <div className=" flex">
            <div className="mt-2 flex flex-col w-[180px]">
              <label htmlFor="StationAddress" className="text-[15px]">
                Address:
              </label>
              <input
                name="StationAddress"
                type="text"
                placeholder="Enter your StationAddress : "
                value={value.StationAddress}
                onChange={handleChange}
                className="border-b-2 border-[#65D5FA] bg-[#DFF9EE] outline-none resize-none p-2  text-[12px] text-black"
                required
              />
            </div>
            <div className="mt-2 flex flex-col w-[180px] ml-6">
              <h2 className="text-[15px] mb-3">Organisation Type</h2>
              <div className="flex items-center mb-2">
                <input
                  id="default-radio-1"
                  type="radio"
                  value={value.orgType}
                  onChange={handleChange}
                  name="radio-button"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                />
                <label
                  htmlFor="default-radio-1"
                  className="ms-2 text-sm font-medium text-black"
                >
                  Government
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="default-radio-2"
                  type="radio"
                  value={value.nonGovernmentType}
                  onChange={handleChange}
                  name="radio-button"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                />
                <label
                  htmlFor="default-radio-2"
                  className="ms-2 text-sm font-medium text-black"
                >
                  Non-Government
                </label>
              </div>
            </div>
          </div>
          <div>
          <div className="w-[240px]">
              <label htmlFor="password" className="text-[15px]">
              Password:
              </label>
              <input
                type="password"
                name="password"
                placeholder="Create your password : "
                value={value.password}
                onChange={handleChange}
                className="border-b-2 border-[#65D5FA] bg-[#DFF9EE] outline-none p-2 text-[12px] text-black"
                required
              />
            </div>
          </div>

          <div className="mt-3 text-center pr-[25px]">
            <button
              type="submit"
              className="bg-[#3688F3] text-[#fff] text-[16px] rounded-md mt-2 p-2 px-14"
            >
              Submit
            </button>
          </div>
          {status === "failed" && (
            <h1 className="text-red-600">Already registered</h1>
          )}
          {status === "failed" && (
            <h1 className="text-red-600">Successfully registered</h1>
          )}
        </form>
      </div>
    </main>
  );
}

export default page;
