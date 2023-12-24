import { useState } from "react";

function Input({
    labelText,
    inputType,
    inputValue,
    inputName,
    handleChange }) {

    return (
        <label>{labelText}:
            <input
                type={inputType}
                value={inputValue}
                id={inputName}
                name={inputName}
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
                inputName={'firstName'}
                handleChange={handleChange}>
            </Input>
        </form>
    );
}

export { NameForm };