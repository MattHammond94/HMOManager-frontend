import { Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";

const HomeButton = ({ layoutType }) => {
  const styles = layoutType ? {
    position: 'fixed',
    top: '20px',
    right: '15px'
  } : {};

  return (
    <div className="homeBtnContainer" style={ styles }>
      <Link to="/dashboard">
        <IoIosHome className="homeIcon"/>
      </Link>
    </div>
  )
}

export default HomeButton