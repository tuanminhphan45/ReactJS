import React, { useEffect, useRef, useState } from "react";

const AutoResize = () => {
    const textareaRef = useRef(null);
    const [text, setText] = useState("demo");
    const [textareaHeight, setTextareaHeight] = useState("auto");
    // const [parentHeight, setParentHeight] = useState("auto");

    const handleChange = (e) => {
        setTextareaHeight("auto");
        setText(e.target.value);
    };

    useEffect(() => {
        setTextareaHeight(`${textareaRef?.current?.scrollHeight}px`);
    }, [text]);

    return (
        <>
            <div className="p-5">
                <textarea
                    className="transition-all overflow-hidden w-full max-w-[400px] p-5 rounded-lg border border-gray-300 focus:border-blue-400 resize-none leading-normal outline-none"
                    placeholder="Please enter your content..."
                    value={text}
                    ref={textareaRef}
                    style={{
                        height: textareaHeight,
                    }}
                    onChange={handleChange}
                ></textarea>
            </div>
        </>
    );
};

export default AutoResize;
