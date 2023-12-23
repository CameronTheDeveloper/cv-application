import { useState } from "react";

function Form({
    labelText,
    inputType,
    inputValue,
    inputId,
    handleChange,
    handleSubmit }) {

    return (
        <label>{labelText}:
            <input
                type={inputType}
                value={inputValue}
                id={inputId}
                name={inputId}
                onChange={handleChange}>
            </input>
        </label>
    );
}

function NameForm({ firstName, handleChange }) {
    return (
        <form className='input-form'>
            <Form
                labelText={'First Name'}
                inputType={'text'}
                inputValue={firstName}
                inputId={'firstNameInput'}
                handleChange={handleChange}>
            </Form>
        </form>
    );
}

export { NameForm };