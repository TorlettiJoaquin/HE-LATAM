import { ViewMore } from "./ViewMore";
import helpcenter from "../../assets/images/helpcenter.webp";
import note0607 from "../../assets/images/note0607.webp";
import banlist from "../../assets/images/banlist.webp";

export const TopArticle = () => {
    return (
        <div className="w-full my-0 mx-auto text-cyan-200 max-w-7xl">
            <ul className="flex justify-center w-full gap-4">
                <li className="border-2 w-1/4 h-[400px] border-cyan-700 bg-indigo-950 hover:-translate-y-3 transition-all duration-300">
                    <a href="" className="group/img">
                        <div className="border-b-4 border-cyan-700 transition-all duration-500 opacity-80 group-hover/img:opacity-100">
                            <img src={helpcenter} alt="Help Center Guide" />
                        </div>
                        <div className="p-2 h-1/2 flex flex-col">
                            <span className="flex flex-col h-4/5 gap-1 pb-3">
                                <strong className="h-1/2 text-xl">
                                    Guia del Centro de Ayuda
                                </strong>
                                <i className="h-1/2 overflow-hidden">
                                    El Centro de ayuda es donde puedes reportar
                                    errores y enviar sugerencias a Heroes
                                    Evolved. Un GM del centro de ayuda te
                                    asistirá lo antes posible.
                                </i>
                            </span>
                            <span className="flex flex-col-reverse h-1/5 text-cyan-500 ">
                                May 29, 2023
                            </span>
                        </div>
                    </a>
                </li>
                <li className="border-2 w-1/4 h-[400px] border-cyan-700 bg-indigo-950 hover:-translate-y-3 transition-all duration-300">
                    <a href="">
                        <div className="border-b-4 border-cyan-700">
                            <img src={note0607} alt="Nota 0607" />
                        </div>
                        <div className="p-2 h-1/2 flex flex-col">
                            <span className="flex flex-col h-4/5 gap-1 pb-3">
                                <strong className="h-1/2 text-xl">
                                    Heroes Evolved Update Note - June 7th
                                </strong>
                                <i className="h-1/2 overflow-hidden">
                                    Servers will be down for 2 hours of
                                    maintenance beginning at 3:00 PM (UTC +8) on
                                    June 7th. The maintenance schedule is
                                    subject to change. You won&apos;t be able to
                                    login once the server is down and any
                                    matches in progress will be halted. Please
                                    do not start any matches right before the
                                    maintenance.
                                </i>
                            </span>
                            <span className="flex flex-col-reverse h-1/5 text-cyan-500 ">
                                Jun 07, 2023
                            </span>
                        </div>
                    </a>
                </li>
                <li className="border-2 w-1/4 h-[400px] border-cyan-700 bg-indigo-950 hover:-translate-y-3 transition-all duration-300">
                    <a href="">
                        <div className="border-b-4 border-cyan-700">
                            <img src={banlist} alt="ban list" />
                        </div>
                        <div className="p-2 h-1/2 flex flex-col">
                            <span className="flex flex-col h-4/5 gap-1 pb-3">
                                <strong className="h-1/2 text-xl">
                                    Notice Regarding Account Punishment on June
                                    7th 2023
                                </strong>
                                <i className="h-1/2 overflow-hidden">
                                    To maintain a fair and pleasant gaming
                                    environment, all players need to comply with
                                    the policies of Heroes Evolved.
                                </i>
                            </span>
                            <span className="flex flex-col-reverse h-1/5 text-cyan-500 ">
                                Jun 07, 2023
                            </span>
                        </div>
                    </a>
                </li>
            </ul>
            <ViewMore />
        </div>
    );
};
