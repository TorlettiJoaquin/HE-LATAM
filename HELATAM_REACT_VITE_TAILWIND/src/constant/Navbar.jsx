// importar una img de assets images "newlogo.webp" en typescript
import { Link } from "react-router-dom";
import { useState } from "react";
// import logo from "../assets/images/newlogo.webp";
import hemlogo from "../assets/images/hemlogo.webp";

export const Navbar = () => {
    const [openGf, setOpenGf] = useState(false);
    const [openRs, setOpenRs] = useState(false);

    return (
        <nav className="relative w-3/4 max-w-[1700px] h-20 pl-[14%] bg-gradient-to-b from-blue-900 to-blue-950  mx-auto rounded-2xl z-50">
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
                <Link
                    to="/"
                    className="bg-gradient-to-b hover:from-blue-900 hover:to-slate-900 hover:border-b hover:border-b-yellow-200"
                >
                    <li className="">Inicio</li>
                </Link>
                <Link
                    to="/guide/gameinfo"
                    className="bg-gradient-to-b hover:from-blue-900 hover:to-slate-900 hover:border-b hover:border-b-yellow-200"
                    onMouseEnter={() => {
                        setOpenGf(true);
                    }}
                    onMouseLeave={() => {
                        setOpenGf(false);
                    }}
                >
                    <li>
                        Game Info ⇓
                        <ul
                            className={`${
                                openGf ? "block" : "hidden"
                            } absolute top-20 bg-slate-900 text-xs px-4 w-full [&>*]:[&>*]:h-14 [&>*]:[&>*]:leading-[55px] [&>*]:[&>*]:border-b [&>*]:[&>*]:border-b-blue-400 transition-all ease-linear duration-500`}
                        >
                            <Link to="/guide/whatishe">
                                <li className="hover:border-b hover:border-b-yellow-200">
                                    What&apos;s HE?
                                </li>
                            </Link>
                            <Link to="/guide/terminology">
                                <li className="hover:border-b hover:border-b-yellow-200">
                                    Terminology
                                </li>
                            </Link>

                            <Link to="/guide/battleground">
                                <li className="hover:border-b hover:border-b-yellow-200">
                                    Battleground
                                </li>
                            </Link>

                            <Link to="/guide/items">
                                <li className="hover:border-b hover:border-b-yellow-200">
                                    Items
                                </li>
                            </Link>
                            <Link to="/media">
                                <li className="hover:border-b hover:border-b-yellow-200">
                                    media
                                </li>
                            </Link>
                        </ul>
                    </li>
                </Link>
                <Link
                    to="/heroes"
                    className="bg-gradient-to-b hover:from-blue-900 hover:to-slate-900 hover:border-b hover:border-b-yellow-200"
                >
                    <li className="">Heroes</li>
                </Link>
                <Link
                    to="/news"
                    className="bg-gradient-to-b hover:from-blue-900 hover:to-slate-900 hover:border-b hover:border-b-yellow-200"
                >
                    <li className="">News</li>
                </Link>
                <Link
                    to="/guide"
                    className="bg-gradient-to-b hover:from-blue-900 hover:to-slate-900 hover:border-b hover:border-b-yellow-200"
                >
                    <li className="">Guide</li>
                </Link>

                <li
                    className="bg-gradient-to-b hover:from-blue-900 hover:to-slate-900 hover:border-b hover:border-b-yellow-200 cursor-pointer"
                    onMouseEnter={() => {
                        setOpenRs(true);
                    }}
                    onMouseLeave={() => {
                        setOpenRs(false);
                    }}
                >
                    Comunnity ⇓
                    <ul
                        className={`${
                            openRs ? "block" : "hidden"
                        } absolute top-20 bg-slate-900 text-xs px-4 w-full [&>*]:[&>*]:h-14 [&>*]:[&>*]:leading-[55px] [&>*]:[&>*]:border-b [&>*]:[&>*]:border-b-blue-400 transition-all ease-linear duration-500`}
                    >
                        <a
                            href="https://www.facebook.com/hem.mawel"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <li className="hover:border-b hover:border-b-yellow-200">
                                Facebook
                            </li>
                        </a>
                        <a
                            href="https://www.instagram.com/hemmawel/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <li className="hover:border-b hover:border-b-yellow-200">
                                Instagram
                            </li>
                        </a>

                        <a
                            href="https://discord.gg/heroesevolved"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <li className="hover:border-b hover:border-b-yellow-200">
                                Discord Oficial
                            </li>
                        </a>
                    </ul>
                </li>
                <Link
                    to="/download"
                    className="bg-gradient-to-b hover:from-blue-900 hover:to-slate-900 hover:border-b hover:border-b-yellow-200"
                >
                    <li className="">Download</li>
                </Link>
            </ul>
        </nav>
    );
};
