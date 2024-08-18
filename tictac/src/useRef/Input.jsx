import React, { useEffect, useRef } from "react";

const Input = () => {
    const divRef = useRef();
    const inputRef = useRef();

    useEffect(() => {
        // tác dụng khi vừa load vào trang đã focus vào thẻ input
        inputRef.current.focus();
    }, []);

    // khi ta để atribute ref={divRef} thì  divRef.current lấy ra được DOM <div className='input-div '> </div>
    // hiểu đơn giản ref dùng để mount(kết nối trỏ về cái gì đó)
    // trường hợp dưới biến divRef đã được kết nối với .input-div
    // những thẻ mà được gắn ref sẽ không re-render khi có thay đổi phải reload trang mới thay đổi
    // khác với useState

    return (
        <div className="input-div " ref={divRef}>
            <input
                ref={inputRef}
                type="text"
                placeholder="Auto forcus input"
                className="forcus border-blue-300"
            />
        </div>
    );
};

export default Input;
