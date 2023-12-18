import { useState } from "react";
import { NameForm } from "./Input-elements";
import { NameInfo } from "./Info-elements";

function General_top() {
    return (
        <h1>General Information</h1>
    );
}

function General_mid() {
    const [firstName, setFirstName] = useState('');
    // const [inputMode, setInputMode] = useState(true);

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleSubmit() {
        alert(firstName);
    }

    return (
        <div className='general-info container'>
            <NameForm
                firstName={firstName}
                handleFirstNameChange={handleFirstNameChange}
                handleSubmit={handleSubmit}
            ></NameForm>
            <NameInfo firstName={firstName}></NameInfo>
        </div>

    );
}

function GeneralInfo() {
    return (
        <>
            <General_top></General_top>
            <General_mid></General_mid>
        </>
    );
}

export { GeneralInfo };