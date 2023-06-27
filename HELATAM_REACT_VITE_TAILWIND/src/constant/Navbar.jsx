// importar una img de assets images "newlogo.webp" en typescript
import { Link } from "react-router-dom";
import { useState } from "react";

import hemlogo2 from "../assets/images/hemlogo2.png";
import heico from "../../src/assets/images/he.ico";

import { AiFillCaretDown } from "react-icons/ai";

export const Navbar = () => {
    const [openGf, setOpenGf] = useState(false);
    const [openRs, setOpenRs] = useState(false);

    return (
        <div className="sticky top-0 flex flex-row gap-6 items-center bg-gradient-to-b from-blue-900 to-blue-950 shadow-[0_0_10px_0_rgba(0,0,0,.3)] z-20">
            <div className="relative basis-1/4">
                <Link
                    to="/"
                    className="block relative left-0 top-0 p-[5px_0_0_24px]"
                >
                    <img
                        src={hemlogo2}
                        alt="HEM MAWEL LOGO"
                        className="w-[200px] max-w-auto -mt-4 -mb-14"
                    />
                </Link>
            </div>
            <nav className="lg:visible w-full basis-3/4 flex flex-row-reverse">
                <ul className="flex items-center font-semibold [&>*]:transition-all [&>*]:duration-200 [&>*]:[&>*]:transition-all [&>*]:[&>*]:duration-200 [&>*]:mr-2 [&>*]:uppercase [&>*]:[&>*]:px-4 [&>*]:[&>*]:py-[7px] [&>*]:[&>*]: [&>*]:[&>*]:relative ">
                    <Link to="/" className="">
                        <li className="active hover:active">
                            Inicio
                            <img
                                src={heico}
                                alt=""
                                className="block absolute h-[16px] w-[16px] -bottom-2 left-[calc(50%_-_(16px/2))]"
                            />
                        </li>
                    </Link>
                    <Link
                        to="/guide/gameinfo"
                        className="hover:active"
                        onMouseEnter={() => {
                            setOpenGf(true);
                        }}
                        onMouseLeave={() => {
                            setOpenGf(false);
                        }}
                    >
                        <li>
                            Informacion{" "}
                            <AiFillCaretDown className="inline-block" />
                            <ul
                                className={`${
                                    openGf ? "block" : "hidden"
                                } absolute top-20 bg-slate-900 text-xs px-4 w-full [&>*]:[&>*]:h-14 [&>*]:[&>*]:leading-[55px] [&>*]:[&>*]:border-b [&>*]:[&>*]:border-b-blue-400 transition-all ease-linear duration-500`}
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
                    </Link>
                    <Link to="/heroes" className="hover:active">
                        <li className="">Heroes</li>
                    </Link>
                    <Link to="/news" className="hover:active">
                        <li className="">Noticias</li>
                    </Link>
                    <Link to="/guide" className="hover:active">
                        <li className="">Guia</li>
                    </Link>

                    <div>
                        <li
                            className="hover:active"
                            onMouseEnter={() => {
                                setOpenRs(true);
                            }}
                            onMouseLeave={() => {
                                setOpenRs(false);
                            }}
                        >
                            Comunidad{" "}
                            <AiFillCaretDown className="inline-block" />
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
                    </div>

                    <Link to="/download" className="hover:active">
                        <li className="">Decargas</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
};
