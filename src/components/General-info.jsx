import { useState } from "react";

function General_top() {
    return (
        <h1>General Information</h1>
    );
}

function General_mid() {
    const [firstName, setFirstName] = useState('');

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    return (
        <form>
            <label>First Name:
                <input
                    type='text'
                    id='firstNameInput'
                    name='firstNameInput'
                    value={firstName}
                    onChange={handleFirstNameChange}>
                </input>
            </label>
            <button type='submit'>submit</button>
        </form>
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