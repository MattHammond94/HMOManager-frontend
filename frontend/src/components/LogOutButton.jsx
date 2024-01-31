import { useNavigate } from "react-router-dom";

const LogOutButton = () => {
  const navigate = useNavigate();

  const handleLogOut = async (e) => {
    e.preventDefault();

    console.log('User logged out');

    const logOut = await fetch("logOutEndpoint", {
      //   method: 'POST',
      //   headers: {
      //      "Content-Type": "application/json",
      //      // OTHER HEADERS IF REQUIRED
      //   },
    });

    if (logOut) {
      return navigate("/");
    }
  }

  return (
    <p className="logOutBtn" onClick={ handleLogOut }>Log Out</p>
  )
}

export default LogOutButton