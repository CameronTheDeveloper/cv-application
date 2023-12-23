import { useState } from "react";

function Input({
    labelText,
    inputType,
    inputValue,
    inputId,
    handleChange }) {

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

function NameForm({ userInfo, handleChange }) {
    return (
        <form className='input-form'>
            <Input
                labelText={'First Name'}
                inputType={'text'}
                inputValue={userInfo.firstName}
                inputId={'firstNameInput'}
                handleChange={handleChange}>
            </Input>
        </form>
    );
}

export { NameForm };