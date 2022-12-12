import "./NavMenu.css";
import wnwlogo from "../../Utils/imgs/wnwlogo.png"

export default function NavMenu() {
    return (
        <nav className="nav-container">
            <img src={require('../../Utils/imgs/wnwlogo.png')}
            alt="Watch and wine Logo" />
        </nav>
    );
}