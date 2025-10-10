import React from "react";
import downloadIcon from "../../assets/downloads-icon.png";
import starIcon from "../../assets/star.png";

const InstalledApp = ({ app , handleUninstall }) => {

  const {id, image, title, downloads, size, ratingAvg } = app;

  return (
    <div className="flex items-center justify-between bg-white p-2 rounded-xl">
      <div className="flex items-center gap-3">
        <div>
          <figure>
            <img src={image} alt="" className="w-20" />
          </figure>
        </div>
        <div>
          <h1 className="text-xl font-semibold mb-1">{title}</h1>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <img src={downloadIcon} alt="" className="w-5" />{" "}
              <p>
                <span>{downloads}</span>
                <span>M</span>
              </p>
            </div>

            <div className="flex items-center gap-1">
              <img src={starIcon} alt="" className="w-5" />{" "}
              <p>
                <span>{ratingAvg}</span>
              </p>
            </div>

            <div className="flex items-center gap-1">
              <img src="" alt="" className="w-5" />{" "}
              <p>
                <span>{size}</span>
                <span>MB</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button onClick={() => handleUninstall(id)} className="btn bg-[#00D390] text-white">Uninstall</button>
      </div>
    </div>
  );
};

export default InstalledApp;
