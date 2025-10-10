import React, { Suspense, useState } from "react";
import { useLoaderData } from "react-router";
import App from "../App/App";
import AppError from "../ErrorPage/appError";

const Apps = () => {
  const data = useLoaderData();

  const [search, setSearch] = useState("");
  const term = search.trim().toLowerCase();
  const searchedApps = term
    ? data.filter((app) => app.title.toLowerCase().includes(term))
    : data;

  return (
    <section className="bg-[#f5f5f5]">
      <div className="p-10 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#001931]">
            Our All Applications
          </h1>
          <p className="mt-4 text-[#627382]">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row justify-between my-7">
          <h3 className="text-xl font-semibold">
            <span>({searchedApps.length})</span>Apps Found
          </h3>

          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              required
              placeholder="Search Apps"
            />
          </label>
        </div>

        {/* all apps */}
        {searchedApps.length === 0 ? (
          <AppError></AppError>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Suspense
              fallback={
                <span className="loading loading-spinner loading-xl"></span>
              }
            >
              {searchedApps.map((singleApp) => (
                <App
                  key={singleApp.id}
                  singleApp={singleApp}
                  search={search}
                ></App>
              ))}
            </Suspense>
          </div>
        )}
      </div>
    </section>
  );
};

export default Apps;
