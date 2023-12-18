function Info({ data, handleEdit }) {
    return (
        <>
            <div className='name-container'>
                <div className='name'><h1>{data}</h1></div>
            </div>
            <button onClick={handleEdit}>Edit</button>
        </>
    );
}

export { Info };