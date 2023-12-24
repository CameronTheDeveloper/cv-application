import { useState } from "react";

function InfoSection({ inputs, info }) {
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
            {!inputMode && <button className='edit-button' onClick={handleEdit}>Edit</button>}
        </div>
    );
}

export default InfoSection;