import React from "react";
import TableTemplate from "../components/ui-kits/TableTemplate";
import SearchBar from "../components/common/SearchBar";
import MyPagination from "../components/ui-kits/MyPagination";
import dummyData from "../assets/dummy/dummyData";

const Programs = () => {
  const mytablehead = [
    "Title",
    "Date Posted",
    "Views",
    "Content Assessment",
    "Status",
    "Actions",
  ];

  return (
    <div className="w-full overflow-y-scroll">
      <div className="w-[1240px] mx-auto h-full">
        <div className="w-full h-auto px-8 mt-4">
          <div className="flex items-center justify-between pb-2 mb-4 border-b">
            <p className="font-semibold">Manage Programs</p>
            <SearchBar />
          </div>

          <div className="flex justify-between pb-4">
            <div className="flex gap-2">
              <input
                type="text"
                className="w-64 px-4 py-2 text-xs bg-transparent border rounded outline-0"
                name=""
                placeholder="Search table rows"
                id=""
              />

              <button className="px-4 py-2 text-xs text-gray-500 border rounded">
                Category
              </button>
            </div>

            <div className="flex gap-2">
              <button className="px-4 py-2 text-xs text-gray-500 border rounded">
                Save Pdf
              </button>

              <button className="px-4 py-2 text-xs text-gray-500 border rounded">
                Print in Pdf
              </button>
            </div>
          </div>

          <TableTemplate
            data={dummyData.managearticles}
            table_head={mytablehead}
            type="articles"
          />

          <div className="py-4">
            <MyPagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
