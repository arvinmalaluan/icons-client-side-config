import svgExports from "../assets/svg/exports";
import hoverUtils from "../utils/onHover";
import clickUtils from "../utils/onClick";
import image_logo from "../assets/images/logo.png";
import useLocationHook from "../hooks/useLocationHook";
import { Link } from "react-router-dom";

const SideNav = () => {
  const MyAList = (props) => {
    return (
      <Link
        to={props.path}
        className={`px-2 py-1 rounded hover:bg-gray-200 ${
          useLocationHook(props.path) && "font-semibold text-pri-color"
        }`}
      >
        {props.name}
      </Link>
    );
  };

  return (
    <div>
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
            <MyAList name="Dashboard" path="/" />
          </div>

          <p className="pb-1 mt-8 text-xs border-b">Manage</p>
          <div className="flex flex-col mt-1">
            <MyAList name="Users" path="/users" />
            <MyAList name="Articles" path="/articles" />
            <MyAList name="Programs" path="/programs" />
            <MyAList name="Queries" path="/queries" />
          </div>

          <p className="pb-1 mt-8 text-xs border-b">Interact</p>
          <div className="flex flex-col mt-1">
            <MyAList name="Community" path="/community" />
            <MyAList name="Messenger" path="/messenger" />
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
    </div>
  );
};

export default SideNav;
