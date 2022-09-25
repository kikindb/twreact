import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { RiMenu2Fill, RiCloseFill } from "react-icons/ri";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import FAB from "./components/UI/FAB";

function App() {
  const [sidebar, setSideBar] = useState(false);
  const location = useLocation();

  const sidebarHandler = () => {
    setSideBar((prev) => !prev);
  };

  const bgImg2 =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cGF0aCBkPSJNLTIgMTBMMTAgLTJaTTEwIDZMNiAxMFpNLTIgMkwyIC0yIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iNC41Ij48L3BhdGg+Cjwvc3ZnPg==),url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgo8bGluZWFyR3JhZGllbnQgaWQ9ImciIHgyPSIxIiB5Mj0iMSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGMTkiPjwvc3RvcD4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMENGIj48L3N0b3A+CjwvbGluZWFyR3JhZGllbnQ+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZykiPjwvcmVjdD4KPC9zdmc+";

  useEffect(() => {
    setSideBar(false);
  }, [location]);

  return (
    <div className="App bg-gray-100">
      <div
        className="absolute bg-purple-500 w-full h-20 bg-contain"
        style={{
          background: `url(img/dragon-scales.svg)`,
        }}
      ></div>
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-4 h-screen p-4 ">
        <Sidebar toggle={sidebar} />
        <main className="col-span-9 pt-20">
          <Outlet />
        </main>
        <FAB
          label="Toggle Sidebard"
          defaultIcon={<RiMenu2Fill />}
          alternateIcon={<RiCloseFill />}
          toggle={!sidebar}
          toggleHandler={sidebarHandler}
        />
      </div>
    </div>
  );
}

export default App;
