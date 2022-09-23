import { NavLink } from "react-router-dom";
import { ReactElement } from "react";
import { IconType } from "react-icons/lib";

interface SidebarLinkProps {
  title: string;
  link?: string;
  icon?: ReactElement<IconType>;
}

export default function SidebarLink(props: SidebarLinkProps) {
  const { title, link = "/", icon } = props;
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        `${
          isActive ? "text-gray-800" : "text-gray-500"
        } capitalize hover:text-gray-800 font-semibold flex items-center justify-left gap-4 transition-colors`
      }
      end
    >
      {icon} {title}
    </NavLink>
  );
}
