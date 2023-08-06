import './CvButton.css'

const CvButton = () => {
    return (
        <div className='cvbutton'>
            <a href="src/docs/CV Deivison Soares.pdf" download="CV Deivison Soares.pdf">
                <button>Download CV</button>
            </a>
        </div>
    )
}

export default CvButton