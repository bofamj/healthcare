import React from 'react'
import svg from '../../assets/medical-briefcase.svg'
import './services.css'

const Services = () => {
    return (
        <div className='services-main'>
            <section className="serv-text">
                <h2>Our services</h2>
                <span></span>
                <p>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
            </section>
            <section className="cards">
                <div className="card">
                    <img src={svg} alt="" />
                    <h3>Online pharmacy</h3>
                    <p>Buy  your medicines with our mobile application with a simple delivery system</p>
                </div>
                <div className="card">
                    <img src={svg} alt="" />
                    <h3>Online pharmacy</h3>
                    <p>Buy  your medicines with our mobile application with a simple delivery system</p>
                </div>
                <div className="card">
                    <img src={svg} alt="" />
                    <h3>Online pharmacy</h3>
                    <p>Buy  your medicines with our mobile application with a simple delivery system</p>
                </div>
                <div className="card">
                    <img src={svg} alt="" />
                    <h3>Online pharmacy</h3>
                    <p>Buy  your medicines with our mobile application with a simple delivery system</p>
                </div>
                <div className="card">
                    <img src={svg} alt="" />
                    <h3>Online pharmacy</h3>
                    <p>Buy  your medicines with our mobile application with a simple delivery system</p>
                </div>
                <div className="card">
                    <img src={svg} alt="" />
                    <h3>Online pharmacy</h3>
                    <p>Buy  your medicines with our mobile application with a simple delivery system</p>
                </div>
                
            </section>
            <button className="btn serv-btn">Learn more</button>
        </div>
    )
}

export default Services
