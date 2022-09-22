import { Link } from "react-router-dom";
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
    <Link
      to={link}
      className="capitalize text-gray-500 hover:text-gray-800 font-semibold flex items-center justify-left gap-4 transition-colors"
    >
      {icon} {title}
    </Link>
  );
}
