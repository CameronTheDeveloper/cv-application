import { useState } from "react";
import { NameInputs, ContactInputs } from "./Input-elements";
import Section from "./Section";
import InfoSection from "./InfoSection";

export default function GeneralSection() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    middleInit: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const userFullName = `${userInfo.firstName} ${userInfo.middleInit}. ${userInfo.lastName}`;

  function handleChange(e) {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }

  return (
    <Section sectionID={"general-section"} sectionTitle={"General Information"}>
      <InfoSection
        inputs={
          <NameInputs
            userInfo={userInfo}
            handleChange={handleChange}
          ></NameInputs>
        }
        formID={"name-form"}
        info={<div className="name">{userFullName}</div>}
      ></InfoSection>
      <InfoSection
        inputs={
          <ContactInputs
            userInfo={userInfo}
            handleChange={handleChange}
          ></ContactInputs>
        }
        formID={"contact-form"}
        info={
          <>
            <div className="email">{userInfo.email}</div>
            <div className="phone-number">{userInfo.phoneNumber}</div>
          </>
        }
      ></InfoSection>
    </Section>
  );
}
