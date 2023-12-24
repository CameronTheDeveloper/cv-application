import { useState } from "react";

function Input({
    labelText,
    inputType,
    inputValue,
    inputName,
    handleChange,
    maxLength = 50,
    minLength = 1 }) {

    return (
        <label>{labelText}:
            <input
                type={inputType}
                value={inputValue}
                id={`${inputName}-input`}
                name={inputName}
                onChange={handleChange}
                maxLength={maxLength}
                minLength={minLength}>
            </input>
        </label>
    );
}

function NameForm({
    userInfo,
    formID,
    handleChange,
    handleSubmit }) {
    return (
        <form id={formID} onSubmit={handleSubmit}>
            <Input
                labelText={'First Name'}
                inputType={'text'}
                inputValue={userInfo.firstName}
                inputName={'firstName'}
                handleChange={handleChange}>
            </Input>
            <Input
                labelText={'Middle Initial'}
                inputType={'text'}
                inputValue={userInfo.middleInit}
                inputName={'middleInit'}
                handleChange={handleChange}
                maxLength={1}>
            </Input>
            <Input
                labelText={'Last Name'}
                inputType={'text'}
                inputValue={userInfo.lastName}
                inputName={'lastName'}
                handleChange={handleChange}>
            </Input>
            <button type='submit'>Submit</button>
        </form>
    );
}

export { NameForm };