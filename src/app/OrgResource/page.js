import React from "react";

const getData = async () => {
  try {
    const data = await fetch(
      "http://11.0.101.244:8080/api/org/getAllResources",
      {
        cache: "no-store",
      }
    );
    if (!data.ok) {
      throw new Error("Failed to fetch data");
    }
    const resp = await data.json();
    // const res = resp.reverse();

    return resp;
  } catch (error) {
    throw error;
  }
};

const OrgResource = async () => {
  const resourceDetails = await getData();
  // const [teamDetails, setTeamDetails] = useState('');
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-700">Resource Details</h1>
      {resourceDetails.length === 0 ? (
        <p>No Rsource details available.</p>
      ) : (
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Resource ID:
              </th>
              <th scope="col" class="px-6 py-3">
                Resource Name:
              </th>
              <th scope="col" class="px-6 py-3">
                Total:
              </th>
              <th scope="col" class="px-6 py-3">
                Available:
              </th>
              <th scope="col" class="px-6 py-3">
                Requested:
              </th>
              <th scope="col" class="px-6 py-3">
                Team ID:
              </th>
            </tr>
          </thead>
          {resourceDetails &&
            resourceDetails.map((team) => (
              <tbody key={team.resourceID}>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {team.resourceID}
                  </th>
                  <td class="px-6 py-4">{team.resourceName}</td>
                  <td class="px-6 py-4">{team.total}</td>
                  <td class="px-6 py-4">{team.available}</td>
                  <td class="px-6 py-4">{team.requested}</td>
                  <td class="px-6 py-4">{team.tmID}</td>
                </tr>
              </tbody>
            ))}
        </table>
      )}
    </div>
  );
};

export default OrgResource;
