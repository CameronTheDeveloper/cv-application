import { useState } from "react";
import { NameInputs, ContactInputs } from "./Input-elements";
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
        lastName: '',
        email: '',
        phoneNumber: ''
    });

    const userFullName = `${userInfo.firstName} ${userInfo.middleInit}. ${userInfo.lastName}`;

    function handleChange(e) {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }

    return (
        <div className='general-info container'>
            <InfoSection
                inputs={<NameInputs
                    userInfo={userInfo}
                    handleChange={handleChange}>
                </NameInputs>}
                formID={'name-form'}
                info={<div className='name'>{userFullName}</div>}>
            </InfoSection>
            <InfoSection
                inputs={<ContactInputs
                    userInfo={userInfo}
                    handleChange={handleChange}>
                </ContactInputs>}
                formID={'contact-form'}
                info={<>
                    <div className='email'>{userInfo.email}</div>
                    <div className='phone-number'>{userInfo.phoneNumber}</div>
                </>}>
            </InfoSection>
        </div >
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