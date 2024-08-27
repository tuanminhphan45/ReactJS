import React from "react";
import { Formik, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

const SignUpFinal = () => {
    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                intro: "",
                job: [],
                terms: false,
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(20, "must less than be 20 characters")
                    .required("required"),
                lastName: Yup.string()
                    .max(10, "must less than be 10 characters")
                    .required("required"),
                email: Yup.string().email().required("required"),
                terms: Yup.boolean(),
            })}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            <form
                className="p-10 w-full max-w-[500px] mx-auto"
                autoComplete="off"
            >
                <MyInput
                    label="First name"
                    name="firtName"
                    placeholder="Enter your First Name"
                ></MyInput>
                <MyInput
                    label="Last name"
                    name="lastName"
                    placeholder="Enter your Last Name"
                ></MyInput>
                {/* <div className="flex flex-col gap-2 mb-5">
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
                </div> */}
                {/* <div className="flex flex-col gap-2 mb-5">
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
                </div> */}
                <div className="flex flex-col gap-2 mb-5">
                    <label htmlFor="email">Email Adress</label>
                    <Field
                        name="email"
                        type="email"
                        placeholder="Enter your email adress"
                        className="p-4 rounded-md border border-gray-100"
                    ></Field>
                    <div className="text-red-500 text-sm ">
                        <ErrorMessage name="email"></ErrorMessage>
                    </div>
                </div>
                <div className="flex flex-col gap-2 mb-5">
                    <label htmlFor="Intro">Introduce yourself </label>
                    <Field
                        name="Intro"
                        placeholder="Enter your Introduce"
                        className="p-4 rounded-md border border-gray-100 h-[150px] resize-none"
                        as="textarea"
                    ></Field>
                    <div className="text-red-500 text-sm ">
                        <ErrorMessage name="Intro"></ErrorMessage>
                    </div>
                </div>
                <div className="flex flex-col gap-2 mb-5">
                    <label htmlFor="job">Job</label>
                    <Field
                        name="job"
                        className="p-4 rounded-md border border-gray-100"
                        as="select"
                    >
                        <option value="Frontend">Frontend Developter</option>
                        <option value="Backend">Backend Developter</option>
                        <option value="FullStack">FullStack Developter</option>
                    </Field>
                    <div className="text-red-500 text-sm ">
                        <ErrorMessage name="job"></ErrorMessage>
                    </div>
                </div>
                <div className="flex items-center gap-2 mb-5">
                    <Field
                        name="term"
                        type="checkbox"
                        className="p-4 rounded-md border border-gray-100"
                    ></Field>
                    <p>I accpect the term and conditions</p>
                    <div className="text-red-500 text-sm ">
                        <ErrorMessage name="term"></ErrorMessage>
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
// useField
// destructuring
// restparameter
// useField hỗ trợ toàn diễn từ các function onChange onBLur onTouch và các value tự validate 
// yêu cầu vẫn khởi tạo giá trị khởi tạo validateSechma

const MyInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    console.log(field);
    return (
        <div className="flex flex-col gap-2 mb-5">
            <label htmlFor={props.id || props.name}>{label}</label>
            <input type="text" {...props} {...field} />
            {meta.touched && meta.error ? (
                <div className="text-sm text-red-600">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default SignUpFinal;
