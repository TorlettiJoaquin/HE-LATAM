// importar una img de assets images "newlogo.webp" en typescript
import { Link } from "react-router-dom";
import { useState } from "react";
// import logo from "../assets/images/newlogo.webp";
import hemlogo from "../assets/images/hemlogo.webp";

export const Navbar = () => {
    const [openGf, setOpenGf] = useState(false);
    const [openRs, setOpenRs] = useState(false);

    return (
        <nav className="relative w-3/4 max-w-[1700px] h-20 pl-[14%] bg-gradient-to-b from-blue-900 to-blue-950  mx-auto rounded-2xl">
            <div className="absolute -top-11 -left-12">
                <Link to="/">
                    <img
                        src={hemlogo}
                        alt="HEM MAWEL LOGO"
                        className="w-[370px]"
                    />
                </Link>
                {/* <img src={logo} alt="HEM MAWEL LOGO" /> */}
            </div>
            <ul className="flex justify-around text-base ml-20 h-full [&>*]:w-[14%] [&>*]:text-center [&>*]:leading-[70px] [&>*]:uppercase [&>*]:relative ">
                <li className="bg-gradient-to-b hover:from-blue-900 hover:to-slate-900 hover:border-b hover:border-b-yellow-200">
                    <Link to="/">Inicio</Link>
                </li>
                <li
                    className="bg-gradient-to-b hover:from-blue-900 hover:to-slate-900 hover:border-b hover:border-b-yellow-200"
                    onMouseEnter={() => {
                        setOpenGf(true);
                    }}
                    onMouseLeave={() => {
                        setOpenGf(false);
                    }}
                >
                    <Link to="/guide/gameinfo">Game Info ⇓</Link>
                    <ul
                        className={`${
                            openGf ? "block" : "hidden"
                        } absolute top-20 bg-slate-900 text-xs px-4 w-full [&>*]:h-14 [&>*]:leading-[55px] [&>*]:border-b [&>*]:border-b-blue-400 transition-all ease-linear duration-500`}
                    >
                        <li className="hover:border-b hover:border-b-yellow-200">
                            <Link to="/guide/what_is_he">What&apos;s HE?</Link>
                        </li>
                        <li className="hover:border-b hover:border-b-yellow-200">
                            <Link to="/guide/terminology">Terminology</Link>
                        </li>
                        <li className="hover:border-b hover:border-b-yellow-200">
                            <Link to="/guide/battleground">Battleground</Link>
                        </li>
                        <li className="hover:border-b hover:border-b-yellow-200">
                            <Link to="/guide/items">Items</Link>
                        </li>
                        <li className="hover:border-b hover:border-b-yellow-200">
                            <Link to="/media">media</Link>
                        </li>
                    </ul>
                </li>
                <li className="bg-gradient-to-b  hover:from-blue-900 hover:to-slate-900 hover:border-b hover:border-b-yellow-200">
                    <Link to="/heroes">Heroes</Link>
                </li>
                <li className="bg-gradient-to-b  hover:from-blue-900 hover:to-slate-900 hover:border-b hover:border-b-yellow-200">
                    <Link to="/news">News</Link>
                </li>
                <li className="bg-gradient-to-b  hover:from-blue-900 hover:to-slate-900 hover:border-b hover:border-b-yellow-200">
                    <Link to="/guide">Guide</Link>
                </li>
                <li
                    onMouseEnter={() => {
                        setOpenRs(true);
                    }}
                    onMouseLeave={() => {
                        setOpenRs(false);
                    }}
                    className="bg-gradient-to-b  hover:from-blue-900 hover:to-slate-900 hover:border-b hover:border-b-yellow-200"
                >
                    <Link to="/community">Comunnity ⇓</Link>
                    <ul
                        className={`${
                            openRs ? "block" : "hidden"
                        } absolute top-20 bg-slate-900 text-xs px-4 w-full [&>*]:h-14 [&>*]:leading-[55px] [&>*]:border-b [&>*]:border-b-blue-400 transition-all ease-linear duration-500`}
                    >
                        <li className="hover:border-b hover:border-b-yellow-200">
                            <a href="https://www.facebook.com/hem.mawel">
                                Facebook
                            </a>
                        </li>
                        <li className="hover:border-b hover:border-b-yellow-200">
                            <a href="https://www.instagram.com/hemmawel/">
                                Instagram
                            </a>
                        </li>
                        <li className="hover:border-b hover:border-b-yellow-200">
                            <a href="https://discord.gg/heroesevolved">
                                Discord Oficial
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="bg-gradient-to-b  hover:from-blue-900 hover:to-slate-900 hover:border-b hover:border-b-yellow-200 rounded-r-2xl">
                    <Link to="/download">Download</Link>
                </li>
            </ul>
        </nav>
    );
};
