import'./heder.css'
import image from '../../assets/people-sitting-hospital-corridor-waiting-doctor-patient-clinic-visit-flat-vector-illustration-medicine-healthcare_74855-8507.jpg'
const Header = () => {
    return (
        <header>
            <section className='nav-section'>
                <div className="logo">
                    <h2>Trafalgar</h2>
                </div>
                <nav className='nav-bar'>
                    <ul>
                        <li>Home</li>
                        <li>Find a doctor</li>
                        <li>Apps</li>
                        <li>Testimonials</li>
                        <li>About us</li>
                    </ul>
                </nav>
            </section>
            <section className="hero">
                <div className="text">
                    <h1>Virtual healthcare for you</h1>
                    <p>Trafalgar provides progressive, and affordable 
                        healthcare, accessible on mobile and online 
                        for everyone
                    </p>
                    <button className="btn btn-Consult">Consult today</button>
                </div>
                <div className="hero-imege">
                    <img src={image} alt="" />
                </div>
            </section>
            
        </header>
    )
}

export default Header
