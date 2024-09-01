/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import { first } from "lodash";
// using react-hook-form

const schemaValidation = Yup.object({
    firstName: Yup.string()
        .required("Please enter your first name")
        .max(10, "Must be 10 characters or less"),
    age: Yup.number(),
});

const SignUpHook = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        resetField,
        // resetField là reset 1 trường nào đó thôi
        setFocus,
        setValue,
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
    useEffect(() => {
        setFocus("firstName");
        // tự động forcus vào ô input firtName khi load trang
    }, [setFocus]);
    const handleDemo = () => {
        setValue("firstName", "Minh");
        setValue("lastName", "Phan");
        setValue("email", "tuanminhphan45@gmail.com");
    };
    const onSubmit = async (values) => {
        // áp dụng để check đủ điều kiện để send data to backend chưa
        if (isValid) {
            console.log("send data to backend");
            reset({
                firstName: "",
                lastName: "",
            });
            resetField("age");
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
                <div className="flex flex-row gap-2 mb-5 items-center">
                    <label htmlFor="Age">Input Age</label>
                    <input
                        type="checkbox"
                        id="Age"
                        className="w-3 h-3"
                        {...register("showAge")}
                    />
                </div>

                {/* based on yes selection to display Age Input*/}
                {watchShowAge && (
                    <input
                        type="number"
                        className="p-4 rounded-md border border-gray-100"
                        {...register("age")}
                    />
                )}
            </div>

            <div className="flex flex-col gap-3">
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
                <button
                    className="w-full p-4 bg-green-600 text-white font-semibold rounded-lg"
                    onClick={handleDemo}
                >
                    Demo
                </button>
            </div>
        </form>
    );
};

export default SignUpHook;
