import event1 from "../../assets/images/event1.webp";

export const Highlight = () => {
    return (
        <ul className="w-full">
            <li className="relative box-border">
                <a href="/" target="_blank">
                    <img
                        src={event1}
                        alt="Highlight Moment Event"
                        className="w-full block"
                    />
                    <div className="block absolute bottom-0 left-0 bg-black bg-opacity-70 h-[68px] w-full py-[10px] px-[10px] leading-[30px]">
                        <span className="block w-full h-[24px] leading-[24px] text-[#326cc5] uppercase whitespace-nowrap overflow-hidden text-ellipsis font-bold">
                            Momentos destacados del evento
                        </span>
                        <span className="block w-full h-[24px] leading-[24px] text-[#bbcace] ">
                            Nov 22, 2022
                        </span>
                    </div>
                </a>
            </li>
            <li className="relative px-[10px] py-[2%] box-border bg-[#0f2b55] border-b border-[#083cef]">
                <a href="/" target="_blank">
                    <div className="block">
                        <span className="block w-full h-[24px] leading-[24px] text-[#326cc5] uppercase whitespace-nowrap overflow-hidden text-ellipsis font-bold">
                            Heroes Evolved actualizacion - 7 de Junio, 2023
                        </span>
                        <span className="w-full h-[24px] leading-[24px] text-[#bbcace]">
                            Nov 22, 2022
                        </span>
                    </div>
                </a>
            </li>
            <li className="relative px-[10px] py-[2%] box-border bg-[#0f2b55] border-b border-[#083cef]">
                <a href="/" target="_blank">
                    <div className="block">
                        <span className="block w-full h-[24px] leading-[24px] text-[#326cc5] uppercase whitespace-nowrap overflow-hidden text-ellipsis font-bold">
                            Noticias sobre Baneo de cuentas - 7 de Junio
                        </span>
                        <span className="w-full h-[24px] leading-[24px] text-[#bbcace]">
                            Jun 07, 2023
                        </span>
                    </div>
                </a>
            </li>
            <li className="relative px-[10px] py-[2%] box-border bg-[#0f2b55] border-b border-[#083cef]">
                <a href="/" target="_blank">
                    <div className="block">
                        <span className="block w-full h-[24px] leading-[24px] text-[#326cc5] uppercase whitespace-nowrap overflow-hidden text-ellipsis font-bold">
                            Noticias sobre Baneo de cuentas - 31 de mayo
                        </span>
                        <span className="w-full h-[24px] leading-[24px] text-[#bbcace]">
                            May 31, 2023
                        </span>
                    </div>
                </a>
            </li>
        </ul>
    );
};
