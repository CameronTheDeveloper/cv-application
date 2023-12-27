import { useState } from "react";
import { NameInputs } from "./Input-elements";
import InfoSection from "./Info-section";

function General_top() {
    return (
        <h1>General Information</h1>
    );
}

function General_mid() {
    const [userInfo, setUserInfo] = useState({
        firstName: '',
        middleInit: '',
        lastName: ''
    });

    const userFullName = `${userInfo.firstName} ${userInfo.middleInit}. ${userInfo.lastName}`;

    function handleChange(e) {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }

    return (
        <div className='general-info container'>
            {
                <div>
                    <InfoSection
                        inputs={<NameInputs
                            userInfo={userInfo}
                            handleChange={handleChange}>
                        </NameInputs>}
                        formID={'name-form'}
                        info={userFullName}>
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