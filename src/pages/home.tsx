import Mainbar from "../components/mainbar"
import Rightsidebar from "../components/rightsidebar"
import SideBar from "../components/sideBar"

const Home = () => {
  return (
    <div className="flex">
      <SideBar/>
      <Mainbar/>
      <Rightsidebar/>
    </div>
  )
}

export default Home
