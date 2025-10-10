import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import downloadIcon from "../../assets/downloads-icon.png";
import ratingIcon from "../../assets/rating-icon.png";
import reviewIcon from "../../assets/review.png";
import { Bar, ComposedChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { addToStoredDB } from "../../utility/addToDB";

const Details = () => {
  const [install, setInstall] = useState(false);
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();
  const singleApp = data.find((app) => app.id === appId);

  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = singleApp;

  // data processing for the chart
  const chartData = ratings.map(data => ({
    name: data.name,
    count: data.count,
  }))
  .sort((a,b) => {
    const numberA = parseInt(a.name);
    const numberB = parseInt(b.name);
    return numberB - numberA
  })
 //   console.log(chartData)

  useEffect(() => {
    const installApp = JSON.parse(localStorage.getItem("install")) || [];
    const alreadyInstalled = installApp.some(a => a === appId);

    if (alreadyInstalled) {
      setInstall(true);
    }
  }, [appId]);

  const handleInstallation = id => {

    const installApp = JSON.parse(localStorage.getItem("install")) || [];
    
    if (!installApp.some(a => a.id === id)) {
      installApp.push(singleApp);
      localStorage.setItem("install", JSON.stringify(installApp))
    }

    setInstall(true);
    addToStoredDB(id)
  }

  return (
    <section className="bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        {/* first part */}
        <div className="flex flex-col md:flex-row lg:flex-row gap-5 p-6">
          <div>
            <img src={image} alt="" className="w-70 rounded-lg shadow-sm" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#001931]">{title}</h1>
            <p className="my-2">
              <span className="text-[#627382]">Developed by </span> <span className="text-[#9F62F2] font-semibold">{companyName}</span>
            </p>

            <div className="border-b-1 border-[#001931] my-4"></div>

            <div className="flex flex-col md:flex-row lg:flex-row items-center gap-12">
              {/* downloads */}
              <div className="flex flex-col items-center">
                <img src={downloadIcon} alt="" />
                <p className="my-3">Downloads</p>
                <p className="text-4xl font-bold">
                  <span>{downloads}</span>M
                </p>
              </div>

              {/* average ratings */}
              <div className="flex flex-col items-center">
                <img src={ratingIcon} alt="" className="" />
                <p className="my-3">Average Ratings</p>
                <p>
                  <span className="text-4xl font-bold">{ratingAvg}</span>
                </p>
              </div>

              {/* total review */}
              <div className="flex flex-col items-center">
                <img src={reviewIcon} alt="" />
                <p className="my-3">Total Review</p>
                <p className="text-4xl font-bold">
                  <span>{reviews}</span>K
                </p>
              </div>
            </div>

            <a onClick={() => handleInstallation(id)} disabled={install} className="btn text-white bg-[#00D390] mt-2"> {install ? "Installed" : "Install Now"} ({size}MB)</a>
          </div>
        </div>

        <div className="border-b-1 border-[#001931] my-5"></div>

        {/* second part */}
        <div className="w-full h-64 md:h-80 lg:h-95">
            <ResponsiveContainer width="90%" height="100%">
              <ComposedChart layout="vertical" width={1200} height={500} data={chartData}>
                <YAxis dataKey="name" type="category"></YAxis>
                <XAxis type="number"></XAxis>
                <Bar dataKey="count" fill="#FF8811"></Bar>
              </ComposedChart>
            </ResponsiveContainer>
        </div>

        <div className="border-b-1 border-[#001931] my-5"></div>

        {/* third part */}
        <div className="my-5">
            <h2 className="font-bold text-xl mb-5">Description</h2>
            <p className="pb-5">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default Details;
