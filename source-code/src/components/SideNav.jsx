import svgExports from "../assets/svg/exports";
import hoverUtils from "../utils/onHover";
import clickUtils from "../utils/onClick";
import image_logo from "../assets/images/logo.png";

const SideNav = () => {
  return (
    <>
      <div
        className="w-[260px] h-full bg-gray-50 relative px-8 py-4"
        id="side-bar"
      >
        <div>
          <a href="">
            <img src={image_logo} className="w-auto h-12" alt="" />
          </a>

          <p className="pb-1 mt-8 text-xs border-b">Dashboard</p>
          <div className="flex flex-col mt-1">
            <a href="" className="px-2 py-1 rounded hover:bg-gray-200">
              Overview
            </a>
          </div>

          <p className="pb-1 mt-8 text-xs border-b">Manage</p>
          <div className="flex flex-col mt-1">
            <a href="" className="px-2 py-1 rounded hover:bg-gray-200">
              Users
            </a>
            <a href="" className="px-2 py-1 rounded hover:bg-gray-200">
              Articles
            </a>
            <a href="" className="px-2 py-1 rounded hover:bg-gray-200">
              Programs
            </a>
            <a href="" className="px-2 py-1 rounded hover:bg-gray-200">
              Queries
            </a>
          </div>

          <p className="pb-1 mt-8 text-xs border-b">Interact</p>
          <div className="flex flex-col mt-1">
            <a href="" className="px-2 py-1 rounded hover:bg-gray-200">
              Community
            </a>
            <a href="" className="px-2 py-1 rounded hover:bg-gray-200">
              Messenger
            </a>
          </div>
        </div>

        <div
          className="absolute top-1/2 translate-y-2/4 right-[-25px] w-6 h-6 hidden"
          id="toggle-for-side-r"
          onMouseEnter={hoverUtils.onHoverSide}
          onMouseLeave={hoverUtils.onHoverSideLeave}
          onClick={(event) =>
            clickUtils.onClickSide(event, "toggle-for-side-r")
          }
        >
          <svgExports.ArrowForSideBarRight />
        </div>

        <div
          className="absolute top-1/2 translate-y-2/4 right-[-25px] w-6 h-6"
          id="toggle-for-side-n"
          onMouseEnter={hoverUtils.onHoverSide}
          onMouseLeave={hoverUtils.onHoverSideLeave}
          onClick={(event) =>
            clickUtils.onClickSide(event, "toggle-for-side-n")
          }
        >
          <svgExports.ArrowForSideBarNeutral />
        </div>

        <div
          className="absolute top-1/2 translate-y-2/4 right-[-25px] w-6 h-6 hidden"
          id="toggle-for-side-l"
          onMouseEnter={hoverUtils.onHoverSide}
          onMouseLeave={hoverUtils.onHoverSideLeave}
          onClick={(event) =>
            clickUtils.onClickSide(event, "toggle-for-side-l")
          }
        >
          <svgExports.ArrowForSideBarLeft />
        </div>
      </div>
    </>
  );
};

export default SideNav;
