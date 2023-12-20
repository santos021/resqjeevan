import { useState } from "react";
import Cookies from "js-cookie";

const TeamRegistrationForm = () => {
    const [loading, setLoading] = useState()
    const [status, setStatus] = useState()
  const [value, setValue] = useState({
    teamID: "",
    noOfMembers: "",
    membersAvailable: "",
    specialities: "",
    password: "",
    status: "",
  });
  const token = Cookies.get('cookies')
  const licenseNo = 54545

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValue((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch(`http://11.0.101.244:8080/api/org/registerTeams`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            teamID: value.teamID,
            noOfMembers: value.noOfMembers,
            membersAvailable: value.membersAvailable,
            specialities: value.specialities,
            password: value.password,
            status: value.status,
            token:"abcxy",
            organizationDetails: {
              licenseNo :licenseNo
            }
        }),
      });

      if (res.status === 200) {
        setValue({
            teamID: "",
            noOfMembers: "",
            membersAvailable: "",
            specialities: "",
            password: "",
            status: "",
        });
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
    <div className="fixed inset-0 flex items-center  justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white flex flex-col p-8  h-[500px] w-[400px] rounded-lg">
        <label className="w-[150px]">
          Team ID:
          <input
            type="number"
            name="teamID"
            value={value.teamID}
            onChange={handleChange}
            className="border-b-2 border-[#65D5FA] outline-none resize-none p-2  text-[12px] text-black"
            required
          />
        </label>
        <label className="w-[150px]">
          noOfMembers:
          <input
            type="number"
            name="noOfMembers"
            value={value.noOfMembers}
            onChange={handleChange}
            className="border-b-2 border-[#65D5FA] outline-none resize-none p-2  text-[12px] text-black"
            required
          />
        </label>
        <label className="w-[150px]">
          membersAvailable:
          <input
            type="number"
            name="membersAvailable"
            value={value.membersAvailable}
            onChange={handleChange}
            className="border-b-2 border-[#65D5FA] outline-none resize-none p-2  text-[12px] text-black"
            required
          />
        </label>
        <label className="w-[150px]">
          specialities:
          <input
            type="text"
            name="specialities"
            value={value.specialities}
            onChange={handleChange}
            className="border-b-2 border-[#65D5FA] outline-none resize-none p-2  text-[12px] text-black"
            required
          />
        </label>
        <label className="w-[150px]">
          password:
          <input
            type="password"
            name="password"
            value={value.password}
            onChange={handleChange}
            className="border-b-2 border-[#65D5FA] outline-none resize-none p-2  text-[12px] text-black"
            required
          />
        </label>
        <label className="w-[150px]">
          status:
          <input
            type="text"
            name="status"
            value={value.status}
            onChange={handleChange}
            className="border-b-2 border-[#65D5FA] outline-none resize-none p-2  text-[12px] text-black"
            required
          />
        </label>
        {/* Other form fields... */}
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 m-2 rounded"
        >
          Submit
        </button>
        {status === "success" && (
            <h1 className="text-green-600">Team registered</h1>
          )}
          {status === "failed" && (
            <h1 className="text-red-600">Error registering the team</h1>
          )}
      </div>
    </div>
  );
};

export default TeamRegistrationForm;
