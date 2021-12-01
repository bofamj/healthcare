import React from 'react'
import'./foter.css'







const Foter = () => {
    let time = new Date();
    
console.log(time);
    return (
        <footer className='footer'>
            <main className='footer-raper'>
                <section className='logo-section'>
                    <div className='logo-fot-rap'>
                        <span>T</span>
                        <h1 className='logo footer-logo'>Trafalgar</h1>
                    </div>
                    <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                    <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
                </section>
                <section className='links-raper'>
                    <div className='links-continer company'>
                        <h2>Company</h2>
                        <ul className='list-li'>
                            <li> About</li>
                            <li>Testimonials</li>
                            <li>Find a doctor</li>
                            <li>Apps</li>
                        </ul>
                    </div>
                    <div className='links-continer'>
                        <h2>Region</h2>
                        <ul className='list-li'>
                            <li>Indonesia</li>
                            <li>Singapore</li>
                            <li>Hongkong</li>
                            <li>Canada</li>
                        </ul>
                    </div>
                    <div className='links-continer' >
                        <h2>Help</h2>
                        <ul className='list-li'>
                            <li>Help center</li>
                            <li>Contact support</li>
                            <li>Instructions</li>
                            <li>How it works</li>
                        </ul>
                    </div>
                </section>
            </main>
        </footer>
    )
}

export default Foter
