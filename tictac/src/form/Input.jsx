import React, { useState } from "react";
import useHandleChange from "../customHooks/hooks/useHandleChange";

const Input = () => {
    // const [values, setValues] = useState({
    //     fullname: "",
    //     email: "",
    // });

    // const handleChange = (event) => {
    //     const type = event.target.type;
    //     setValues({
    //         ...values,
    //         [event.target.name]:
    //             type === "checkbox" ? event.target.checked : event.target.value,
    //     });
    // };
    const { values, handleChange } = useHandleChange({
        fullname: "",
        email: "",
        hobby: false,
    });
    console.log(values);
    const [nameError, setNameError] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        if (values.fullname === "") {
            setNameError("Your fullname is empty");
            console.log("is worked");
        } else {
            setNameError("");
        }
    };
    return (
        <div className="flex flex-col gap-y-3">
            <form action="">
                <div className="">
                    <input
                        type="text"
                        name="fullname"
                        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
                        placeholder="Enter your name"
                        onChange={handleChange}
                    />
                    {nameError}
                </div>

                <input
                    type="email"
                    name="email"
                    className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
                    placeholder="Enter your email address"
                    onChange={handleChange}
                />
                <input type="checkbox" name="hobby" onChange={handleChange} />
                <button
                    className="p-5 bg-blue-600 text-white from-indigo-100"
                    onSubmit={handleSubmit}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Input;
