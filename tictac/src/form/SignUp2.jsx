import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// cách sử dụng Formik tạo form nhanh
/*
    Bước 1 bọc thẻ Formik toàn bộ form khởi tạo cái ô input initialvalue = {{ tên các trường input}}
        khởi tạo các validateSchema
    Bước 2 sử dụng thẻ Field để tạo các loại input 
    Bước 3 tạo validationSchema và ErrorMessage để validate dễ dàng
    Lưu ý chỉ cần khai báo các thẻ có chưa name = ""
    thư viện sẽ hỗ trợ toàn bộ các sự kiện như handleChange, validate, bắt sự kiện 
    
*/
const SignUp2 = () => {
    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(20, "must less than be 20 characters")
                    .required("required"),
                lastName: Yup.string()
                    .max(10, "must less than be 10 characters")
                    .required("required"),
            })}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            <form
                className="p-10 w-full max-w-[500px] mx-auto"
                autoComplete="off"
            >
                <div className="flex flex-col gap-2 mb-5">
                    <label htmlFor="firstName">Firstname</label>
                    <Field
                        name="firstName"
                        type="text"
                        placeholder="Enter your first name"
                        className="p-4 rounded-md border border-gray-100"
                    ></Field>
                    <div className="text-red-500 text-sm ">
                        <ErrorMessage name="firstName"></ErrorMessage>
                    </div>
                </div>
                <div className="flex flex-col gap-2 mb-5">
                    <label htmlFor="lastName">Last name</label>
                    <Field
                        name="lastName"
                        type="text"
                        placeholder="Enter your first name"
                        className="p-4 rounded-md border border-gray-100"
                    ></Field>
                    <div className="text-red-500 text-sm ">
                        <ErrorMessage name="firstName"></ErrorMessage>
                    </div>
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
        </Formik>
    );
};
export default SignUp2;
