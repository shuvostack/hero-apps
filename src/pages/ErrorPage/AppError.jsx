import React from "react";
import appErrorImage from "../../assets/App-Error.png";
import { useNavigate } from "react-router";

const AppError = () => {

  const goBack = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center p-16">
      <div>
        <img src={appErrorImage} alt="error image" className="w-90" />
      </div>
      <div className="text-center">
        <h1 className="text-4xl text-[#001931] font-bold mt-6">
          Oops, Apps not found!
        </h1>
        <p className="text-[#627382] my-3">
          The Apps you are looking for is not available.
        </p>
        <button
          onClick={() => goBack(-1)}
          className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"
        >
          Go Back!
        </button>
      </div>
    </div>
  );
};

export default AppError;
