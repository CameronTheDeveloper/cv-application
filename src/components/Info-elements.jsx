function NameInfo({ firstName }) {
    const fullName = firstName;

    return (
        <div className='name-container'>
            <div className='name'><h1>{fullName}</h1></div>
        </div>
    );
}

export { NameInfo };