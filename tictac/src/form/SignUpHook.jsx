import React from "react";
import { useForm } from "react-hook-form";

const SignUpHook = () => {
    const [register, handleSubmit] = useForm();
    const onSubmit = (values) => {};
    return (
        <form
            className="p-10 w-full max-w-[500px] mx-auto"
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="firstName">Firstname</label>
                <input
                    {...register("fristName")}
                    type="text"
                    id="firstName"
                    placeholder="Enter your first name"
                    className="p-4 rounded-md border border-gray-100"
                />
            </div>
            <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="lastName">Last name</label>
                <input
                    type="text"
                    id="lastName"
                    {...register("lastName")}
                    placeholder="Enter your Last name"
                    className="p-4 rounded-md border border-gray-100"
                />
            </div>
            <div>
                <button
                    type="submit"
                    className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};
export default SignUpHook;
