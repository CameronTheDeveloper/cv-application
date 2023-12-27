import { useState } from "react";
import Section from "./Section";
import InfoSection from "./InfoSection";
import { EmploymentInputs } from "./Input-elements";

export default function ExperienceSection() {
    const [userInfo, setUserInfo] = useState({
        companyName: '',
        positionTitle: '',
        startDate: '',
        endDate: '',
    });

    function handleChange(e) {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }

    return (
        <Section
            sectionTitle={'Experience'}
            sectionID={'experience-section'}>
            <InfoSection
                inputs={<EmploymentInputs
                    userInfo={userInfo}
                    handleChange={handleChange}>
                </EmploymentInputs>}
                info={<>
                    <div className="company-name">
                        {userInfo.companyName}
                    </div>
                    <div className="position-title">
                        {userInfo.positionTitle}
                    </div>
                    <div className="start-date">
                        {userInfo.startDate}
                    </div>
                </>}></InfoSection>
        </Section>
    );
}