import { Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";

const HomeButton = ({ layoutType }) => {
  const styles = layoutType ? {
    position: 'fixed',
    top: '20px',
    right: '15px'
  } : {};

  return (
    <Link to="/dashboard">
      <div className="homeBtnContainer" style={ styles }>
        <IoIosHome className="homeIcon"/>
      </div>
    </Link>
  )
}

export default HomeButton