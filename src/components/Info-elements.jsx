function Info({ data, handleEdit, infoClass }) {
    return (
        <div className='info'>
            <div className={infoClass}><h1>{data}</h1></div>
            <button onClick={handleEdit}>Edit</button>
        </div>
    );
}

export { Info };