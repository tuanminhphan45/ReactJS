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
        watch,
        formState: { errors, isSubmitting, isValid, isDirty, dirtyFields },
        // is Dirty là khi mình chạm vào trường đó sẽ biết
        // dirtyFields là trả về các trường mình
    } = useForm({
        resolver: yupResolver(schemaValidation),
        // lưu ý khi isValid cần add thêm mode: "onChange" mới hoạt động đúng
        mode: "onChange",
    });

    // errors = formState.errors; {}
    console.log("isValid", isValid);
    const watchShowAge = watch("showAge", false);

    const onSubmit = async (values) => {
        // áp dụng để check đủ điều kiện để send data to backend chưa
        if (isValid) {
            console.log("send data to backend");
        }
        // const response = await axios.get(
        //     "https://hn.algolia.com/api/v1/search?query=react"
        // );
        // return response.data;
        // lưu ý isSubmitting có call api hoặc backend thì mới có delay
        // return new Promise((resolve) => {
        //     setTimeout(() => {
        //         resolve();
        //     }, 500);
        // });
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
            <div className="flex flex-col gap-2 mb-5">
                <input type="checkbox" {...register("showAge")} />

                {/* based on yes selection to display Age Input*/}
                {watchShowAge && (
                    <input
                        type="number"
                        className="p-4 rounded-md border border-gray-100"
                        {...register("age", { min: 50 })}
                    />
                )}
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
