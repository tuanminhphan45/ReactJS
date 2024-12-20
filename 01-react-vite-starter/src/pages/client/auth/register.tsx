import React, { useState } from "react";
import type { FormProps } from "antd";
import { Button, Divider, Form, Input } from "antd";
import "./register.scss";
import { Link } from "react-router-dom";
type FieldType = {
    username?: string;
    email?: string;
    password?: string;
    phone?: number;
};

const RegisterPage = () => {
    const [isSubmit, setIsSubmit] = useState(false);
    const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
        console.log(values);
    };

    return (
        <>
            <div className="register-page">
                <main className="main">
                    <div className="container">
                        <section className="wrapper">
                            <div className="heading">
                                <h2 className="text text-large">
                                    Đăng Ký Tài Khoản
                                </h2>
                                <Divider />
                            </div>
                            <Form
                                name="form-register"
                                onFinish={onFinish}
                                autoComplete="off"
                            >
                                <Form.Item<FieldType>
                                    labelCol={{ span: 24 }} //whole column
                                    label="Họ tên"
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Họ tên không được để trống!",
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item<FieldType>
                                    labelCol={{ span: 24 }} //whole column
                                    label="Email"
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Email không được để trống!",
                                        },
                                        {
                                            type: "email",
                                            message:
                                                "Email không đúng định dạng!",
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item<FieldType>
                                    labelCol={{ span: 24 }} //whole column
                                    label="Mật khẩu"
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Mật khẩu không được để trống!",
                                        },
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>
                                <Form.Item<FieldType>
                                    labelCol={{ span: 24 }} //whole column
                                    label="Số điện thoại"
                                    name="phone"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Số điện thoại không được để trống!",
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        loading={isSubmit}
                                    >
                                        Đăng ký
                                    </Button>
                                </Form.Item>
                                <Divider>Or</Divider>
                                <p
                                    className="text text-normal"
                                    style={{ textAlign: "center" }}
                                >
                                    Đã có tài khoản ?
                                    <span>
                                        <Link to="/login"> Đăng Nhập </Link>
                                    </span>
                                </p>
                            </Form>
                        </section>
                    </div>
                </main>
            </div>
        </>
    );
};
export default RegisterPage;
