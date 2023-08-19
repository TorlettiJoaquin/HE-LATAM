import { ViewMore } from "../../Header/ViewMore";

export const TopArticle = () => {
    return (
        <div className="lg:absolute w-full lg:w-auto items-center bottom-0 right-0 left-0 z-10 p-6 lg:p-0">
            <ViewMore />
            <ul className="relative flex flex-col lg:flex-row gap-5 lg:gap-0 justify-center lg:justify-evenly items-center w-full py-5 lg:py-0">
                <li className="w-[300px] lg:min-w-[320px] lg:max-w-[400px] h-[200px] lg:h-[220px] justify-center relative flex flex-wrap hover:-translate-y-3 hover:scale-105 transition-all duration-300">
                    <a href="" className="group/img">
                        <div className="w-full lg:min-w-[320px] lg:max-w-[400px] h-full overflow-hidden relative bg-helpcenter bg-top bg-contain bg-no-repeat bg-[#333] drop-shadow-bxshdw text-left border-b-2 border-gray-400 transition-all ease-in-out duration-500 group-hover/img:bg-[rgba(0,0,0,.7) after:bg-[rgba(0,0,0,.7)]">
                            <div className="left-0 bottom-0 right-0 w-full h-full absolute pointer-events-none">
                                <div className="bg-[linear-gradient(rgba(19,23,28,0)_60%,_rgba(19,23,28,0.733)_70%,_rgb(19,23,28)_90%)] absolute w-full h-full">
                                </div>
                            </div>
                            <div className="flex flex-col items-start justify-end h-full m-[0px_10px_8px_20px]">
                                <span className="mb-2 drop-shadow-bxshdw font-medium">
                                    May 29, 2023
                                </span>
                                <span className="flex flex-col gap-1 pb-3 drop-shadow-bxshdw">
                                    <strong className="h-1/2 text-2xl font-bold">
                                        Guia del Centro de Ayuda
                                    </strong>
                                </span>
                            </div>
                        </div>
                    </a>
                </li>
                <li className="w-[300px] lg:min-w-[320px] lg:max-w-[400px] h-[200px] lg:h-[220px] justify-center relative flex flex-wrap hover:-translate-y-3 hover:scale-105 transition-all duration-300">
                    <a href="" className="group/img">
                        <div className="w-full lg:min-w-[320px] lg:max-w-[400px] h-full overflow-hidden relative bg-updateNote bg-top bg-contain bg-no-repeat bg-[#333] drop-shadow-bxshdw text-left border-b-2 border-gray-400 transition-all ease-in-out duration-500 group-hover/img:bg-[rgba(0,0,0,.7) after:bg-[rgba(0,0,0,.7)]">
                            <div className="left-0 bottom-0 right-0 w-full h-full absolute pointer-events-none">
                                <div className="bg-[linear-gradient(rgba(19,23,28,0)_60%,_rgba(19,23,28,0.733)_70%,_rgb(19,23,28)_90%)] absolute w-full h-full">
                                </div>
                            </div>
                            <div className="flex flex-col items-start justify-end h-full m-[0px_10px_8px_20px]">
                                <span className="mb-2 drop-shadow-bxshdw font-medium">
                                    Jun 07, 2023
                                </span>
                                <span className="flex flex-col gap-1 pb-3 drop-shadow-bxshdw">
                                    <strong className="h-1/2 text-2xl font-bold">
                                        Update Note - June 7th
                                    </strong>
                                </span>
                            </div>
                        </div>
                    </a>
                </li>
                <li className="w-[300px] lg:min-w-[320px] lg:max-w-[400px] h-[200px] lg:h-[220px] justify-center relative flex flex-wrap hover:-translate-y-3 hover:scale-105 transition-all duration-300">
                    <a href="" className="group/img">
                        <div className="w-full lg:min-w-[320px] lg:max-w-[400px] h-full overflow-hidden relative bg-banlist bg-top bg-contain bg-no-repeat bg-[#333] drop-shadow-bxshdw text-left border-b-2 border-gray-400 transition-all ease-in-out duration-500 group-hover/img:bg-[rgba(0,0,0,.7) after:bg-[rgba(0,0,0,.7)]">
                            <div className="left-0 bottom-0 right-0 w-full h-full absolute pointer-events-none">
                                <div className="bg-[linear-gradient(rgba(19,23,28,0)_60%,_rgba(19,23,28,0.733)_70%,_rgb(19,23,28)_90%)] absolute w-full h-full">
                                </div>
                            </div>
                            <div className="flex flex-col items-start justify-end h-full m-[0px_10px_8px_20px]">
                                <span className="mb-2 drop-shadow-bxshdw font-medium">
                                    Jun 07, 2023
                                </span>
                                <span className="flex flex-col gap-1 pb-3 drop-shadow-bxshdw">
                                    <strong className="h-1/2 text-2xl font-bold">
                                        Regarding Account Punishment
                                    </strong>
                                </span>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    );
};
