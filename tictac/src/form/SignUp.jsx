import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup"
// import { lodash } from "lodash";

// const validate = (values) => {
//     const errors = {};

//     if (!values.firstName) {
//         errors.firstName = "yeu cau";
//     } else if (values.firstName.length > 20) {
//         errors.firstName = "must be 20 characters";
//     }

//     if (!values.lastName) {
//         errors.lastName = "yêu cầu";
//     } else if (values.lastName.length > 20) {
//         errors.lastName = "must be 20 characters";
//     }

//     return errors;
// };

const SignUp = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(20,"must less than be 20 characters").required("required"),
            lastName: Yup.string().max(10,"must less than be 10 characters").required("required")
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });
    console.log("SignUpForm ~ formik", formik);
    return (
        <form
            onSubmit={formik.handleSubmit}
            className="p-10 w-full max-w-[500px] mx-auto"
            autoComplete="off"
        >
            <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="firstName">Firstname</label>
                <input
                    type="text"
                    id="firstName"
                    placeholder="Enter your first name"
                    className="p-4 rounded-md border border-gray-100"
                    {...formik.getFieldProps("firstName")}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="text-sm text-red-500">
                        {formik.errors.firstName}
                    </div>
                ) : null}
            </div>
            <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="lastName">Last name</label>
                <input
                    type="text"
                    id="lastName"
                    placeholder="Enter your first name"
                    className="p-4 rounded-md border border-gray-100"
                    {...formik.getFieldProps("lastName")}
                    // formik tự động điền những cái sau:
                        // name="lastName"
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="text-sm text-red-500">
                        {formik.errors.lastName}
                    </div>
                ) : null}
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
export default SignUp;
