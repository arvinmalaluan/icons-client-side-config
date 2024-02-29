import React from "react";

const PageViewsFrequency = () => {
  const MyList = (props) => {
    return (
      <div className={props.isLast ? "py-2 border-b" : "py-2"}>
        <div className="flex justify-between">
          <p className="text-sm font-semibold">{props.name}</p>
          <p className="text-sm font-semibold text-sec-color">{props.visits}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-xs text-gray-500">{props.path}</p>
          <p className="text-xs text-gray-500">{props.percentage}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="col-span-4 p-4 border rounded">
      <p className="text-xl font-semibold text-pri-color">
        Page views by title page
      </p>
      <p className="mb-2 text-xs text-gray-500">
        This report is based on 100% of sessions.
      </p>

      <MyList
        name="Community Page"
        visits="12, 002"
        path="api/v1/community"
        percentage="31.74% (-100.00%)"
        isLast={true}
      />
      <MyList
        name="Messenger Page"
        visits="8, 001 visits"
        path="api/v1/messenger"
        percentage="31.74% (-100.00%)"
        isLast={true}
      />
      <MyList
        name="Profile Page"
        visits="18, 001 visits"
        path="api/v1/profile"
        percentage="31.74% (-100.00%)"
        isLast={true}
      />
      <MyList
        name="Startups Profile Page"
        visits="10, 023 visits"
        path="api/v1/profile"
        percentage="31.74% (-100.00%)"
        isLast={true}
      />
      <MyList
        name="Partners Profile Page"
        visits="11, 011 visits"
        path="api/v1/profile"
        percentage="31.74% (-100.00%)"
        isLast={false}
      />
    </div>
  );
};

export default PageViewsFrequency;
