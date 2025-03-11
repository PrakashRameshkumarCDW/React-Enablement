import { Link, useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import './Header.css';


const Header = ({id}:{
  id?:string;
}) => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="logo"onClick={() => navigate("/")} >SITBACK</div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/categories/couches">COUCHES</Link></li>
          <li><Link to="/categories/chairs">CHAIRS</Link></li>
          <li><Link to="/categories/dining">DINING</Link></li>
        </ul>
        <div className={`selected-${id}`}></div>
      </nav>
      <div className="user">Bruce Wayne
        <span className='icon'>
          <FontAwesomeIcon icon={faCaretDown} />
        </span>
      </div>
    </header>
  );
}
export default Header;