import { useState } from "react";
import { Form } from "./Input-elements";
import InfoSection from "./Info-section";

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
        <div className='general-info container'>
            {
                <div>
                    <InfoSection
                        inputs={<Form
                            labelText={'First Name'}
                            inputType={'text'}
                            inputValue={firstName}
                            inputId={'firstNameInput'}
                            handleChange={handleFirstNameChange}
                        >
                        </Form>}
                        info={firstName}>
                    </InfoSection>

                </div>
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