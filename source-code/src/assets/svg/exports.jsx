const ArrowForSideBarRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="rgba(0, 0, 0, 0.5)"
      id="svgSideRight"
    >
      <path d="M15.6315 12L10.8838 3.03212L9.11622 3.9679L13.3685 12L9.11622 20.0321L10.8838 20.9679L15.6315 12Z"></path>
    </svg>
  );
};

const ArrowForSideBarLeft = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="rgba(0, 0, 0, 0.5)"
    >
      <path d="M8.36853 12L13.1162 3.03212L14.8838 3.9679L10.6315 12L14.8838 20.0321L13.1162 20.9679L8.36853 12Z"></path>
    </svg>
  );
};

const ArrowForSideBarNeutral = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="rgba(0, 0, 0, 0.5)"
      id="svgVerticalBar"
    >
      <path
        d="M12 3V21"
        stroke="rgba(0, 0, 0, 0.5)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

const LogoutIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M4 18H6V20H18V4H6V6H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V18ZM6 11H13V13H6V16L1 12L6 8V11Z"></path>
    </svg>
  );
};

const svgExports = {
  ArrowForSideBarRight,
  ArrowForSideBarLeft,
  ArrowForSideBarNeutral,
  LogoutIcon,
};

export default svgExports;
