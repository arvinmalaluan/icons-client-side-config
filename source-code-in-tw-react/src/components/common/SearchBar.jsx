import React from "react";
import svgExports from "../../assets/svg/exports";
import useStateHook from "../../hooks/useStateHook";

const SearchBar = () => {
  const { value, onFocus, onLeave } = useStateHook({ initial_value: false });

  return (
    <div className="flex items-center w-2/6 gap-2 text-xs bg-gray-100 rounded outline-0">
      <div className="flex items-center w-4 h-4 ml-3">
        <svgExports.SearchButton
          color={value ? "pri-color" : "rgba(0, 0, 0, 0.5)"}
        />
      </div>
      <input
        type="text"
        className="w-full py-2 bg-transparent outline-0"
        name=""
        placeholder="Search here"
        id=""
        onFocus={onFocus}
        onBlur={onLeave}
      />
    </div>
  );
};

export default SearchBar;
