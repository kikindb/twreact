import { MouseEventHandler, ReactElement, useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { IconType } from "react-icons/lib";

interface FABProps {
  label?: string;
  defaultIcon: ReactElement<IconType>;
  alternateIcon?: ReactElement<IconType>;
  toggle?: boolean;
  toggleHandler?: MouseEventHandler;
  alwaysShow?: boolean;
}

export default function FAB({
  label = "Floating Button",
  defaultIcon,
  alternateIcon = <RiCloseFill />,
  toggle = true,
  toggleHandler = () => {
    console.log("no handler");
  },
  alwaysShow = false,
}: FABProps) {
  return (
    <button
      type="button"
      className={`${
        alwaysShow ? "" : "lg:hidden"
      } absolute bottom-4 right-4 z-50 p-4 text-3xl rounded-full bg-purple-400 hover:bg-purple-600 transition-colors`}
      aria-label={label}
      onClick={toggleHandler}
    >
      {toggle ? defaultIcon : alternateIcon}
    </button>
  );
}
