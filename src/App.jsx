import { useState } from 'react';
import GeneralSection from './components/GeneralSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import './App.css';
import './styles/Section.css';
import './styles/InfoSection.css';

function App() {

  return (
    <>
      <div className='section-container'>
        <GeneralSection></GeneralSection>
        <EducationSection></EducationSection>
        <ExperienceSection></ExperienceSection>
      </div>
    </>
  );
}

export default App;
