import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="header">
            <div className="logo" onClick={() => navigate("/")}>
                <img src={logo} alt="logo" />
            </div>
            <nav className="nav-links">
                <a href="/hotels" className="nav-item">Hotels</a>
                <a href="/rentals" className="nav-item">Bike Rentals</a>
                <a href="/restaurants" className="nav-item">Restaurants</a>
            </nav>
        </header>
        );
}
export default Header;