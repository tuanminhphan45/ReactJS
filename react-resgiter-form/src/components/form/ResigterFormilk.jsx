// eslint-disable-next-line no-unused-vars
import React from "react";
import { useForm } from "react-hook-form";
import InputHook from "../input/InputHook";
import RadioHooks from "../radio/RadioHooks";
import CheckboxHook from "../checkbox/CheckHook";

const ResigterFormilk = () => {
    const {
        handleSubmit,
        formState: { errors },
        control,
    } = useForm();
    const onSubmitHandlder = (values) => {
        console.log(values);
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmitHandlder)}
            className="max-w-[400px] mx-auto my-10"
        >
            <div className="flex flex-col gap-3 mb-5">
                <label htmlFor="userName" className="cursor-pointer">
                    User Name
                </label>
                <InputHook
                    name="userName"
                    id="userName"
                    placeholder="Please enter your UserName"
                    control={control}
                    type="text"
                ></InputHook>
                <p className="text-red-500 text-sm">
                    Please enter your username
                </p>
            </div>
            <div className="flex flex-col gap-3 mb-5">
                <label htmlFor="email" className="cursor-pointer">
                    Email Address
                </label>
                <InputHook
                    name="email"
                    id="email"
                    placeholder="Please enter your email address"
                    control={control}
                    type="email"
                ></InputHook>
            </div>
            <div className="flex flex-col gap-3 mb-5">
                <label htmlFor="password" className="cursor-pointer">
                    Password
                </label>
                <InputHook
                    name="password"
                    id="password"
                    placeholder="Please enter your password"
                    control={control}
                    type="password"
                ></InputHook>
            </div>
            <div className="flex flex-col gap-3 mb-5">
                <label className="cursor-pointer">Gender</label>
                <div className="flex item-center gap-5">
                    <div className="flex items-center gap-x-3">
                        <RadioHooks
                            control={control}
                            name="gender"
                            value="male"
                        ></RadioHooks>
                        <p>Male</p>
                    </div>
                    <div className="flex gap-x-3 items-center">
                        <RadioHooks
                            control={control}
                            name="gender"
                            value="female"
                        ></RadioHooks>
                        <p>Female</p>
                    </div>
                </div>
            </div>
            <div className="">
                <CheckboxHook
                    control={control}
                    text="Do u agree"
                    name="term"
                    value="agree"
                ></CheckboxHook>
            </div>
            <button className="w-full p-5 bg-blue-500 text-white  rounded-lg mt-5 font-semibold ">
                Submit
            </button>
        </form>
    );
};

export default ResigterFormilk;
