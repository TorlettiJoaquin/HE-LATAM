import logo from "../assets/img/newlogo.webp";
import { Link } from "react-router-dom";
import "./DefaultLayout.css";

export default function DefaultLayout() {
    return (
        <nav className="nav">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <ul className="clearfix">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/guide/gameinfo">
                        Game Info
                        <span>⇓</span>
                    </Link>
                    <ul className="subnav">
                        <li>
                            <Link to="/guide/what_is_he>">What's HE?</Link>
                        </li>
                        <li>
                            <Link to="/guide/terminology>">Terminology</Link>
                        </li>
                        <li>
                            <Link to="/guide/battleground>">Battleground</Link>
                        </li>
                        <li>
                            <Link to="/guide/items>">Items</Link>
                        </li>
                        <li>
                            <Link to="/media>">media</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/heroes">Heroes</Link>
                </li>
                <li>
                    <Link to="/news">News</Link>
                </li>
                <li>
                    <Link to="/guide">Guide</Link>
                </li>
                <li>
                    <Link to="/community">
                        Comunnity
                        <span>⇓</span>
                    </Link>
                    <ul className="subnav">
                        <li>
                            <a href="https://www.facebook.com/hem.mawel">
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/hemmawel/">
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://discord.gg/heroesevolved">
                                Discord Oficial
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/download">Download</Link>
                </li>
            </ul>
        </nav>
    );
}
