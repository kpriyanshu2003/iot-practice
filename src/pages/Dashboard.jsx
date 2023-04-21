import { Fragment, useState } from "react";
import SideBar from "../components/Dashboard/SideBar";
import Home from "../components/Dashboard/Home";
import Transaction from "../components/Dashboard/Transactions";
import User from "../components/Dashboard/User";

export default function Dashboard() {
  const [current, setCurrent] = useState({ page: <Home />, id: 0 });
  const update = (n) => {
    switch (n) {
      case "home":
        setCurrent({ page: <Home />, id: 0 });
        break;
      case "trans":
        setCurrent({ page: <Transaction />, id: 1 });
        break;
      case "wallet":
        // setCurrent({ page: <Wallet />, id: 2 });
        break;
      case "user":
        setCurrent({ page: <User />, id: 3 });
        break;
      case "notif":
        // setCurrent({ page: <Notifs />, id: 4 });
        break;
      case "logout":
        // setCurrent({ page: <Logout />, id: 5 });
        break;
      default:
        alert("Error");
        break;
    }
  };
  return (
    <Fragment>
      <div className="">
        <SideBar update={update} value={current.id} />
      </div>
      <div className="h-full w-full absolute inset-0 pl-[150px] pr-[20px] pt-[60px]">
        {current.page}
      </div>
    </Fragment>
  );
}
