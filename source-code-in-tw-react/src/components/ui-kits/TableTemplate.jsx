import React from "react";
import svgExports from "../../assets/svg/exports";

const TableTemplate = (props) => {
  const MyTableHead = (props) => {
    return (
      <th scope="col" className="px-6 py-3">
        {props.name}
      </th>
    );
  };

  const MyTableContent = (props) => {
    return props.type == "users" ? (
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="col" className="p-4">
          <div className="flex items-center">
            <input
              id="checkbox-all-search"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="checkbox-all-search" className="sr-only">
              checkbox
            </label>
          </div>
        </th>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {props.name}
        </th>

        <td className="px-6 py-4">{props.category}</td>
        <td className="px-6 py-4">{props.email}</td>
        <td className="px-6 py-4">{props.last_in}</td>
        <td className="px-6 py-4">{props.status}</td>
        <td className="px-6 py-4 ">
          <button className="w-6 h-6 p-1 border rounded ">
            <svgExports.MoreButton />
          </button>
        </td>
      </tr>
    ) : props.type === "articles" ? (
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="col" className="p-4">
          <div className="flex items-center">
            <input
              id="checkbox-all-search"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="checkbox-all-search" className="sr-only">
              checkbox
            </label>
          </div>
        </th>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {props.name}
        </th>
        <td className="px-6 py-4">{props.date_posted}</td>
        <td className="px-6 py-4">{props.views}</td>
        <td className="px-6 py-4">{props.content_assessment}</td>
        <td className="px-6 py-4">{props.status}</td>
        <td className="px-6 py-4 ">
          <button className="w-6 h-6 p-1 border rounded ">
            <svgExports.MoreButton />
          </button>
        </td>
      </tr>
    ) : props.type === "programs" ? (
      <></>
    ) : props.type === "queries" ? (
      <></>
    ) : (
      <tr>
        <td>Did not found any</td>
      </tr>
    );
  };

  return (
    <div className="relative w-full h-full overflow-x-auto border rounded">
      <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
          <tr className="border-b">
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>

            {props.table_head.map((value, index) => {
              return <MyTableHead name={value} />;
            })}
          </tr>
        </thead>

        <tbody>
          {props.data.map((value, index) => {
            console.log(index);
            return (
              index < 10 && <MyTableContent {...value} type={props.type} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableTemplate;
