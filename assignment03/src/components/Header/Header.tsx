import { Link, useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import './Header.css';
import { APP_NAME, NAV_LINKS } from "../../constants/APP_CONSTANTS";


const Header = ({id}:{
  id?:string;
}) => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="logo"onClick={() => navigate("/")} >{APP_NAME}</div>
      <nav>
        <ul className="nav-links">
        {NAV_LINKS.map((link) => (
            <li><Link to={link.path}>{link.label}</Link></li>
        ))}
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