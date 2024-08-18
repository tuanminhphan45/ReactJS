import React, { useEffect, useRef, useState } from "react";

const Clock = () => {
    const [count, setCount] = useState(0);
    const timeRef = useRef(null);
    const handleStart = () => {
        if (timeRef.current) return;
        timeRef.current = setInterval(() => {
            const newTime = (count) => count + 1;
            setCount(newTime);
        }, 1000);
    };

    const handleEnd = () => {
        clearInterval(timeRef.current);
        timeRef.current = null;
    };
// rời khỏi component phải clear cái function đi 
    useEffect(() => {
        return () => clearInterval(timeRef.current);
    }, []);
    return (
        <div>
            <h1>Clock {count}H</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleEnd}>Stop</button>
        </div>
    );
};

export default Clock;
