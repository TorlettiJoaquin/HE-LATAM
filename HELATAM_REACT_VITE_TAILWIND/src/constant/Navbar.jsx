import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";


import hemlogo2 from "../assets/images/hemlogo2.png";
import heico from "../../src/assets/images/he.ico";

import { AiFillCaretDown } from "react-icons/ai";

export const Navbar = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const [openGf, setOpenGf] = useState(false);
    const [openRs, setOpenRs] = useState(false);

    const [pathname, setPathname] = useState(window.location.pathname);
    const location = useLocation();

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            if (scrollPosition > 150) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    useEffect(() => {
        setPathname(location.pathname);
    }, [location]);

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className={`sticky top-0 z-20 h-24 rounded-b-3xl`}>
            <nav className={"hidden lg:flex flex-row gap-6 h-24 w-[80%] mx-auto items-center z-20"}

                onMouseLeave={() => {
                    setOpenGf(false);
                    setOpenRs(false);
                }}
            >
                <div className="relative w-[200px]">
                    <Link
                        to="/"
                        className="absolute left-4 -top-9 w-full"
                    >
                        <img
                            src={hemlogo2}
                            alt="HEM MAWEL LOGO"
                            className="w-[200px] h-[85px] object-cover"
                        />
                    </Link>
                </div>
                <nav className="lg:visible flex w-full pl-5">
                    <ul className="flex w-full items-center justify-around font-semibold [&>*]:transition-all [&>*]:duration-200 [&>*]:[&>*]:transition-all [&>*]:[&>*]:duration-200 [&>*]:mr-2 [&>*]:uppercase [&>*]:[&>*]:px-4 [&>*]:[&>*]:py-[7px] [&>*]:[&>*]: [&>*]:[&>*]:relative ">
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
                                    className={`${openGf ? "block" : "hidden"
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
                            className={`
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
                                    className={`${openRs ? "block" : "hidden"
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

                        <div>
                            <button onClick={() => setIsPlaying(!isPlaying)}>{!isPlaying ? 'PLAY' : 'STOP'}</button>
                        </div>

                        <NavLink
                            to="/download"
                            className={`
                        ${({ isActive }) => (isActive ? "active" : " ")} 
                        hover:active bg-[#000d40] border-2 rounded border-[rgba(255,255,255,0.5)]`}
                            onMouseEnter={() => {
                                setOpenRs(false);
                            }}
                        >
                            <li className="">
                                <p className="">JUEGA GRATIS</p>
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
            </nav>
            <div className={`${(scrolled ? "backdrop-filter backdrop-blur-2xl" : "bg-transparent")} hidden lg:block absolute top-0 w-full h-full inset-0 -z-10`}></div>
            <div className="absolute right-0 lg:hidden p-6">
                <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center bg-white rounded-full p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link
                            to="/"
                            className="absolute left-4 -top-9 w-full"
                        >
                            <img
                                src={hemlogo2}
                                alt="HEM MAWEL LOGO"
                                className="w-[200px] h-[85px] object-cover"
                            />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Features
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Marketplace
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Company
                                </a>
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </div>
    );
};
