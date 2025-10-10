import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApp } from "../../utility/addToDB";
import InstalledApp from "../InstalledApp/InstalledApp";

const Installation = () => {
  const [install, setInstall] = useState([]);
  const [sort, setSort] = useState("");
  const data = useLoaderData();
  console.log(data);

  useEffect(() => {
    const storedAppData = getStoredApp();
    const convertedStoredApps = storedAppData.map((id) => parseInt(id));
    const myAppList = data.filter((app) =>
      convertedStoredApps.includes(app.id)
    );
    setInstall(myAppList);
  }, []);


const handleSort = (type) => {
    setSort(type);

    if (type === "ratings") {
        const sortedByRatings = [...install].sort((a,b) => b.ratingAvg - a.ratingAvg);
        setInstall(sortedByRatings);
    }
    if (type === "size") {
        const sortedBySize = [...install].sort((a,b) => b.size - a.size);
        setInstall(sortedBySize);
    }
} 


  return (
    <section className="bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto p-10">
        <div>
          <h1 className="text-4xl text-[#001931] font-bold text-center">
            Your Installed Apps
          </h1>
          <p className="text-center mt-4 text-[#627382]">
            Explore All Trending Apps on the Market developed by us
          </p>
          <div className="flex items-center justify-between mt-7 mb-6">
            <h2 className="text-xl font-bold">
              <span>{install.length}</span> Apps Found
            </h2>
            <div className="dropdown bg-[#f5f5f5]">
              <div tabIndex={0} role="button" className="btn m-1 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
                Sort By 👇: {sort ? sort : ""}
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a onClick={() => handleSort("ratings")}>ratings</a>
                </li>
                <li>
                  <a onClick={() => handleSort("size")}>size</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {install.map((app) => (
            <InstalledApp key={app.id} app={app}></InstalledApp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Installation;
