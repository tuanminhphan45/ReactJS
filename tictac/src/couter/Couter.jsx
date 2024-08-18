import React, { useEffect, useState } from "react";

const Couter = () => {
    const [value, setValue] = useState(0);
    // const handleClick = () => {
    //     setValue((value) => value + 1);
    // };
    useEffect(() => {
        console.log(`count: ${value}`);
    }, []);

    return (
        <>
            <div className="p-5 flex gap-x-4 items-center">
                <span className=" text-2xl font-bold">{value}</span>
                <button
                    onClick={() => setValue(value + 1)}
                    className=" inline-block p-3 bg-green-400 text-white"
                >
                    Increment
                </button>
            </div>
        </>
    );
};

export default Couter;
