import { useState } from "react";

function NameForm({ firstName, handleFirstNameChange }) {

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

export { NameForm };