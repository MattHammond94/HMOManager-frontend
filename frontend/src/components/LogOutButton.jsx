import { useNavigate } from "react-router-dom";

const LogOutButton = () => {
  const navigate = useNavigate();

  const handleLogOut = async (e) => {
    e.preventDefault();

    const logOut = await fetch("http://localhost:5037/Authenticate/logout", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
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