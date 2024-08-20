import React from "react";
import MenuButton from "./MenuButton";
import NavActions from "./nav-actions";
import NavSearch from "./nav-search";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex justify-between items-center w-full mb-7">
      <div className="flex justify-between items-center gap-5">
        <MenuButton />
        <NavSearch />
      </div>

      <NavActions />
    </div>
  );
};

export default Navbar;
