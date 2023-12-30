import { useState } from "react";
import Section from "./Section";
import InfoSection from "./InfoSection";
import { SchoolInputs } from "./Input-elements";

export default function EducationSection() {
  const [userInfo, setUserInfo] = useState({
    schoolName: "",
    degree: "",
  });

  function handleChange(e) {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }

  return (
    <Section sectionTitle={"Education"} sectionID={"education-section"}>
      <InfoSection
        inputs={
          <SchoolInputs
            userInfo={userInfo}
            handleChange={handleChange}
          ></SchoolInputs>
        }
        info={
          <>
            <div className="school-name">{userInfo.schoolName}</div>
            <div className="degree">{userInfo.degree}</div>
          </>
        }
        formID={"school-form"}
      ></InfoSection>
    </Section>
  );
}
