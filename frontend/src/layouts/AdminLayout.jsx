import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"
import HomeButton from "../components/HomeButton";

const AdminLayout = () => {
  return (
    <>
      <Navbar />
      <HomeButton layoutType={true}/>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default AdminLayout