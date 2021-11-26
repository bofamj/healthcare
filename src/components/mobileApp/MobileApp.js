import app from '../../assets/section4.png'
import btn from '../../assets/btn.png'
import './MobileApp.css'

const MobileApp = () => {
    return (
        <section className='health-sec mobile-sec'>
            <div className="text-sec mobile-text">
                <h1>Download our 
                    mobile apps</h1>
                <span></span>
                <p>Our dedicated patient engagement app and 
                    web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</p>
                <button className='btn serv-btn mobile-btn'>Download <img src={btn} alt="" /></button>    
            </div>
            <div className="imeg-sec">
                <img src={app} alt="" />
            </div>
            
        </section>
    )
}

export default MobileApp
