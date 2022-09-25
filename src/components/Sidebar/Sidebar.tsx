import { RiLogoutBoxRFill } from "react-icons/ri";
import SidebarLink from "../UI/SidebarLink";
import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";

interface SidebarProps {
  toggle?: boolean;
}

export default function Sidebar(props: SidebarProps) {
  const { toggle } = props;
  return (
    <aside
      className={`absolute ${
        toggle ? "left-0" : "-left-full"
      } top-0 z-10 h-full lg:static w-full flex flex-col justify-between bg-white shadow-md lg:rounded-xl p-4 transition-all col-span-2`}
    >
      <SidebarHeader userName="Enrique Dick" />
      <SidebarNav />
      <section className="mx-auto">
        <SidebarLink
          link="/signout"
          title="Sign-out"
          icon={<RiLogoutBoxRFill />}
        />
      </section>
    </aside>
  );
}
