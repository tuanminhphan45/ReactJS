import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const SignUpHook = () => {
    const schemaValidation = yup.object({
        // không truyền gì vào thì tin nhắn thông báo lỗi default
        firstName: yup.string().required().maxLength(10),
        lastName: yup.string().required().maxLength(10),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schemaValidation),
    });
    const onSubmit = (values) => {};
    console.log(errors);

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-10 w-full max-w-[500px] mx-auto"
            autoComplete="off"
        >
            <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="firstName">Firstname</label>
                <input
                    id="firstName"
                    {...register("firstName")}
                    // {...register("firstName", {
                    //     required: true,
                    //     maxLength: 10,
                    // })}
                    placeholder="Enter your first name"
                    className="p-4 rounded-md border border-gray-100"
                />

                {errors?.firstName && (
                    <div className="text-red-500 text-sm">
                        {errors.firstName.messeage}
                    </div>
                )}
                {/* {errors?.firstName?.type === "maxLength" && (
                    <div className="text-red-500 text-sm">Must be 10 Words</div>
                )} */}
            </div>
            <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="lastName">Last name</label>
                <input
                    id="lastName"
                    {...register("lastName")}
                    // {...register("lastName", {
                    //     required: true,
                    //     maxLength: 10,
                    // })}
                    placeholder="Enter your last name"
                    className="p-4 rounded-md border border-gray-100"
                />
            </div>
            <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="lastName">Email address</label>
                <input
                    id="email"
                    {...register("email")}
                    // {...register("email", {
                    //     required: true,
                    //     maxLength: 10,
                    // })}
                    placeholder="Enter your Email address"
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
