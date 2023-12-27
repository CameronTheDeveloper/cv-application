import { useState } from 'react';
import GeneralSection from './components/GeneralSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import './App.css';

function App() {

  return (
    <>
      <div>
        <GeneralSection></GeneralSection>
        <EducationSection></EducationSection>
        <ExperienceSection></ExperienceSection>
      </div>
    </>
  );
}

export default App;
