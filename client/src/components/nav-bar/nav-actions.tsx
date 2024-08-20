import React from "react";
import ThemeSwitcher from "./theme-switcher";
import NotificationButton from "./notification-button";
import Link from "next/link";
import { Settings } from "lucide-react";

type Props = {};

const NavActions = (props: Props) => {
  return (
    <div className="flex justify-between items-center gap-5">
      <div className="hidden md:flex justify-between items-center gap-5">
        <ThemeSwitcher />
        <NotificationButton />
      </div>
      <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3" />
      <div className="flex items-center gap-3 cursor-pointer">
        <div className="w-9 h-9">img</div>
        <span className="font-semibold">John Doe</span>
      </div>
      <Link href={"/settings"}>
        <Settings className="cursor-pointer text-gray-500" size={24} />
      </Link>
    </div>
  );
};

export default NavActions;
