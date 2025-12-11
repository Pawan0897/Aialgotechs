import {
    FiEdit,
    FiChevronDown,
    FiTrash,
    FiShare,
    FiPlusSquare,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";

const InnnerDropDown = () => {
    const [InnerOpen, InnersetOpen] = useState(false);

    return (
        <div className="Canvas_inner_dropdown flex items-center w-full">
            <motion.div
                animate={InnerOpen ? "open" : "closed"}
                className="relative canvas_drop"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        InnersetOpen((pv) => !pv);
                    }}
                    className="flex items-center gap-2 w-full canvas_dropdown_drop_inner_btn rounded-md text-indigo-50 transition-colors"
                >
                    <span className="font-medium text-md">Web developemnt</span>
                    <motion.span variants={iconVariants}>
                        <FiChevronDown />
                    </motion.span>
                </button>

                <motion.ul
                    initial={wrapperVariants.closed}
                    variants={wrapperVariants}
                    style={{ originY: "top", translateX: "-50%" }}
                    className="flex flex-col gap-2 p-0 rounded-lg bg-black shadow-xl absolute top-[120%] left-[50%] w-full z-[2] overflow-hidden"
                >
                    <Option setOpenInner={InnersetOpen} text="Edit" />
                    <Option setOpenInner={InnersetOpen} text="Duplicate" />
                    <Option setOpenInner={InnersetOpen} text="Share" />
                    <Option setOpenInner={InnersetOpen} text="Remove" />
                </motion.ul>
            </motion.div>
        </div>
    );
};

const Option = ({ text, setOpenInner }) => {
    return (
        <motion.li
            variants={itemVariants}
            onClick={() => setOpenInner(false)}
            className="flex justify-between gap-2 p-2 text-md font-medium whitespace-nowrap rounded-md hover:bg-slate-700 text-white hover:text-black transition-colors cursor-pointer"
        >
            <span>{text}</span>
        </motion.li>
    );
};

export default InnnerDropDown;

const wrapperVariants = {
    open: {
        scaleY: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
    closed: {
        scaleY: 0,
    },
};

const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
};

const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -15 },
};
