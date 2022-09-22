import { ROUTES } from "./../../routes/AppRoutes";
import {
  RiPieChartFill,
  RiInformationFill,
  RiUserSettingsFill,
} from "react-icons/ri";
import SidebarLink from "../UI/SidebarLink";

export default function SidebarNav() {
  return (
    <nav>
      <ul className="w-fit m-auto">
        <li className="my-4">
          <SidebarLink title="Dashboard" link="/" icon={<RiPieChartFill />} />
        </li>
        <li className="my-4">
          <SidebarLink
            title="Info"
            link={ROUTES.PRIVATE.INFO}
            icon={<RiInformationFill />}
          />
        </li>
        <li className="my-4">
          <SidebarLink
            title="My Profile"
            link={ROUTES.PRIVATE.PROFILE}
            icon={<RiUserSettingsFill />}
          />
        </li>
      </ul>
    </nav>
  );
}
