"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TeamRegistrationForm from "./TeamRegistrationForm";

const TeamPage = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [teamDetails, setTeamDetails] = useState([]);

  const handleAddTeam = () => {
    setFormVisible(true);
  };

  const handleFormSubmit = (formData) => {
    // Handle storing the form data (e.g., send it to an API)
    setTeamDetails([...teamDetails, formData]);
    setFormVisible(false);

    console.log("Form Data:", formData);
  };

  return (
    <div>

      {/* Your main content */}
      <div className="flex flex-col justify-center items-center m-auto mt-40">
        <button
          onClick={handleAddTeam}
          className="bg-blue-500 text-white px-4 py-2 m-2 rounded"
        >
          Add Team
        </button>
        {/* <button className="bg-[#e3c341] text-white px-4 py-2 m-2 rounded"> */}
          <Link
          className="bg-[#e3c341] text-white px-4 py-2 m-2 rounded"
            // href={{
            //   pathname: "/displayteam",
            //   query: { teamDetails: JSON.stringify(teamDetails) },
            // }}
            href={'/displayteam'}
          >
            View Team
          </Link>
        {/* </button> */}
      </div>

      {isFormVisible && (
        <TeamRegistrationForm
          onClose={() => setFormVisible(false)}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
};

export default TeamPage;
