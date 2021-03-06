import React, { useState } from "react";
import propTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        return setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setCategories((cats) => [inputValue, ...cats]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: propTypes.func.isRequired,
};
