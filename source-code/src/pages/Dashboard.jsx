import React from "react";
import AudienceMetrics from "../components/card-widgets/AudienceMetrics";
import BounceRate from "../components/card-widgets/BounceRate";
import TotalUsers from "../components/card-widgets/TotalUsers";
import AllSessions from "../components/card-widgets/AllSessions";
import PageViewsFrequency from "../components/card-widgets/PageViewsFrequency";
import SessionByDemographics from "../components/card-widgets/SessionByDemographics";
import GenericCard from "../components/card-widgets/GenericCard";
import MostActiveUsers from "../components/card-widgets/MostActiveUsers";

const Dashboard = () => {
  const MyButton = (props) => {
    return (
      <button className="px-4 py-2 text-xs text-gray-500 border-r">
        {props.name}
      </button>
    );
  };

  return (
    <div className="w-full overflow-y-auto">
      <div className="w-[1240px] mx-auto px-8 p-4">
        <p className="text-2xl font-semibold text-pri-color">
          Hi, welcome back.
        </p>
        <p className="text-xs text-gray-500">
          Welcome, Admin! Your Dashboard for Decisive Insights and Effortless
          Control is now ready.
        </p>

        <div className="flex items-center justify-between w-full mt-6 mb-4 border-b ">
          <div className="flex">
            <MyButton name="Overview" />
            <MyButton name="Users" />
            <MyButton name="Demographics" />
            <button className="px-4 py-2 text-xs text-gray-500">More</button>
          </div>

          <div className="flex">
            <MyButton name="Save Report" />
            <button className="px-4 py-2 text-xs text-gray-500">
              Print Report
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <AudienceMetrics />

          <div className="col-span-5">
            <div className="grid h-full grid-cols-4 gap-4">
              <BounceRate />
              <TotalUsers />
              <AllSessions />
            </div>
          </div>

          <PageViewsFrequency />

          <SessionByDemographics />

          <div className="flex flex-col col-span-4 gap-4">
            <GenericCard />

            <GenericCard />
          </div>

          <MostActiveUsers />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
