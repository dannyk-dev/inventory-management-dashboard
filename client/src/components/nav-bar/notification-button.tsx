"use client";

import { Bell } from "lucide-react";
import React from "react";

type Props = {};

const NotificationButton = (props: Props) => {
  return (
    <div className="relative">
      <Bell className="cursor-pointer text-gray-500" size={24} />
      <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
        3
      </span>
      {/* <button className="" onClick={() => {}}></button> */}
    </div>
  );
};

export default NotificationButton;
