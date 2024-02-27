import "./App.css";
import SideNav from "./components/SideNav";
import MyBarChart from "./components/common/BarChart";
import MyAreaChart from "./components/common/LineChart";
import MyBarChart2d from "./components/common/BarChart2Datasets";

function App() {
  const MyButton = (props) => {
    return (
      <button className="px-4 py-2 text-xs text-gray-500 border-r">
        {props.name}
      </button>
    );
  };

  const MyCard = (props) => {
    return (
      <>
        <div>
          <p className="text-xs text-gray-500">{props.label}</p>
          <p className="text-sm font-semibold">{props.value}</p>
        </div>
      </>
    );
  };

  return (
    <div className="flex h-screen">
      <div>
        <SideNav />
      </div>

      <div className="w-[1240px] mx-auto px-8 pt-4">
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
        <div className="grid grid-cols-10 gap-4">
          <div className="col-span-6 border rounded">
            <div className="flex items-start justify-between px-4 pt-4">
              <div className="mb-2">
                <p className="text-xl font-semibold text-pri-color">
                  Website Audience Metrics
                </p>
                <p className="text-xs text-gray-500">
                  Audience to which the users belonged while on the current date
                  range.
                </p>
              </div>

              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  type="button"
                  className="px-4 py-2 text-xs text-gray-500 border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-blue-400 focus:text-blue-700"
                >
                  Day
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-xs text-gray-500 border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-blue-400 focus:text-blue-700"
                >
                  Week
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-xs text-gray-500 border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-blue-400 focus:text-blue-700"
                >
                  Month
                </button>
              </div>
            </div>

            <div className="flex gap-4 px-4 mt-4 mb-4">
              <MyCard label="Users" value="13, 002" />
              <MyCard label="Bounce Rate" value="13, 002" />
              <MyCard label="Page Views" value="13, 002" />
              <MyCard label="Sessions" value="13, 002" />
            </div>

            <div className="w-full h-52">
              <MyAreaChart />
            </div>
          </div>
          <div className="col-span-4 rounded">
            <div className="grid h-full grid-cols-12 gap-4">
              <div className="flex flex-col col-span-6 border h-100">
                <div className="h-auto px-4 py-2">
                  <p className="text-xs">Bounce Rate</p>
                  <p className="text-xl font-semibold text-sec-color">33.05%</p>
                </div>

                <div className="w-full h-full">
                  <MyAreaChart />
                </div>
              </div>
              <div className="flex flex-col col-span-6 border h-100">
                <div className="h-auto px-4 py-2">
                  <p className="text-xs">Bounce Rate</p>
                  <p className="text-xl font-semibold text-sec-color">33.05%</p>
                </div>

                <div className="w-full h-full">
                  <MyBarChart />
                </div>
              </div>
              <div className="col-span-12 border h-100">
                <div className="w-full h-full">
                  <MyBarChart2d />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
