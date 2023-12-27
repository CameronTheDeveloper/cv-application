import { useState } from "react";

function Form({ id, handleSubmit, children }) {
    return (
        <form id={id} onSubmit={handleSubmit}>
            {children}
            <button type='submit'>Submit</button>
        </form>
    );
}

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

function NameInputs({
    userInfo,
    handleChange }) {
    return (
        <>
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
        </>
    );
}

function ContactInputs({ userInfo, handleChange }) {
    return (
        <>
            <Input
                labelText={'Email'}
                inputType={'email'}
                inputValue={userInfo.email}
                inputName={'email'}
                handleChange={handleChange}
            ></Input>
            <Input
                labelText={'Phone Number'}
                inputType={'tel'}
                inputValue={userInfo.phoneNumber}
                inputName={'phoneNumber'}
                handleChange={handleChange}
                maxLength={10}
            ></Input>
        </>
    );
}

function SchoolInputs({ userInfo, handleChange }) {
    return (
        <>
            <Input
                labelText={'School Name'}
                inputType={'text'}
                inputValue={userInfo.schoolName}
                inputName={'schoolName'}
                handleChange={handleChange}
            ></Input>
            <Input
                labelText={'Degree'}
                inputType={'text'}
                inputValue={userInfo.degree}
                inputName={'degree'}
                handleChange={handleChange}
            ></Input>
        </>
    );
}

function EmploymentInputs({ userInfo, handleChange }) {
    return (
        <>
            <Input
                labelText={'Company Name'}
                inputType={'text'}
                inputValue={userInfo.companyName}
                inputName={'companyName'}
                handleChange={handleChange}
            ></Input>
            <Input
                labelText={'Position Title'}
                inputType={'text'}
                inputValue={userInfo.positionTitle}
                inputName={'positionTitle'}
                handleChange={handleChange}
            ></Input>
            <Input
                labelText={'Start Date'}
                inputType={'date'}
                inputValue={userInfo.startDate}
                inputName={'startDate'}
                handleChange={handleChange}
            ></Input>
        </>
    );
}

export {
    Form,
    NameInputs,
    ContactInputs,
    SchoolInputs,
    EmploymentInputs
};