function NameInfo({ firstName, handleEdit }) {
    const fullName = firstName;

    return (
        <>
            <div className='name-container'>
                <div className='name'><h1>{fullName}</h1></div>
            </div>
            <button onClick={handleEdit}>Edit</button>
        </>
    );
}

export { NameInfo };