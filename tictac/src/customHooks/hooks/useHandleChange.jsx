// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const useHandleChange = (initialValues) => {
    const [values, setValues] = useState(initialValues);
    const handleChange = (event) => {
        const type = event.target.type;
        setValues({
            ...values,
            [event.target.name]:
                type === "checkbox" ? event.target.checked : event.target.value,
        });
    };
    return {
        values,
        handleChange,
    };
};

export default useHandleChange;
 