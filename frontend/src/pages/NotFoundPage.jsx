import { FaBuildingWheat } from "react-icons/fa6";
import HomeButton from "../components/HomeButton"

const NotFoundPage = () => {
  return (
    <div className="container">
      <div className='notFoundPageContainer'>
        <div className="notFoundContentContainer">
          <h1>404</h1>
          <p>Nothing exists here!</p>
        </div>
        <div className="iconContainer">
          <FaBuildingWheat className="icon" />
        </div>
        <HomeButton />
      </div>
    </div>
  )
}

export default NotFoundPage