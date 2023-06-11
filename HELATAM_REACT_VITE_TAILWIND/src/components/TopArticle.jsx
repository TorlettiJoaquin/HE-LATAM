import helpcenter from "../assets/images/helpcenter.webp";
import { ViewMore } from "./ViewMore";
import note0607 from "../assets/images/note0607.webp";

export const TopArticle = () => {
    return (
        <div className="w-full my-0 mx-auto text-cyan-200 max-w-7xl">
            <ul className="flex justify-center w-full gap-4">
                <li className="border-2 w-1/4 h-[400px] border-cyan-700 bg-indigo-950 hover:-translate-y-3 transition-all duration-300">
                    <a href="" className="">
                        <div className="border-b-4 border-cyan-700">
                            <img src={helpcenter} alt="Help Center Guide" />
                        </div>
                        <div className="p-2 h-1/2 flex flex-col">
                            <span className="flex flex-col h-4/5 gap-1 pb-3">
                                <strong className="h-1/2 text-xl">
                                    Help Center Guide
                                </strong>
                                <i className="h-1/2 overflow-hidden">
                                    Help Center is where you could submit the
                                    bug you met and suggestions you have to
                                    Heroes Evolved
                                </i>
                            </span>
                            <span className="flex flex-col-reverse h-1/5 text-cyan-500 ">
                                May 29, 2023
                            </span>
                        </div>
                    </a>
                </li>
                <li className="border-2 w-1/4 h-[400px] border-cyan-700 bg-indigo-950 hover:-translate-y-3 transition-all duration-300">
                    <a href="" className="">
                        <div className="border-b-4 border-cyan-700">
                            <img src={note0607} alt="Nota 0607" />
                        </div>
                        <div className="p-2 h-1/2 flex flex-col">
                        <span className="flex flex-col h-4/5 gap-1 pb-3">
                                <strong className="h-1/2 text-xl">
                                    Heroes Evolved Update Note - June 7th
                                </strong>
                                <i className="h-1/2 overflow-hidden">
                                Servers will be down for 2 hours of maintenance beginning at 3:00 PM (UTC +8) on June 7th. The maintenance schedule is subject to change. You won&apos;t be able to login once the server is down and any matches in progress will be halted. Please do not start any matches right before the maintenance.
                                </i>
                            </span>
                            <span className="flex flex-col-reverse h-1/5 text-cyan-500 ">
                                Jun 07, 2023
                            </span>
                        </div>
                    </a>
                </li>
                <li className="border-2 w-1/4 h-[400px] border-cyan-700 bg-indigo-950 hover:-translate-y-3 transition-all duration-300">
                    <a href="" className="">
                        <div className="border-b-4 border-cyan-700">
                            <img src={note0607} alt="Nota 0607" />
                        </div>
                        <div className="p-2 h-1/2 flex flex-col">
                        <span className="flex flex-col h-4/5 gap-1 pb-3">
                                <strong className="h-1/2 text-xl">
                                    Heroes Evolved Update Note - June 7th
                                </strong>
                                <i className="h-1/2 overflow-hidden">
                                Servers will be down for 2 hours of maintenance beginning at 3:00 PM (UTC +8) on June 7th. The maintenance schedule is subject to change. You won&apos;t be able to login once the server is down and any matches in progress will be halted. Please do not start any matches right before the maintenance.
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
