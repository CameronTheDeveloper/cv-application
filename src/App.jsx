import { useState } from 'react';
import GeneralSection from './components/GeneralSection';
import EducationSection from './components/EducationSection';
import './App.css';

function App() {

  return (
    <>
      <div>
        <GeneralSection></GeneralSection>
        <EducationSection></EducationSection>
      </div>
    </>
  );
}

export default App;
