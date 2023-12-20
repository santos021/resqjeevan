import React from 'react'

const page = () => {
    const tableData = [
        { disasterId: "D001",  disasterType: "Flood" , occurance: "Happening"},
        {
        //   id: 2,
          disasterId: "D002",
        //   location: "City B",
          disasterType: "Earthquake",
          occurance : 0
        },
        {
        //   id: 3,
          disasterId: "D003",
        //   location: "City C",
          disasterType: "Cyclone",
          occurance : 1
        },
        {
        //   id: 4,
          disasterId: "D004",
        //   location: "City D",
          disasterType: "Tsunamis",
          occurance : 0
        },
        {
        //   id: 4,
          disasterId: "D005",
        //   location: "City D",
          disasterType: "Tsunamis",
          occurance : 1
        },
        {
        //   id: 4,
          disasterId: "D006",
        //   location: "City D",
          disasterType: "Tsunamis",
          occurance : 1
        },
        // Add more data as needed
      ];

  return (
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
                  <th className="py-2 px-4 border-b">DisasterID</th>
                  <th className="py-2 px-4 border-b">Disaster Type</th>
                  {/* <th className="py-2 px-4 border-b">Accept</th> */}
                  {/* <th className="py-2 px-4 border-b">Reject</th> */}
                </tr>
              </thead>
              <tbody>
                {tableData.map((item) => (
                  <tr key={item.id} className={`${item.occurance == 0? 'bg-red-600':'bg-green-600'} text-center`}>
                    <td className="py-2 px-4 border-b">{item.disasterId}</td>
                    <td className={` py-2 px-4 border-b`}>{item.disasterType}</td>
                    {/* <td className="py-2 px-4 border-b">
                      <button className="bg-green-500 text-white px-4 py-2 rounded">
                        Accept
                      </button>
                    </td> */}
                    {/* <td className="py-2 px-4 border-b">
                      <button className="bg-red-500 text-white px-4 py-2 rounded">
                        Reject
                      </button>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page