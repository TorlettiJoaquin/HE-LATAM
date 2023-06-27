import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import { AiFillCaretRight } from "react-icons/ai";

const ContentCard = ({ imgSrc, imgAlt, title, url }) => {
    return (
        <li className="relative float-left w-[393px] h-[253px] my-[10px] mx-[14px] py-[3px] px-[3px] border-4 border-blue-800 rounded-lg overflow-hidden">
            <Link to={url} className="group">
                <img src={imgSrc} alt={imgAlt} className="w-full rounded group-hover:scale-110 transition-all duration-300 object-cover h-full" />
                <span className="absolute bottom-[3px] left-[3px] inline-block w-[379px] h-[40px] text-[#adceff] text-[22px] px-5 py-[3px] text uppercase bg-black bg-opacity-30 font-bold rounded-t-full">
                    <p className="group-hover:drop-shadow-glow hover:text-white transition-all duration-300">
                        {title}                        
                    </p>
                    <AiFillCaretRight className="absolute inline-block right-[5px] bottom-[9px] text-[#adceff] text-[22px]" />
                </span>
            </Link>
        </li>
    );
};

export default ContentCard;

ContentCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};
