import one from '../../assets/one.png'
import tow from '../../assets/tow.png'
import three from '../../assets/three.png'
import './article.css'

const Article = () => {
    return (
        <main className="article">
            <section className="article-raper">
                <div className="titel">
                    <h2>Check out our latest article</h2>
                    <span></span>
                </div>
                <div className="articl-sec">
                    <article>
                        <div className="imeg-raper">
                            <img src={one} alt="" className='arci-img'/>
                        </div>
                        <h3>Disease detection, check 
                            up in the laboratory</h3>
                        <p>In this case, the role of the health laboratory is very important to do
                            a disease detection...</p>
                        <button>Read more</button>
                    </article>
                    <article>
                        <div className="imeg-raper">
                            <img src={tow} alt="" className='arci-img'/>
                        </div>
                        <h3>Herbal medicines that are 
                                safe for consumption</h3>
                        <p>Herbal medicine is very widely used at this time because of its very good for your health....</p>
                        <button>Read more</button>
                    </article>
                    <article>
                        <div className="imeg-raper">
                            <img src={three} alt="" className='arci-img'/>
                        </div>
                        <h3>Natural care for healthy facial skin</h3>
                        <p>A healthy lifestyle should start from now and also for your skin health.
                            There are some...</p>
                        <button>Read more</button>
                    </article>
                </div>
                <button className="btn arti-btn">View all</button>
            </section>
        </main>
    )
}

export default Article
