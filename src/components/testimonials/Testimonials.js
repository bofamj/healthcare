import man from "../../assets/man.png"
import prev from "../../assets/prev.png"
import next from "../../assets/next.png"
import './testimonial.css'

const Testimonials = () => {
    return (
        <main className="testimon">
            <section className='raper'>
                <section className='testi-header'>
                    <h3>What our customer are saying</h3>
                    <span></span>
                </section>
                <section className='testi-img'>
                    <div className="img-raper">
                        <img src={man} alt="" />
                        <div className="text-tist">
                            <h3>Edward Newgate</h3>
                            <p>Founder Circle</p>
                        </div>
                    </div>
                    
                    <p className='testi-text'>“Our dedicated patient engagement app and 
                            web portal allow you to access information instantaneously (no tedeous form, long calls,or administrative hassle) and securely”</p>
                </section>
            </section>
                <section className='btn-raper'>
                    <button className="btn-prev"><img src={prev} alt="" /></button>
                    <button className="btn-next"><img src={next} alt="" /></button>
                </section>
        </main>
    )
}

export default Testimonials
