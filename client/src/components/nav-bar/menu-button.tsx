"use client";

import { MenuIcon } from "lucide-react";
import React from "react";

type Props = {};

const MenuButton = (props: Props) => {
  return (
    <button
      onClick={() => {}}
      className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
    >
      <MenuIcon />
    </button>
  );
};

export default MenuButton;
