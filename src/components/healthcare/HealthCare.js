import photo from '../../assets/trafalgar-illustration sec02 1.png'
import './healthCare.css'

const HealthCare = () => {
    return (
        <section className='health-sec'>
            <div className="imeg-sec">
                <img src={photo} alt="" />
            </div>
            <div className="text-sec">
                <h1>Leading healthcare providers</h1>
                <span></span>
                <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
                in the solutions we deliver</p>
                <button className="btn serv-btn btn-health">Learn more</button>
            </div>
        </section>
    )
}

export default HealthCare
