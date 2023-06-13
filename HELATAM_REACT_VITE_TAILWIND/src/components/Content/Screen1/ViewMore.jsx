import { Link } from "react-router-dom";

export const ViewMore = () => {
    return (
        <div className="w-[1240px] mx-auto my-0 text-right pt-[15px]">
            <Link
                to="/guide"
                className="transition-all duration-500 hover:scale-y-110 w-[244px] h-[55px] bg-view-bg bg-no-repeat bg-[left_top_-48px] inline-block"
            ></Link>
        </div>
    );
};
