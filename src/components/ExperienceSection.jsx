import { useState } from "react";
import Section from "./Section";
import InfoSection from "./InfoSection";

export default function ExperienceSection() {
    const [userInfo, setUserInfo] = useState({
        companyName: '',
        positionTitle: ''
    });

    function handleChange(e) {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }

    return (
        <Section
            sectionTitle={'Experience'}
            sectionID={'experience-section'}>
            <InfoSection
            ></InfoSection>
        </Section>
    );
}