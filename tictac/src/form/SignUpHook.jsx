/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
// using react-hook-form

const schemaValidation = Yup.object({
    firstName: Yup.string()
        .required("Please enter your first name")
        .max(10, "Must be 10 characters or less"),
});

const SignUpHook = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(schemaValidation),
    });

    // errors = formState.errors; {}

    const onSubmit = (values) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 500);
        });
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-10 w-full max-w-[500px] mx-auto"
            autoComplete="off"
        >
            <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="firstName">First name</label>
                <input
                    type="text"
                    id="firstName"
                    placeholder="Enter your first name"
                    className="p-4 rounded-md border border-gray-100"
                    {...register("firstName")}
                    // {...register("firstName", {
                    //   required: true,
                    //   maxLength: 10,
                    // })}
                />
                {errors?.firstName && (
                    <div className="text-red-500 text-sm">
                        {errors.firstName?.message}
                    </div>
                )}
                {/* {errors?.firstName?.type === "maxLength" && (
          <div className="text-red-500 text-sm">
            Must be 10 characters or less
          </div>
        )} */}
            </div>
            <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="lastName">Last name</label>
                <input
                    type="text"
                    id="lastName"
                    placeholder="Enter your first name"
                    className="p-4 rounded-md border border-gray-100"
                    {...register("lastName")}
                />
            </div>
            <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="email">Email address</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    className="p-4 rounded-md border border-gray-100"
                    {...register("email")}
                />
            </div>
            <div>
                <button
                    type="submit"
                    className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
                >
                    {isSubmitting ? (
                        <div className="mx-auto w-5 h-5 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                        "Submit"
                    )}
                </button>
            </div>
        </form>
    );
};

export default SignUpHook;
