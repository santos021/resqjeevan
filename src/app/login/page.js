"use client";
import React, { useState } from "react";
import Cookies from 'js-cookie';
import Link from "next/link";
import Image from "next/image";

function page() {
  const [value, setValue] = useState({
    licenseNo: "",
    password: "",
  });


  const [status, setStatus] = useState(null);
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
      const res = await fetch("http://192.168.137.167:8080/api/org/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          licenseNo: value.licenseNo,
          password:value.password,
          }),
      });
      const cookie = await res.text();
      console.log(res.status)
      console.log("Cookie is ",cookie)

      
      
      if (res.status === 200) {
        Cookies.set('cookies', cookie, { expires: 7 })
        setValue({
          licenseNo: "",
          password: "",

        });
        setStatus("success");
        // router.push("/writeall");
      } else {
        setStatus("failed");
      }
    } catch (err) {
      setStatus(err.message);
    }
    finally{
        setLoading(false);
    }
  };


  return (
    // sticky nav bar
    
    <main className="flex min-h-screen flex-col items-center justify-between p-10  bg-gradient-to-r from-cyan-300 to-blue-400 text-black capitalize">

      <div className="bg-[#DFF9EE] h-[500px] w-[450px] rounded-lg shadow-md shadow-slate-900 flex flex-col p-8">
        <h1 className="mt-3 text-2xl text-center pr-[20px] text-[#3688F3]">
          Login
        </h1>
        <form className="mt-5" onSubmit={handleSubmit}>
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
            <div className="mt-2 flex flex-col w-[180px]">
              <label htmlFor="Password" className="text-[15px]">
                Password :
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your Passworde: "
                value={value.password}
                onChange={handleChange}
                className="border-b-2 border-[#65D5FA] bg-[#DFF9EE] outline-none p-2 text-[12px] text-black"
                required
              />
            </div>
          <div className="mt-3 text-center pr-[25px]">
            <button
              type="submit"
              className="bg-[#3688F3] text-[#fff] text-[16px] rounded-md mt-2 p-2 px-14"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default page;