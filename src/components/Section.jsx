export default function Section({ sectionTitle, sectionID, children }) {
    return (
        <div className='section' id={sectionID}>
            <h2 className='section-title'>{sectionTitle}</h2>
            <div>{children}</div>
        </div>
    );
}