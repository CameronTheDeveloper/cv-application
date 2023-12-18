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
    const [inputMode, setInputMode] = useState(true);

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setInputMode(false);
    }

    function handleEdit() {
        setInputMode(true);
    }

    return (
        <div className='general-info container'>
            {
                inputMode ?
                    <NameForm
                        firstName={firstName}
                        handleFirstNameChange={handleFirstNameChange}
                        handleSubmit={handleSubmit}>
                    </NameForm>
                    : <NameInfo
                        firstName={firstName}
                        handleEdit={handleEdit}>
                    </NameInfo>
            }
        </div>

    );
}

function GeneralInfo() {
    return (
        <div id='general-info'>
            <General_top></General_top>
            <General_mid></General_mid>
        </div>
    );
}

export { GeneralInfo };