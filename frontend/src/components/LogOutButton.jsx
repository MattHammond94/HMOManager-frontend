import { useNavigate } from "react-router-dom";

const LogOutButton = () => {
  const navigate = useNavigate();

  const handleLogOut = async (e) => {
    e.preventDefault();

    localStorage.removeItem("authToken");

    // const logOut = await fetch("http://localhost:5037/Authenticate/logout", {
    //     method: 'POST',
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    // });

    console.log(localStorage.getItem("authToken"))

    if (localStorage.getItem("authToken") === null) {
      return navigate("/");
    }
  }

  return (
    <button className="logOutBtn" onClick={ handleLogOut }>Log Out</button>
  )
}

export default LogOutButton