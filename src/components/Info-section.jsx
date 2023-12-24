import { useState } from "react";

function InfoSection({ inputs, formID, info }) {
    const [inputMode, setInputMode] = useState(true);

    function handleSubmit(e) {
        e.preventDefault();
        setInputMode(false);
    }

    function handleEdit() {
        setInputMode(true);
    }

    return (
        <div className='info-section'>
            {inputMode ? inputs
                : <div className="info">{info}</div>}
            {inputMode ?
                <button type='submit' form={formID} className='submit-button' onClick={handleSubmit}>Submit</button>
                : <button className='edit-button' onClick={handleEdit}>Edit</button>}
        </div>
    );
}

export default InfoSection;