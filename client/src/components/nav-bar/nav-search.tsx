"use client";

import { Bell } from "lucide-react";
import React from "react";

type Props = {};

const NavSearch = (props: Props) => {
  return (
    <div className="relative">
      <input
        type="search"
        placeholder="Start type to search groups & products"
        className="pl-10 pr-4 py-2 w-50 md:w-80 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"
      />

      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Bell className="text-gray-500" size={20} />
      </div>
    </div>
  );
};

export default NavSearch;
