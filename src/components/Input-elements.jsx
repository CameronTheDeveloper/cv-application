import { useState } from "react";

function Form({
    value,
    handleChange,
    handleSubmit }) {

    return (
        <form>
            <label>First Name:
                <input
                    type='text'
                    id='firstNameInput'
                    name='firstNameInput'
                    value={value}
                    onChange={handleChange}>
                </input>
            </label>
            <button type='submit' onClick={handleSubmit}>submit</button>
        </form>
    );
}

export { Form };