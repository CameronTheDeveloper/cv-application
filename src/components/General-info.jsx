import { useState } from "react";
import { NameForm } from "./Input-elements";
import InfoSection from "./Info-section";

function General_top() {
    return (
        <h1>General Information</h1>
    );
}

function General_mid() {
    const [userInfo, setUserInfo] = useState({
        firstName: ''
    });

    function handleFirstNameChange(e) {
        setUserInfo({ ...userInfo, firstName: e.target.value });
    }

    return (
        <div className='general-info container'>
            {
                <div>
                    <InfoSection
                        inputs={<NameForm
                            firstName={userInfo.firstName}
                            handleChange={handleFirstNameChange}>
                        </NameForm>}
                        info={userInfo.firstName}>
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