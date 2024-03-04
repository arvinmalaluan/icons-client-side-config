import React from "react";
import svgExports from "../../assets/svg/exports";

const GenericCard = () => {
  const MyMiniCard = (props) => {
    return (
      <div className="flex items-center w-full h-full gap-2 mt-4">
        <div
          className={`flex items-center justify-center w-10 h-10 text-white ${props.color}`}
        >
          <div className="w-6 h-6">
            <svgExports.BarChartIcon />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-xs">Bounce Rate</p>
          <p className={`font-semibold text-${props.color}`}>33.25%</p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full border rounded ">
      <div className="w-full h-full p-4">
        <p className="mb-1 font-semibold text-pri-color">Acquisition</p>
        <p className="text-xs text-gray-500">
          Tells you where your visitors originated from, such as search engines,
          social networks or website referrals.
        </p>

        <div className="flex justify-between gap-4">
          <MyMiniCard color="pri-color" />
          <MyMiniCard color="sec-color" />
        </div>
      </div>
    </div>
  );
};

export default GenericCard;
