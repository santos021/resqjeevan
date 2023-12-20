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
      <div className="flex justify-around bg-[#80B3FF]">
        <ul className="list-none flex p-2 m-2 ">
          <li className="pr-[80px] ">
            <h2 className="text-[18px] font-bold">
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
        <div className="ml-[40px] border-2 border-black">
          <Link
            className="bg-blue-500 text-[18px] text-white px-4 py-2 m-2 rounded-lg"
            href={"/signup"}
          >
            Register
          </Link>
          {/* {isDropdownOpen && (
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
          )} */}

          <button className="bg-green-500 text-[18px] text-white px-4 py-2 m-2 rounded-lg">
            <Link href="/login">Login</Link>
          </button>
        </div>
      </div>
      {/* carasoul parts */}
      <div className="flex justify-between  border-2 border-white">
        <div className="">
          <h1 className="bg-[#FFECD6] text-black font-medium text-[17px] text-center">
            Disaster News
          </h1>
          <div className=" bg-white text-black overflow-y-auto h-[386px] p-3">
            <h3 className="bg-[#D5E6EF] text-black text-[15px]">
              Cyclone Tauktae (May 2021):
            </h3>
            <p>
              Cyclone Tauktae hit the western coast of India, causing widespread
              damage in states like Gujarat and Maharashtra. Heavy rainfall,
              strong winds, and storm surges led to casualties and
              infrastructure damage.
            </p>
            <h3 className="bg-[#D5E6EF] text-black text-[15px]">
              COVID-19 Pandemic (ongoing):
            </h3>
            <p>
              India, like the rest of the world, has been dealing with the
              global COVID-19 pandemic. The country has faced challenges related
              to healthcare infrastructure, vaccination distribution, and
              managing the spread of the virus.
            </p>
            <h3 className="bg-[#D5E6EF] text-black text-[15px]">
              Floods in Uttarakhand (February 2021):{" "}
            </h3>
            <p>
              Flash floods occurred in the Chamoli district of Uttarakhand due
              to a glacier burst, leading to the destruction of bridges, roads,
              and hydroelectric projects. Many lives were lost, and several were
              reported missing.
            </p>
            <h3 className="bg-[#D5E6EF] text-black text-[15px]">
              Cyclone Amphan (May 2020):{" "}
            </h3>
            <p>
              Cyclone Amphan struck the Bay of Bengal and affected West Bengal
              and Bangladesh. It was one of the strongest cyclones in the
              region, causing extensive damage to infrastructure, agriculture,
              and human settlements.
            </p>
            <h3 className="bg-[#D5E6EF] text-black text-[15px]">
              Locust Attacks (2020):
            </h3>
            <p>
              Several states in India experienced severe locust attacks,
              affecting crops and posing a threat to agricultural livelihoods.
            </p>
            <h3 className="bg-[#D5E6EF] text-black text-[15px]">
              Assam Floods (annual occurrence):
            </h3>
            <p>
              The state of Assam faces annual floods during the monsoon season,
              causing widespread inundation, displacement of people, and damage
              to crops and infrastructure.
            </p>
          </div>
        </div>
        <div>
          <Image src={"/image-4.jpeg"} alt="img" width={1900} height={500} />
        </div>
        <div className="">
          <h1 className="bg-[#FFECD6] text-red-500 text-[17px] font-medium text-center">
            Alerts
          </h1>
          <div className="p-3 bg-white text-black overflow-y-auto h-[386px]">
            <h3 className="bg-[#D5E6EF] text-black text-[15px]">
              Earthquake Alert
            </h3>
            <p>
              Warning: A seismic event has occurred. Stay indoors, take cover,
              and be prepared for aftershocks.
            </p>
            <h3 className="bg-[#D5E6EF] text-black text-[15px]">
              Hurricane Warning
            </h3>
            <p>
              Attention: A hurricane is approaching. Follow evacuation orders
              and seek shelter immediately.
            </p>
            <h3 className="bg-[#D5E6EF] text-black text-[15px]">
              Flood Advisory
            </h3>
            <p>
              Alert: Heavy rainfall may lead to flooding. Move to higher ground
              and avoid flooded areas
            </p>
            <h3 className="bg-[#D5E6EF] text-black text-[15px]">
              Wildfire Alert
            </h3>
            <p>
              Caution: Wildfire in the area. Evacuate if instructed, and follow
              emergency routes.
            </p>
            <h3 className="bg-[#D5E6EF] text-black text-[15px]">
              Tsunami Warning
            </h3>
            <p>
              Urgent: Tsunami threat detected. Move to higher ground away from
              the coast
            </p>
            <h3 className="bg-[#D5E6EF] text-black text-[15px]">
              Volcanic Activity Notice{" "}
            </h3>
            <p>
              Volcanic activity detected. Follow evacuation orders and stay
              informed about ashfall risks
            </p>
            <h3 className="bg-[#D5E6EF] text-black text-[15px]">
              Space Weather Warning
            </h3>
            <p>
              Space weather alert: Solar storm expected. Monitor communications
              and be prepared for potential disruptions.
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
