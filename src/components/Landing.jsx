"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";
import Footer from "./Footer/Footer";

const Landing = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // const router = useRouter();

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    router.push(selectedValue);
  };
  return (
    <div>
      <div className="flex justify-between items-center bg-[#232D3F] h-[80px]">
        <Image src={"/g20.png"} alt="img" width={100} height={100} />
        <h2 className="text-white text-[50px]">
          <Link href="/">ResQjeevan</Link>
        </h2>
        <Image src={"/Emb.png"} alt="img" width={50} height={50} />
      </div>

      <div className="flex justify-around bg-[#80B3FF]">
        <ul className="list-none flex p-2 m-2 ">
          <li className="pr-[80px] ">
            <h2>
              <Link href="/">Home</Link>{" "}
            </h2>
          </li>
          {/* <li className="pr-[80px] ">
            <h2>
              <Link href="/">About</Link>
            </h2>
          </li>
          <li className="">
            <h2>
              <Link href="/">Contact us</Link>
            </h2>
          </li> */}
        </ul>
        <div>
          <button
            className="bg-blue-500 text-white px-4 py-2 m-2 rounded"
            onClick={toggleDropdown}
          >
            Register
          </button>
          {isDropdownOpen && (
            <div className="absolute bg-yellow-300 text-black p-3 rounded-md shadow-md">
              <a
                href="/signup"
                className="mb-3 cursor-pointer block"
                onClick={() => handleOptionChange("/organisation")}
              >
                Organisation
                
              </a>
              <a
                href="/"
                onClick={() => handleOptionChange("/general-client")}
              >
                General Client
              </a>
            </div>
          )}

          <button className="bg-green-500 text-white px-4 py-2 m-2 rounded">
          <Link href="/login">Login</Link>
          </button>
        </div>
      </div>
      {/* carasoul parts */}
      <div className="flex justify-between  border-2 border-white">
        <div className="">
          <h1 className="bg-[#FFECD6] text-black font-medium text-[17px] text-center">
            Current Disaster News
          </h1>
          <div className=" bg-white text-black overflow-y-auto h-[386px] p-3">
            <h3 className="bg-[#D5E6EF] text-black text-[15px]">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              minus veniam ex.
            </p>
            <h3 className="bg-[#D5E6EF] text-black text-[15px]">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              minus veniam ex.
            </p>
            <h3 className="bg-[#D5E6EF] text-black text-[15px]">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              minus veniam ex.
            </p>
            <h3 className="bg-[#D5E6EF] text-black text-[15px]">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              minus veniam ex.
            </p>
            <h3 className="bg-[#D5E6EF] text-black text-[15px]">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              minus veniam ex.
            </p>
            <h3 className="bg-[#D5E6EF] text-black text-[15px]">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              minus veniam ex.
            </p>
            <h3 className="bg-[#D5E6EF] text-black text-[15px]">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              minus veniam ex.
            </p>
            <h3 className="bg-[#D5E6EF] text-black text-[15px]">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              minus veniam ex.
            </p>
            <h3 className="bg-[#D5E6EF] text-black text-[15px]">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              minus veniam ex.
            </p>
            <h3 className="bg-[#D5E6EF] text-black text-[15px]">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              minus veniam ex.
            </p>
            <h3 className="bg-[#D5E6EF] text-black text-[15px]">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              minus veniam ex.
            </p>
            <h3 className="bg-[#D5E6EF] text-black text-[15px]">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              minus veniam ex.
            </p>
            <h3 className="bg-[#D5E6EF] text-black text-[15px]">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              minus veniam ex.
            </p>
          </div>
        </div>
        <div>
          <Image src={"/image-4.jpeg"} alt="img" width={930} height={500} />
        </div>
        <div className="">
          <h1 className="bg-[#FFECD6] text-red-500 text-[17px] font-medium text-center">
            Alerts
          </h1>
          <div className="p-3 bg-white text-black overflow-y-auto h-[386px]">
            <h3 className="bg-[#D5E6EF] text-black text-[15px]">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              minus veniam ex.
            </p>
            <h3 className="bg-[#D5E6EF] text-black text-[15px]">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              minus veniam ex.
            </p>
            <h3 className="bg-[#D5E6EF] text-black text-[15px]">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              minus veniam ex.
            </p>
            <h3 className="bg-[#D5E6EF] text-black text-[15px]">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              minus veniam ex.
            </p>
            <h3 className="bg-[#D5E6EF] text-black text-[15px]">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              minus veniam ex.
            </p>
            <h3 className="bg-[#D5E6EF] text-black text-[15px]">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              minus veniam ex.
            </p>
            <h3 className="bg-[#D5E6EF] text-black text-[15px]">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              minus veniam ex.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-around p-6 bg-[#80B3FF]">
        <h1 className="font-bold text-[25px]">Disasters</h1>
      </div>
      <div className="flex justify-between bg-[#CCCCCC]">
        <h1 className="p-4 text-black">
          A disaster is an unforeseen and often catastrophic event that causes
          widespread destruction, disruption, and distress, overwhelming the
          affected community's ability to cope using its normal resources. These
          events can be natural, such as earthquakes, floods, hurricanes, or
          wildfires, or they can be human-made, including industrial accidents,
          technological failures, or armed conflicts. Disasters can result in
          significant loss of life, damage to infrastructure, displacement of
          populations, and long-term economic and environmental consequences.
          Effective disaster management involves proactive measures in
          mitigation, preparedness, response, and recovery to minimize the
          impact and enhance resilience in the face of such adversities.
          Disaster management involves a comprehensive approach that encompasses
          preparedness, mitigation, response, and recovery strategies.
          Mitigation efforts aim to reduce the impact of disasters by
          implementing preventive measures, while preparedness involves
          planning, training, and raising awareness to enhance the ability to
          respond swiftly and efficiently when a disaster occurs. The response
          phase involves immediate actions to save lives, protect property, and
          alleviate suffering, while recovery focuses on rebuilding and
          restoring affected communities to a state of normalcy.
        </h1>
        <Image
          src={"/image-1.jpeg"}
          alt="img"
          width={500}
          height={300}
          className="pr-6"
        />
      </div>
      <div className="flex justify-between bg-[#CCCCCC] pt-3 pb-3 ">
        <Image
          src={"/image-1.jpeg"}
          alt="img"
          width={500}
          height={300}
          className="pl-6"
        />
        <h1 className="p-4 text-black">
          A disaster is an unforeseen and often catastrophic event that causes
          widespread destruction, disruption, and distress, overwhelming the
          affected community's ability to cope using its normal resources. These
          events can be natural, such as earthquakes, floods, hurricanes, or
          wildfires, or they can be human-made, including industrial accidents,
          technological failures, or armed conflicts. Disasters can result in
          significant loss of life, damage to infrastructure, displacement of
          populations, and long-term economic and environmental consequences.
          Effective disaster management involves proactive measures in
          mitigation, preparedness, response, and recovery to minimize the
          impact and enhance resilience in the face of such
          adversities.Disasters have the potential to inflict significant
          social, economic, and environmental damage, leading to loss of life,
          displacement of communities, destruction of infrastructure, and
          long-term consequences for the affected areas. The impact of a
          disaster can overwhelm the capacity of local authorities and
          communities to respond effectively, necessitating external assistance
          and coordinated efforts for recovery.
        </h1>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
