import { RxDashboard } from "react-icons/rx";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { GiExpense } from "react-icons/gi";
import {Link} from "react-router-dom"


const SideBar = () => {
  return (
    <div className="bg-white w-[18vw] h-[80vh] m-5 py-10 px-12 rounded-3xl">
        <Link to="/" className="py-5 flex gap-3">
          <RxDashboard fontSize={30} />
          <p>Dashboard</p>
          </Link>

      <div className="py-5 flex gap-3">
        <GiExpense fontSize={30} />
        <p>Expenses</p>
      </div>

      <div className="py-5 flex gap-3">
        <IoSettingsSharp fontSize={30} />
        <p>Settings</p>
      </div>

      <div className="py-5 flex gap-3">
        <IoMdLogOut fontSize={30} />
        <p>Log out</p>
      </div>
    </div>
  )
}

export default SideBar
