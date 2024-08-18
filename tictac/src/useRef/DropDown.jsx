import React, { useEffect, useRef, useState } from "react";

const DropDown = () => {
    const [showDropDown, setShowDropDown] = useState(false);
    const dropDownRef = useRef(null);

    useEffect(() => {
        function handleClickOutDropOut(e) {
            if (
                dropDownRef.current &&
                !dropDownRef.current.contains(e.target)
            ) {
                setShowDropDown(false);
            }
        }

        document.addEventListener("click", handleClickOutDropOut);
        return () => {
            document.removeEventListener("click", handleClickOutDropOut);
        };
    }, []);

    return (
        <>
            <div className="relative w-full max-w-[400px]" ref={dropDownRef}>
                <div
                    className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
                    onClick={() => {
                        setShowDropDown((prev) => !prev);
                    }}
                >
                    Selected
                </div>
                {showDropDown && (
                    <div className="border border-gray-200 rounded-lg absolute top-full left-0 w-full bg-white">
                        <div className="p-5 cursor-pointer">Javascript</div>
                        <div className="p-5 cursor-pointer">ReactJS</div>
                        <div className="p-5 cursor-pointer">VueJS</div>
                    </div>
                )}
            </div>
        </>
    );
};

export default DropDown;
