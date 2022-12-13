import "./NavMenu.css";
import wnwlogo from "../../Utils/imgs/wnwlogo.png"

export default function NavMenu() {
    return (
        <nav className="nav-container">
            <img
                src={require('../../Utils/imgs/wnwlogo.png')}
                alt="Watch and wine Logo" />

            <ul className="nav--ul">
                <li>
                    <a href="#">Top 100</a>
                </li>
                <li>
                    <a href="#">Roulette</a>
                </li>
                <li>
                    <a href="#">W&W fc</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
            </ul>

            <div className="discord-wrapper">
                <img
                    src={require('../../Utils/imgs/discordlogo.png')}
                    alt="Watch and wine Logo" />
                    Log in
            </div>

        </nav>
    );
}