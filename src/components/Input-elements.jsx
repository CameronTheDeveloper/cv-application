import { useState } from "react";

function Form({
    labelText,
    inputType,
    inputValue,
    inputId,
    handleChange,
    handleSubmit }) {

    return (
        <form>
            <label>{labelText}:
                <input
                    type={inputType}
                    value={inputValue}
                    id={inputId}
                    name={inputId}
                    onChange={handleChange}>
                </input>
            </label>
            <button type='submit' onClick={handleSubmit}>submit</button>
        </form>
    );
}

export { Form };