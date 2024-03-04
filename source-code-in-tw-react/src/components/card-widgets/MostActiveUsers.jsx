import React from "react";

const MostActiveUsers = () => {
  const MyTableRowHead = (props) => {
    return (
      <th scope="col" className="px-6 py-3">
        <div className="flex items-center">
          {props.th_name}
          <a href="#">
            <svg
              className="w-3 h-3 ms-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"></path>
            </svg>
          </a>
        </div>
      </th>
    );
  };

  const MyTableRowBody = (props) => {
    return (
      <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50">
        <th
          scope="row"
          className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {props.organization}
        </th>
        <td className="px-6 py-3">{props.entrances}</td>
        <td className="px-6 py-3">{props.bouncerate}</td>
        <td className="px-6 py-3">{props.exit}</td>
      </tr>
    );
  };

  return (
    <div className="col-span-8 p-4 border rounded">
      <p className="mb-1 text-xl font-semibold text-pri-color">
        Most Active Users
      </p>
      <p className="text-xs text-gray-500">
        Part of this date range occurs before the new users metric had been
        calculated, so the old users metric is displayed.
      </p>

      <div className="relative mt-4 overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Organization
              </th>

              <MyTableRowHead th_name="Entrances" />
              <MyTableRowHead th_name="Bounce Rate" />
              <MyTableRowHead th_name="Exit" />
            </tr>
          </thead>
          <tbody>
            <MyTableRowBody
              organization="Batangas State University"
              entrances="33.15%"
              bouncerate="33.15%"
              exit="33.15%"
            />
            <MyTableRowBody
              organization="Batangas State University"
              entrances="33.15%"
              bouncerate="33.15%"
              exit="33.15%"
            />
            <MyTableRowBody
              organization="Batangas State University"
              entrances="33.15%"
              bouncerate="33.15%"
              exit="33.15%"
            />
            <MyTableRowBody
              organization="Batangas State University"
              entrances="33.15%"
              bouncerate="33.15%"
              exit="33.15%"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MostActiveUsers;
