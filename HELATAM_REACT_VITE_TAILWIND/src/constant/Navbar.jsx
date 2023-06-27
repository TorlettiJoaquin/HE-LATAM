// importar una img de assets images "newlogo.webp" en typescript
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import hemlogo2 from "../assets/images/hemlogo2.png";
import heico from "../../src/assets/images/he.ico";

import { AiFillCaretDown } from "react-icons/ai";

export const Navbar = () => {
    const [openGf, setOpenGf] = useState(false);
    const [openRs, setOpenRs] = useState(false);

    const [pathname, setPathname] = useState(window.location.pathname);
    const location = useLocation();

    useEffect(() => {
        setPathname(location.pathname);
    }, [location]);

    return (
        <div
            className="sticky top-0 flex flex-row gap-6 h-14 items-center bg-gradient-to-b from-blue-900 to-blue-950 shadow-[0_0_10px_0_rgba(0,0,0,.3)] z-20"
            onMouseLeave={() => {
                setOpenGf(false);
                setOpenRs(false);
            }}
        >
            <div className="relative basis-1/4">
                <Link
                    to="/"
                    className="absolute left-0 -top-10 p-[1px_0_0_24px]"
                >
                    <img
                        src={hemlogo2}
                        alt="HEM MAWEL LOGO"
                        className="w-[200px] max-w-auto"
                    />
                </Link>
            </div>
            <nav className="lg:visible w-full basis-3/4 flex flex-row-reverse">
                <ul className="flex items-center font-semibold [&>*]:transition-all [&>*]:duration-200 [&>*]:[&>*]:transition-all [&>*]:[&>*]:duration-200 [&>*]:mr-2 [&>*]:uppercase [&>*]:[&>*]:px-4 [&>*]:[&>*]:py-[7px] [&>*]:[&>*]: [&>*]:[&>*]:relative ">
                    <NavLink
                        to="/"
                        end
                        onMouseEnter={() => {
                            setOpenGf(false);
                        }}
                        className={`
                        ${({ isActive }) => (isActive ? "active" : " ")} 
                        hover:active`}
                    >
                        <li className="">
                            Inicio
                            {pathname === "/" ? (
                                <img
                                    src={heico}
                                    alt=""
                                    className="animate-spin-slow block absolute h-[16px] w-[16px] -bottom-2 left-[calc(50%_-_(16px/2))]"
                                />
                            ) : (
                                ""
                            )}
                        </li>
                    </NavLink>
                    <NavLink
                        to="/guide/gameinfo"
                        end
                        className={`
                        ${({ isActive }) => (isActive ? "active" : " ")} 
                        hover:active`}
                        onMouseEnter={() => {
                            setOpenGf(true);
                        }}
                    >
                        <li>
                            Informacion{" "}
                            <AiFillCaretDown className="inline-block" />
                            {pathname === "/guide/gameinfo" ||
                            pathname === "/guide/whatishe" ||
                            pathname === "/guide/terminology" ||
                            pathname === "/guide/battleground" ||
                            pathname === "/guide/modes" ||
                            pathname === "/guide/items" ||
                            pathname === "/media" ? (
                                <img
                                    src={heico}
                                    alt=""
                                    className="animate-spin-slow block absolute h-[16px] w-[16px] -bottom-2 left-[calc(50%_-_(16px/2))]"
                                />
                            ) : (
                                " "
                            )}
                            <ul
                                className={`${
                                    openGf ? "block" : "hidden"
                                } absolute top-[45px] left-0 bg-slate-900 text-xs px-4 w-full rounded-2xl [&>*]:[&>*]:h-12 [&>*]:[&>*]:leading-[55px] [&>*]:[&>*]:border-b [&>*]:[&>*]:border-b-blue-400 [&>*]:[&>*]:mb-[3px] transition-all ease-linear duration-500`}
                                onMouseLeave={() => {
                                    setOpenGf(false);
                                }}
                            >
                                <Link to="/guide/whatishe">
                                    <li className="hover:border-b hover:border-b-yellow-200">
                                        Juego
                                    </li>
                                </Link>
                                <Link to="/guide/terminology">
                                    <li className="hover:border-b hover:border-b-yellow-200">
                                        Glosario
                                    </li>
                                </Link>

                                <Link to="/guide/battleground">
                                    <li className="hover:border-b hover:border-b-yellow-200">
                                        batalla
                                    </li>
                                </Link>

                                <Link to="/guide/modes">
                                    <li className="hover:border-b hover:border-b-yellow-200">
                                        Modos
                                    </li>
                                </Link>

                                <Link to="/guide/items">
                                    <li className="hover:border-b hover:border-b-yellow-200">
                                        Items
                                    </li>
                                </Link>
                                <Link to="/media">
                                    <li className="hover:border-b hover:border-b-yellow-200">
                                        Multimedia
                                    </li>
                                </Link>
                            </ul>
                        </li>
                    </NavLink>
                    <NavLink
                        to="/heroes"
                        className={`
                        ${({ isActive }) => (isActive ? "active" : " ")} 
                        hover:active`}
                        onMouseEnter={() => {
                            setOpenGf(false);
                        }}
                    >
                        <li className="">
                            Heroes
                            {pathname === "/heroes" ? (
                                <img
                                    src={heico}
                                    alt=""
                                    className="animate-spin-slow block absolute h-[16px] w-[16px] -bottom-2 left-[calc(50%_-_(16px/2))]"
                                />
                            ) : (
                                ""
                            )}
                        </li>
                    </NavLink>
                    <NavLink
                        to="/news"
                        cclassName={`
                        ${({ isActive }) => (isActive ? "active" : " ")} 
                        hover:active`}
                    >
                        <li className="">
                            Noticias{" "}
                            {pathname === "/news" ? (
                                <img
                                    src={heico}
                                    alt=""
                                    className="animate-spin-slow block absolute h-[16px] w-[16px] -bottom-2 left-[calc(50%_-_(16px/2))]"
                                />
                            ) : (
                                ""
                            )}
                        </li>
                    </NavLink>
                    <NavLink
                        to="/guide"
                        end
                        className={`
                        ${({ isActive }) => (isActive ? "active" : " ")} 
                        hover:active`}
                        onMouseEnter={() => {
                            setOpenRs(false);
                        }}
                    >
                        <li className="">
                            Guia{" "}
                            {pathname === "/guide" ? (
                                <img
                                    src={heico}
                                    alt=""
                                    className="animate-spin-slow block absolute h-[16px] w-[16px] -bottom-2 left-[calc(50%_-_(16px/2))]"
                                />
                            ) : (
                                ""
                            )}
                        </li>
                    </NavLink>

                    <div>
                        <li
                            className="hover:active cursor-pointer"
                            onMouseEnter={() => {
                                setOpenRs(true);
                            }}
                        >
                            Comunidad{" "}
                            <AiFillCaretDown className="inline-block" />
                            <ul
                                className={`${
                                    openRs ? "block" : "hidden"
                                } absolute top-[45px] left-0 bg-slate-900 text-xs px-4 w-full [&>*]:[&>*]:h-14 [&>*]:[&>*]:leading-[55px] [&>*]:[&>*]:border-b [&>*]:[&>*]:border-b-blue-400 transition-all ease-linear duration-500`}
                                onMouseLeave={() => {
                                    setOpenRs(false);
                                }}
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
                    </div>

                    <NavLink
                        to="/download"
                        className={`
                        ${({ isActive }) => (isActive ? "active" : " ")} 
                        hover:active`}
                        onMouseEnter={() => {
                            setOpenRs(false);
                        }}
                    >
                        <li className="">
                            Decargas{" "}
                            {pathname === "/download" ? (
                                <img
                                    src={heico}
                                    alt=""
                                    className="animate-spin-slow block absolute h-[16px] w-[16px] -bottom-2 left-[calc(50%_-_(16px/2))]"
                                />
                            ) : (
                                ""
                            )}
                        </li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
};
