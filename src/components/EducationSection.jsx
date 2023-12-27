import { useState } from "react";
import Section from "./Section";
import InfoSection from "./InfoSection";
import { SchoolInputs } from "./Input-elements";

export default function EducationSection() {
    const [userInfo, setUserInfo] = useState({
        schoolName: ''
    });

    function handleChange(e) {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }

    return (
        <Section
            sectionTitle={'Education'}
            sectionID={'education-section'}>
            <InfoSection
                inputs={<SchoolInputs
                    userInfo={userInfo}
                    handleChange={handleChange}>
                </SchoolInputs>}>

            </InfoSection>
        </Section>
    );
}