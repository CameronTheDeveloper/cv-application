import { useState } from "react";
import { Form } from "./Input-elements";
import { Info } from "./Info-elements";

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
                    <Form
                        labelText={'First Name'}
                        inputType={'text'}
                        inputValue={firstName}
                        inputId={'firstNameInput'}
                        handleChange={handleFirstNameChange}
                        handleSubmit={handleSubmit}>
                    </Form>
                    : <Info
                        data={firstName}
                        handleEdit={handleEdit}
                        infoClass={'name'}>
                    </Info>
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