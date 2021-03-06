import React from 'react'
import svg from '../../assets/Frame.png'
import serch from '../../assets/FrameSerch.png'
import mide from '../../assets/Framemide.png'
import form from '../../assets/FrameForm.png'
import detail from '../../assets/detail.png'
import track from '../../assets/track.png'
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
                    <img src={serch} alt="" />
                    <h3>Search doctor</h3>
                    <p>Choose your doctor from thousands of specialist, general, and trusted hospitals</p>
                </div>
                <div className="card">
                    <img src={mide} alt="" />
                    <h3>Online pharmacy</h3>
                    <p>Buy  your medicines with our mobile application with a simple delivery system</p>
                </div>
                <div className="card">
                    <img src={form} alt="" />
                    <h3>Consultation</h3>
                    <p>Free consultation with our trusted doctors and get the best recomendations</p>
                </div>
                <div className="card">
                    <img src={detail} alt="" />
                    <h3>Details info</h3>
                    <p>Free consultation with our trusted doctors and get the best recomendations</p>
                </div>
                <div className="card">
                    <img src={svg} alt="" />
                    <h3>Emergency care</h3>
                    <p>You can get 24/7 urgent care for yourself or your children and your
                        lovely family</p>
                </div>
                <div className="card">
                    <img src={track} alt="" />
                    <h3>Tracking</h3>
                    <p>Track and save your medical history and health data </p>
                </div>
                
            </section>
            <button className="btn serv-btn">Learn more</button>
        </div>
    )
}

export default Services
