import { useState } from "react";
import { NameForm } from "./Input-elements";

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

    return (

        <NameForm
            firstName={firstName}
            handleFirstNameChange={handleFirstNameChange}
        ></NameForm>
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