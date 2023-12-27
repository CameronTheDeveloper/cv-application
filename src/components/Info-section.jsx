import { useState } from "react";
import { Form } from "./Input-elements";

function InfoSection({ inputs, formID, info }) {
    const [inputMode, setInputMode] = useState(true);

    function handleSubmit(e) {
        e.preventDefault();
        setInputMode(false);
    }

    function handleEditToggle() {
        setInputMode(true);
    }

    return (
        <div className='info-section'>
            {inputMode ? <Form
                id={formID}
                handleSubmit={handleSubmit}>{inputs}
            </Form>
                : <div className="info">{info}</div>}
            {!inputMode && <button className='edit-button' onClick={handleEditToggle}>Edit</button>}
        </div>
    );
};

export default InfoSection;