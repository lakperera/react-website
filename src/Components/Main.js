import { Fragment } from "react";
import Sidebar from "./Sidebar";
function Main(){
    return(
        <Fragment>
    <>
        <div>
        <main>
            {/* 
            banner
             */}
            <div className="banner">

                    <div className="container">

                    <div className="slider-container has-scrollbar">

                        <div className="slider-item">

                        <img src="./assets/images/cover.jpg" alt="women's latest fashion sale" className="banner-img"/>

                        {/* <!-- <div className="banner-content">

                            <p className="banner-subtitle">Trending item</p>

                            <h2 className="banner-title">Women's latest fashion sale</h2>

                            <p className="banner-text">
                            starting at &dollar; <b>20</b>.00
                            </p>

                            <a href="#" className="banner-btn">Shop now</a>

                        </div> --> */}

                        </div>

                        <div className="slider-item">

                        <img src="./assets/images/banner-2.jpg" alt="modern sunglasses" className="banner-img"/>

                        <div className="banner-content">

                            {/* <!-- <p className="banner-subtitle">Trending accessories</p>

                            <h2 className="banner-title">Modern sunglasses</h2>

                            <p className="banner-text">
                            starting at &dollar; <b>15</b>.00
                            </p>

                            <a href="#" className="banner-btn">Shop now</a> --> */}

                        </div>

                        </div>

                        <div className="slider-item">

                        <img src="./assets/images/banner-3.jpg" alt="new fashion summer sale" className="banner-img"/>

                        {/* <!-- <div className="banner-content">

                            <p className="banner-subtitle">Sale Offer</p>

                            <h2 className="banner-title">New fashion summer sale</h2>

                            <p className="banner-text">
                            starting at &dollar; <b>29</b>.99
                            </p>

                            <a href="#" className="banner-btn">Shop now</a>

                        </div> --> */}
                        </div>
                    </div>
                    </div>
                    </div>  

            {/* 
                CATEGORY 
            */}
            <div className="category">

                <div className="container">

                    <div className="category-item-container has-scrollbar">

                    <div className="category-item">

                        <div className="category-img-box">
                        <img src="./assets/images/icons/cakes.svg" alt="dress & frock" width="30"/>
                        </div>

                        <div className="category-content-box">

                        <div className="category-content-flex">
                            <h3 className="category-item-title">Cakes</h3>

                            <p className="category-item-amount">(53)</p>
                        </div>

                        <a href="#" className="category-btn">Show all</a>

                        </div>

                    </div>

                    <div className="category-item">

                        <div className="category-img-box">
                        <img src="./assets/images/icons/brownies.svg" alt="winter wear" width="30"/>
                        </div>

                        <div className="category-content-box">

                        <div className="category-content-flex">
                            <h3 className="category-item-title">brownies</h3>

                            <p className="category-item-amount">(58)</p>
                        </div>

                        <a href="#" className="category-btn">Show all</a>

                        </div>

                    </div>

                    <div className="category-item">

                        <div className="category-img-box">
                        <img src="./assets/images/icons/pizza.svg" alt="glasses & lens" width="30"/>
                        </div>

                        <div className="category-content-box">

                        <div className="category-content-flex">
                            <h3 className="category-item-title">Pizza</h3>

                            <p className="category-item-amount">(68)</p>
                        </div>

                        <a href="#" className="category-btn">Show all</a>

                        </div>

                    </div>

                    <div className="category-item">

                        <div className="category-img-box">
                        <img src="./assets/images/icons/pudding.svg" alt="shorts & jeans" width="30"/>
                        </div>

                        <div className="category-content-box">

                        <div className="category-content-flex">
                            <h3 className="category-item-title">Pudding</h3>

                            <p className="category-item-amount">(84)</p>
                        </div>

                        <a href="#" className="category-btn">Show all</a>

                        </div>

                    </div>

                    <div className="category-item">

                        <div className="category-img-box">
                        <img src="./assets/images/icons/lasanga.svg" alt="t-shirts" width="30"/>
                        </div>

                        <div className="category-content-box">

                        <div className="category-content-flex">
                            <h3 className="category-item-title">lasanga</h3>

                            <p className="category-item-amount">(35)</p>
                        </div>

                        <a href="#" className="category-btn">Show all</a>

                        </div>

                    </div>

                    <div className="category-item">

                        <div className="category-img-box">
                        <img src="./assets/images/icons/Chocolate Mousse.svg" alt="jacket" width="30"/>
                        </div>

                        <div className="category-content-box">

                        <div className="category-content-flex">
                            <h3 className="category-item-title">Chocolate Mousse</h3>

                            <p className="category-item-amount">(16)</p>
                        </div>

                        <a href="#" className="category-btn">Show all</a>

                        </div>

                    </div>

                    <div className="category-item">

                        <div className="category-img-box">
                        <img src="./assets/images/icons/wedding.svg" alt="watch" width="30"/>
                        </div>

                        <div className="category-content-box">

                        <div className="category-content-flex">
                            <h3 className="category-item-title">Wedding Structures</h3>

                            <p className="category-item-amount">(27)</p>
                        </div>

                        <a href="#" className="category-btn">Show all</a>

                        </div>

                    </div>

                    <div className="category-item">

                        <div className="category-img-box">
                        <img src="./assets/images/icons/cupcake.svg" alt="hat & caps" width="30"/>
                        </div>

                        <div className="category-content-box">

                        <div className="category-content-flex">
                            <h3 className="category-item-title">CupCakes</h3>

                            <p className="category-item-amount">(39)</p>
                        </div>

                        <a href="#" className="category-btn">Show all</a>

                        </div>

                    </div>

                    </div>

                </div>

            </div>
        
            {/* 
            Sidebar 
            */}
            
            <Sidebar/>



            {/* 
                TESTIMONIALS, CTA & SERVICE 
            */}
            <div class="container">

                    <div class="testimonials-box">

                    {/* <!--
                        - TESTIMONIALS
                    --> */}

                    <div class="testimonial">

                        <h2 class="title">testimonial</h2>

                        <div class="testimonial-card">

                        <img src="./assets/images/testimonial-1.jpg" alt="alan doe" class="testimonial-banner" width="80" height="80"/>

                        <p class="testimonial-name">Alan Doe</p>

                        <p class="testimonial-title">CEO & Founder Invision</p>

                        <img src="./assets/images/icons/quotes.svg" alt="quotation" class="quotation-img" width="26"/>

                        <p class="testimonial-desc">
                            Lorem ipsum dolor sit amet consectetur Lorem ipsum
                            dolor dolor sit amet.
                        </p>

                        </div>

                    </div>



                    {/* <!--
                        - CTA
                    --> */}

                    <div class="cta-container">

                        <img src="./assets/images/cta-banner.jpg" alt="summer collection" class="cta-banner"/>

                        <a href="#" class="cta-content">

                        <p class="discount">25% Discount</p>

                        <h2 class="cta-title">Summer collection</h2>

                        <p class="cta-text">Starting @ $10</p>

                        <button class="cta-btn">Shop now</button>

                        </a>

                    </div>



                    {/* <!--
                        - SERVICE
                    --> */}

                    <div class="service">

                        <h2 class="title">Our Services</h2>

                        <div class="service-container">

                        <a href="#" class="service-item">

                            <div class="service-icon">
                            <ion-icon name="boat-outline"></ion-icon>
                            </div>

                            <div class="service-content">

                            <h3 class="service-title">Worldwide Delivery</h3>
                            <p class="service-desc">For Order Over $100</p>

                            </div>

                        </a>

                        <a href="#" class="service-item">
                        
                            <div class="service-icon">
                            <ion-icon name="rocket-outline"></ion-icon>
                            </div>
                        
                            <div class="service-content">
                        
                            <h3 class="service-title">Next Day delivery</h3>
                            <p class="service-desc">UK Orders Only</p>
                        
                            </div>
                        
                        </a>

                        <a href="#" class="service-item">
                        
                            <div class="service-icon">
                            <ion-icon name="call-outline"></ion-icon>
                            </div>
                        
                            <div class="service-content">
                        
                            <h3 class="service-title">Best Online Support</h3>
                            <p class="service-desc">Hours: 8AM - 11PM</p>
                        
                            </div>
                        
                        </a>

                        <a href="#" class="service-item">
                        
                            <div class="service-icon">
                            <ion-icon name="arrow-undo-outline"></ion-icon>
                            </div>
                        
                            <div class="service-content">
                        
                            <h3 class="service-title">Return Policy</h3>
                            <p class="service-desc">Easy & Free Return</p>
                        
                            </div>
                        
                        </a>

                        <a href="#" class="service-item">
                        
                            <div class="service-icon">
                            <ion-icon name="ticket-outline"></ion-icon>
                            </div>
                        
                            <div class="service-content">
                        
                            <h3 class="service-title">30% money back</h3>
                            <p class="service-desc">For Order Over $100</p>
                        
                            </div>
                        
                        </a>

                        </div>

                    </div>

                    </div>

                </div>
       
            {/* 
                BLOG 
            */}

            <div class="blog">

            <div class="container">

                <div class="blog-container has-scrollbar">

                <div class="blog-card">

                    <a href="#">
                    <img src="./assets/images/blog-1.jpg" alt="Clothes Retail KPIs 2021 Guide for Clothes Executives" width="300" class="blog-banner"/>
                    </a>

                    <div class="blog-content">

                    <a href="#" class="blog-category">Fashion</a>

                    <a href="#">
                        <h3 class="blog-title">Clothes Retail KPIs 2021 Guide for Clothes Executives.</h3>
                    </a>

                    <p class="blog-meta">
                        By <cite>Mr Admin</cite> / <time datetime="2022-04-06">Apr 06, 2022</time>
                    </p>

                    </div>

                </div>

                <div class="blog-card">
                
                    <a href="#">
                    <img src="./assets/images/blog-2.jpg" alt="Curbside fashion Trends: How to Win the Pickup Battle."
                        class="blog-banner" width="300"/>
                    </a>
                
                    <div class="blog-content">
                
                    <a href="#" class="blog-category">Clothes</a>
                
                    <h3>
                        <a href="#" class="blog-title">Curbside fashion Trends: How to Win the Pickup Battle.</a>
                    </h3>
                
                    <p class="blog-meta">
                        By <cite>Mr Robin</cite> / <time datetime="2022-01-18">Jan 18, 2022</time>
                    </p>
                
                    </div>
                
                </div>

                <div class="blog-card">
                
                    <a href="#">
                    <img src="./assets/images/blog-3.jpg" alt="EBT vendors: Claim Your Share of SNAP Online Revenue."
                        class="blog-banner" width="300"/>
                    </a>
                
                    <div class="blog-content">
                
                    <a href="#" class="blog-category">Shoes</a>
                
                    <h3>
                        <a href="#" class="blog-title">EBT vendors: Claim Your Share of SNAP Online Revenue.</a>
                    </h3>
                
                    <p class="blog-meta">
                        By <cite>Mr Selsa</cite> / <time datetime="2022-02-10">Feb 10, 2022</time>
                    </p>
                
                    </div>
                
                </div>

                <div class="blog-card">
                
                    <a href="#">
                    <img src="./assets/images/blog-4.jpg" alt="Curbside fashion Trends: How to Win the Pickup Battle."
                        class="blog-banner" width="300"/>
                    </a>
                
                    <div class="blog-content">
                
                    <a href="#" class="blog-category">Electronics</a>
                
                    <h3>
                        <a href="#" class="blog-title">Curbside fashion Trends: How to Win the Pickup Battle.</a>
                    </h3>
                
                    <p class="blog-meta">
                        By <cite>Mr Pawar</cite> / <time datetime="2022-03-15">Mar 15, 2022</time>
                    </p>
                
                    </div>
                
                </div>

                </div>

            </div>

            </div>


    
            
        </main>

        </div>

    </>
    </Fragment>
    );
}

export default Main;