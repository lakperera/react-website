function Sidebar(){
    return(

        <>
        {/* 
            product 
            */}
        <div className="product-container">
            <div className="container">
                {/* 
                SIDE BAR 
                */}
                    <div className="sidebar  has-scrollbar" data-mobile-menu>
                        <div className="sidebar-category">

                                    <div className="sidebar-top">
                                    <h2 className="sidebar-title">Category</h2>

                                    <button className="sidebar-close-btn" data-mobile-menu-close-btn>
                                        <ion-icon name="close-outline"></ion-icon>
                                    </button>
                                    </div>

                                    <ul className="sidebar-menu-category-list">

                                    <li className="sidebar-menu-category">

                                        <button className="sidebar-accordion-menu" data-accordion-btn>

                                        <div className="menu-title-flex">
                                            <img src="./assets/images/icons/cakes.svg" alt="clothes" width="20" height="20"
                                            className="menu-title-img"/>

                                            <p className="menu-title">cakes</p>
                                        </div>

                                        <div>
                                            <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                            <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                                        </div>

                                        </button>

                                        <ul className="sidebar-submenu-category-list" data-accordion>

                                        <li className="sidebar-submenu-category">
                                            <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">Chocolate Cake</p>
                                            <data value="300" className="stock" title="Available Stock">300</data>
                                            </a>
                                        </li>

                                        <li className="sidebar-submenu-category">
                                            <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">Cheese Cake</p>
                                            <data value="60" className="stock" title="Available Stock">60</data>
                                            </a>
                                        </li>

                                        <li className="sidebar-submenu-category">
                                            <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">Lava Cake </p>
                                            <data value="50" className="stock" title="Available Stock">50</data>
                                            </a>
                                        </li>

                                        <li className="sidebar-submenu-category">
                                            <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">Birthday Cake</p>
                                            <data value="87" className="stock" title="Available Stock">87</data>
                                            </a>
                                        </li>

                                        </ul>

                                    </li>

                                    <li className="sidebar-menu-category">

                                        <button className="sidebar-accordion-menu" data-accordion-btn>

                                        <div className="menu-title-flex">
                                            <img src="./assets/images/icons/brownies.svg" alt="footwear" className="menu-title-img" width="20"
                                            height="20"/>

                                            <p className="menu-title">Brownies</p>
                                        </div>

                                        <div>
                                            <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                            <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                                        </div>

                                        </button>

                                        <ul className="sidebar-submenu-category-list" data-accordion>

                                        <li className="sidebar-submenu-category">
                                            <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">White Brownies</p>
                                            <data value="45" className="stock" title="Available Stock">45</data>
                                            </a>
                                        </li>

                                        <li className="sidebar-submenu-category">
                                            <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">Chocolate Brownis</p>
                                            <data value="75" className="stock" title="Available Stock">75</data>
                                            </a>
                                        </li>

                                        <li className="sidebar-submenu-category">
                                            <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">Wedding cake Brownies</p>
                                            <data value="35" className="stock" title="Available Stock">35</data>
                                            </a>
                                        </li>

                                        <li className="sidebar-submenu-category">
                                            <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">sample 01</p>
                                            <data value="26" className="stock" title="Available Stock">26</data>
                                            </a>
                                        </li>

                                        </ul>

                                    </li>

                                    <li className="sidebar-menu-category">

                                        <button className="sidebar-accordion-menu" data-accordion-btn>

                                        <div className="menu-title-flex">
                                            <img src="./assets/images/icons/pizza.svg" alt="clothes" className="menu-title-img" width="20"
                                            height="20"/>

                                            <p className="menu-title">pizza</p>
                                        </div>

                                        <div>
                                            <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                            <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                                        </div>

                                        </button>

                                        <ul className="sidebar-submenu-category-list" data-accordion>

                                        <li className="sidebar-submenu-category">
                                            <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">Chicken</p>
                                            <data value="46" className="stock" title="Available Stock">46</data>
                                            </a>
                                        </li>

                                        <li className="sidebar-submenu-category">
                                            <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">Breef</p>
                                            <data value="73" className="stock" title="Available Stock">73</data>
                                            </a>
                                        </li>

                                        <li className="sidebar-submenu-category">
                                            <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">Cheese</p>
                                            <data value="61" className="stock" title="Available Stock">61</data>
                                            </a>
                                        </li>

                                        </ul>

                                    </li>

                                    <li className="sidebar-menu-category">

                                        <button className="sidebar-accordion-menu" data-accordion-btn>

                                        <div className="menu-title-flex">
                                            <img src="./assets/images/icons/pudding.svg" alt="perfume" className="menu-title-img" width="20"
                                            height="20"/>

                                            <p className="menu-title">pudding</p>
                                        </div>

                                        <div>
                                            <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                            <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                                        </div>

                                        </button>

                                        <ul className="sidebar-submenu-category-list" data-accordion>

                                        <li className="sidebar-submenu-category">
                                            <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">sample 01</p>
                                            <data value="12" className="stock" title="Available Stock">12 pcs</data>
                                            </a>
                                        </li>

                                        <li className="sidebar-submenu-category">
                                            <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">sample 02</p>
                                            <data value="60" className="stock" title="Available Stock">60 pcs</data>
                                            </a>
                                        </li>

                                        <li className="sidebar-submenu-category">
                                            <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">sample 03</p>
                                            <data value="50" className="stock" title="Available Stock">50 pcs</data>
                                            </a>
                                        </li>

                                        <li className="sidebar-submenu-category">
                                            <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">sample 04k</p>
                                            <data value="87" className="stock" title="Available Stock">87 pcs</data>
                                            </a>
                                        </li>

                                        </ul>

                                    </li>

                                    <li className="sidebar-menu-category">

                                        <button className="sidebar-accordion-menu" data-accordion-btn>

                                        <div className="menu-title-flex">
                                            <img src="./assets/images/icons/buriyani.svg" alt="cosmetics" className="menu-title-img" width="20"
                                            height="20"/>

                                            <p className="menu-title">buriyani</p>
                                        </div>

                                        <div>
                                            <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                            <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                                        </div>

                                        </button>

                                        <ul className="sidebar-submenu-category-list" data-accordion>

                                        <li className="sidebar-submenu-category">
                                            <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">sample 01</p>
                                            <data value="68" className="stock" title="Available Stock">68</data>
                                            </a>
                                        </li>

                                        <li className="sidebar-submenu-category">
                                            <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">sample 02</p>
                                            <data value="46" className="stock" title="Available Stock">46</data>
                                            </a>
                                        </li>

                                        <li className="sidebar-submenu-category">
                                            <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">sample 03</p>
                                            <data value="79" className="stock" title="Available Stock">79</data>
                                            </a>
                                        </li>

                                        <li className="sidebar-submenu-category">
                                            <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">sample 04</p>
                                            <data value="23" className="stock" title="Available Stock">23</data>
                                            </a>
                                        </li>

                                        </ul>

                                    </li>

                                    {/* <!-- <li className="sidebar-menu-category">

                                        <button className="sidebar-accordion-menu" data-accordion-btn>

                                        <div className="menu-title-flex">
                                            <img src="./assets/images/icons/glasses.svg" alt="glasses" className="menu-title-img" width="20"
                                            height="20"/>

                                            <p className="menu-title">Glasses</p>
                                        </div>

                                        <div>
                                            <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                            <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                                        </div>

                                        </button>

                                        <ul className="sidebar-submenu-category-list" data-accordion>

                                        <li className="sidebar-submenu-category">
                                            <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">Sunglasses</p>
                                            <data value="50" className="stock" title="Available Stock">50</data>
                                            </a>
                                        </li>

                                        <li className="sidebar-submenu-category">
                                            <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">Lenses</p>
                                            <data value="48" className="stock" title="Available Stock">48</data>
                                            </a>
                                        </li>

                                        </ul>

                                    </li> --> */}

                                    <li className="sidebar-menu-category">

                                        <button className="sidebar-accordion-menu" data-accordion-btn>

                                        <div className="menu-title-flex">
                                            <img src="./assets/images/icons/bag.svg" alt="bags" className="menu-title-img" width="20" height="20"/>

                                            <p className="menu-title">Bags</p>
                                        </div>

                                        <div>
                                            <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                            <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                                        </div>

                                        </button>

                                        <ul className="sidebar-submenu-category-list" data-accordion>

                                        <li className="sidebar-submenu-category">
                                            <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">Shopping Bag</p>
                                            <data value="62" className="stock" title="Available Stock">62</data>
                                            </a>
                                        </li>

                                        <li className="sidebar-submenu-category">
                                            <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">Gym Backpack</p>
                                            <data value="35" className="stock" title="Available Stock">35</data>
                                            </a>
                                        </li>

                                        <li className="sidebar-submenu-category">
                                            <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">Purse</p>
                                            <data value="80" className="stock" title="Available Stock">80</data>
                                            </a>
                                        </li>

                                        <li className="sidebar-submenu-category">
                                            <a href="#" className="sidebar-submenu-title">
                                            <p className="product-name">Wallet</p>
                                            <data value="75" className="stock" title="Available Stock">75</data>
                                            </a>
                                        </li> 

                                        </ul>

                                    </li>

                                    </ul>

                        </div>
                        {/* <!-- side bar best saler avalability  --> */}

                        <div className="product-showcase">

                        <h3 className="showcase-heading">best sellers</h3>

                        <div className="showcase-wrapper">

                        <div className="showcase-container">

                            <div className="showcase">

                            <a href="#" className="showcase-img-box">
                                <img src="./assets/images/torta cake pics/event/21.jpg" alt="baby fabric shoes" width="75" height="75"
                                className="showcase-img"/>
                            </a>

                            <div className="showcase-content">

                                <a href="#">
                                <h4 className="showcase-title">annyversary cake</h4>
                                </a>

                                <div className="showcase-rating">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                </div>

                                <div className="price-box">
                                <del>$5.00</del>
                                <p className="price">$4.00</p>
                                </div>

                            </div>

                            </div>

                            <div className="showcase">

                            <a href="#" className="showcase-img-box">
                                <img src="./assets/images/torta cake pics/birthday/26.jpg" alt="men's hoodies t-shirt" className="showcase-img"
                                width="75" height="75"/>
                            </a>

                            <div className="showcase-content">

                                <a href="#">
                                <h4 className="showcase-title">white cream</h4>
                                </a>
                                <div className="showcase-rating">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star-half-outline"></ion-icon>
                                </div>

                                <div className="price-box">
                                <del>$17.00</del>
                                <p className="price">$7.00</p>
                                </div>

                            </div>

                            </div>

                            <div className="showcase">

                            <a href="#" className="showcase-img-box">
                                <img src="./assets/images/torta cake pics/birthday/28.jpg" alt="girls t-shirt" className="showcase-img" width="75"
                                height="75"/>
                            </a>

                            <div className="showcase-content">

                                <a href="#">
                                <h4 className="showcase-title">oreo chocolate cake</h4>
                                </a>
                                <div className="showcase-rating">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star-half-outline"></ion-icon>
                                </div>

                                <div className="price-box">
                                <del>$5.00</del>
                                <p className="price">$3.00</p>
                                </div>

                            </div>

                            </div>

                            <div className="showcase">

                            <a href="#" className="showcase-img-box">
                                <img src="./assets/images/torta cake pics/birthday/42.jpg" alt="woolen hat for men" className="showcase-img" width="75"
                                height="75"/>
                            </a>

                            <div className="showcase-content">

                                <a href="#">
                                <h4 className="showcase-title">dairy milk chocolate</h4>
                                </a>
                                <div className="showcase-rating">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                </div>

                                <div className="price-box">
                                <del>$15.00</del>
                                <p className="price">$12.00</p>
                                </div>

                            </div>

                            </div>

                        </div>

                        </div>

                        </div>
                    </div>
                    
                    <div className="product-box">


                            {/*
                            - PRODUCT MINIMAL 
                            */}


                            <div className="product-minimal">

                            <div className="product-showcase">

                            <h2 className="title">New Arrivals</h2>

                            <div className="showcase-wrapper has-scrollbar">

                            <div className="showcase-container">

                            <div className="showcase">

                                <a href="#" className="showcase-img-box">
                                <img src="./assets/images/torta cake pics/chocolate cake/1.jpg" alt="relaxed short full sleeve t-shirt" width="70" className="showcase-img"/>
                                </a>

                                <div className="showcase-content">

                                <a href="#">
                                    <h4 className="showcase-title">Chocolate & white </h4>
                                </a>

                                <a href="#" className="showcase-category">Cake</a>

                                <div className="price-box">
                                    <p className="price">$45.00</p>
                                    <del>$12.00</del>
                                </div>

                                </div>

                            </div>

                            <div className="showcase">
                            
                                <a href="#" className="showcase-img-box">
                                <img src="./assets/images/torta cake pics/event/6.jpg" alt="girls pink embro design top" className="showcase-img" width="70"/>
                                </a>
                            
                                <div className="showcase-content">
                            
                                <a href="#">
                                    <h4 className="showcase-title">Gold with lover cake</h4>
                                </a>
                            
                                <a href="#" className="showcase-category">cake</a>
                            
                                <div className="price-box">
                                    <p className="price">$61.00</p>
                                    <del>$9.00</del>
                                </div>
                            
                                </div>
                            
                            </div>

                            <div className="showcase">
                            
                                <a href="#" className="showcase-img-box">
                                <img src="./assets/images/torta cake pics/event/22.jpg" alt="black floral wrap midi skirt" className="showcase-img"
                                    width="70"/>
                                </a>
                            
                                <div className="showcase-content">
                            
                                <a href="#">
                                    <h4 className="showcase-title">Annyversary celebration</h4>
                                </a>
                            
                                <a href="#" className="showcase-category">cake</a>
                            
                                <div className="price-box">
                                    <p className="price">$76.00</p>
                                    <del>$25.00</del>
                                </div>
                            
                                </div>
                            
                            </div>

                            <div className="showcase">
                            
                                <a href="#" className="showcase-img-box">
                                <img src="./assets/images/torta cake pics/wedding cake/27.jpg" alt="pure garment dyed cotton shirt" className="showcase-img"
                                    width="70"/>
                                </a>
                            
                                <div className="showcase-content">
                            
                                <a href="#">
                                    <h4 className="showcase-title">for engagement</h4>
                                </a>
                            
                                <a href="#" className="showcase-category">cake</a>
                            
                                <div className="price-box">
                                    <p className="price">$68.00</p>
                                    <del>$31.00</del>
                                </div>
                            
                                </div>
                            
                            </div>

                            </div>

                            <div className="showcase-container">

                            <div className="showcase">

                                <a href="#" className="showcase-img-box">
                                <img src="./assets/images/products/jacket-5.jpg" alt="men yarn fleece full-zip jacket" className="showcase-img"
                                    width="70"/>
                                </a>

                                <div className="showcase-content">

                                <a href="#">
                                    <h4 className="showcase-title">MEN Yarn Fleece Full-Zip Jacket</h4>
                                </a>

                                <a href="#" className="showcase-category">Winter wear</a>

                                <div className="price-box">
                                    <p className="price">$61.00</p>
                                    <del>$11.00</del>
                                </div>

                                </div>

                            </div>

                            <div className="showcase">

                                <a href="#" className="showcase-img-box">
                                <img src="./assets/images/products/jacket-1.jpg" alt="mens winter leathers jackets" className="showcase-img"
                                    width="70"/>
                                </a>

                                <div className="showcase-content">

                                <a href="#">
                                    <h4 className="showcase-title">Mens Winter Leathers Jackets</h4>
                                </a>

                                <a href="#" className="showcase-category">Winter wear</a>

                                <div className="price-box">
                                    <p className="price">$32.00</p>
                                    <del>$20.00</del>
                                </div>

                                </div>

                            </div>

                            <div className="showcase">

                                <a href="#" className="showcase-img-box">
                                <img src="./assets/images/products/jacket-3.jpg" alt="mens winter leathers jackets" className="showcase-img"
                                    width="70"/>
                                </a>

                                <div className="showcase-content">

                                <a href="#">
                                    <h4 className="showcase-title">Mens Winter Leathers Jackets</h4>
                                </a>

                                <a href="#" className="showcase-category">Jackets</a>

                                <div className="price-box">
                                    <p className="price">$50.00</p>
                                    <del>$25.00</del>
                                </div>

                                </div>

                            </div>

                            <div className="showcase">

                                <a href="#" className="showcase-img-box">
                                <img src="./assets/images/products/shorts-1.jpg" alt="better basics french terry sweatshorts" className="showcase-img"
                                    width="70"/>
                                </a>

                                <div className="showcase-content">

                                <a href="#">
                                    <h4 className="showcase-title">Better Basics French Terry Sweatshorts</h4>
                                </a>

                                <a href="#" className="showcase-category">Shorts</a>

                                <div className="price-box">
                                    <p className="price">$20.00</p>
                                    <del>$10.00</del>
                                </div>

                                </div>

                            </div>

                            </div>

                            </div>

                            </div>

                            <div className="product-showcase">

                            <h2 className="title">Trending</h2>

                            <div className="showcase-wrapper  has-scrollbar">

                            <div className="showcase-container">

                            <div className="showcase">

                                <a href="#" className="showcase-img-box">
                                <img src="./assets/images/torta cake pics/buruani/14.jpg" alt="running & trekking shoes - white" className="showcase-img"
                                    width="70"/>
                                </a>

                                <div className="showcase-content">

                                <a href="#">
                                    <h4 className="showcase-title">biryani pot</h4>
                                </a>

                                <a href="#" className="showcase-category">biryani</a>

                                <div className="price-box">
                                    <p className="price">$49.00</p>
                                    <del>$15.00</del>
                                </div>

                                </div>

                            </div>

                            <div className="showcase">

                                <a href="#" className="showcase-img-box">
                                <img src="./assets/images/torta cake pics/buruani/15.jpg" alt="trekking & running shoes - black" className="showcase-img"
                                    width="70"/>
                                </a>

                                <div className="showcase-content">

                                <a href="#">
                                    <h4 className="showcase-title">biryani sawan</h4>
                                </a>

                                <a href="#" className="showcase-category">biryani</a>

                                <div className="price-box">
                                    <p className="price">$78.00</p>
                                    <del>$36.00</del>
                                </div>

                                </div>

                            </div>

                            <div className="showcase">

                                <a href="#" className="showcase-img-box">
                                <img src="./assets/images/torta cake pics/buruani/19.jpg" alt="womens party wear shoes" className="showcase-img"
                                    width="70"/>
                                </a>

                                <div className="showcase-content">

                                <a href="#">
                                    <h4 className="showcase-title">for perperson</h4>
                                </a>

                                <a href="#" className="showcase-category">rice</a>

                                <div className="price-box">
                                    <p className="price">$94.00</p>
                                    <del>$42.00</del>
                                </div>

                                </div>

                            </div>

                            <div className="showcase">

                                <a href="#" className="showcase-img-box">
                                <img src="./assets/images/torta cake pics/buruani/17.jpg" alt="sports claw women's shoes" className="showcase-img"
                                    width="70"/>
                                </a>

                                <div className="showcase-content">

                                <a href="#">
                                    <h4 className="showcase-title">five person</h4>
                                </a>

                                <a href="#" className="showcase-category">Sports</a>

                                <div className="price-box">
                                    <p className="price">$54.00</p>
                                    <del>$65.00</del>
                                </div>

                                </div>

                            </div>

                            </div>

                            <div className="showcase-container">

                            <div className="showcase">

                                <a href="#" className="showcase-img-box">
                                <img src="./assets/images/products/sports-6.jpg" alt="air tekking shoes - white" className="showcase-img"
                                    width="70"/>
                                </a>

                                <div className="showcase-content">

                                <a href="#">
                                    <h4 className="showcase-title">Air Trekking Shoes - white</h4>
                                </a>

                                <a href="#" className="showcase-category">Sports</a>

                                <div className="price-box">
                                    <p className="price">$52.00</p>
                                    <del>$55.00</del>
                                </div>

                                </div>

                            </div>

                            <div className="showcase">

                                <a href="#" className="showcase-img-box">
                                <img src="./assets/images/products/shoe-3.jpg" alt="Boot With Suede Detail" className="showcase-img" width="70"/>
                                </a>

                                <div className="showcase-content">

                                <a href="#">
                                    <h4 className="showcase-title">Boot With Suede Detail</h4>
                                </a>

                                <a href="#" className="showcase-category">boots</a>

                                <div className="price-box">
                                    <p className="price">$20.00</p>
                                    <del>$30.00</del>
                                </div>

                                </div>

                            </div>

                            <div className="showcase">

                                <a href="#" className="showcase-img-box">
                                <img src="./assets/images/products/shoe-1.jpg" alt="men's leather formal wear shoes" className="showcase-img"
                                    width="70"/>
                                </a>

                                <div className="showcase-content">

                                <a href="#">
                                    <h4 className="showcase-title">Men's Leather Formal Wear shoes</h4>
                                </a>

                                <a href="#" className="showcase-category">formal</a>

                                <div className="price-box">
                                    <p className="price">$56.00</p>
                                    <del>$78.00</del>
                                </div>

                                </div>

                            </div>

                            <div className="showcase">

                                <a href="#" className="showcase-img-box">
                                <img src="./assets/images/products/shoe-2.jpg" alt="casual men's brown shoes" className="showcase-img" width="70"/>
                                </a>

                                <div className="showcase-content">

                                <a href="#">
                                    <h4 className="showcase-title">Casual Men's Brown shoes</h4>
                                </a>

                                <a href="#" className="showcase-category">Casual</a>

                                <div className="price-box">
                                    <p className="price">$50.00</p>
                                    <del>$55.00</del>
                                </div>

                                </div>

                            </div>

                            </div>

                            </div>

                            </div>

                            <div className="product-showcase">

                            <h2 className="title">Top Rated</h2>

                            <div className="showcase-wrapper  has-scrollbar">

                            <div className="showcase-container">

                            <div className="showcase">

                                <a href="#" className="showcase-img-box">
                                <img src="./assets/images/torta cake pics/brownies'/10.jpg" alt="pocket watch leather pouch" className="showcase-img"
                                    width="70"/>
                                </a>

                                <div className="showcase-content">

                                <a href="#">
                                    <h4 className="showcase-title">chocolate brownies</h4>
                                </a>

                                <a href="#" className="showcase-category">brownies</a>

                                <div className="price-box">
                                    <p className="price">$50.00</p>
                                    <del>$34.00</del>
                                </div>

                                </div>

                            </div>

                            <div className="showcase">

                                <a href="#" className="showcase-img-box">
                                <img src="./assets/images/torta cake pics/brownies'/37.jpg" alt="silver deer heart necklace" className="showcase-img"
                                    width="70"/>
                                </a>

                                <div className="showcase-content">

                                <a href="#">
                                    <h4 className="showcase-title">white & chocolate</h4>
                                </a>

                                <a href="#" className="showcase-category">brownies</a>

                                <div className="price-box">
                                    <p className="price">$84.00</p>
                                    <del>$30.00</del>
                                </div>

                                </div>

                            </div>

                            <div className="showcase">

                                <a href="#" className="showcase-img-box">
                                <img src="./assets/images/torta cake pics/brownies'/38.jpg" alt="titan 100 ml womens perfume" className="showcase-img"
                                    width="70"/>
                                </a>

                                <div className="showcase-content">

                                <a href="#">
                                    <h4 className="showcase-title">wedding favors</h4>
                                </a>

                                <a href="#" className="showcase-category">brownies</a>

                                <div className="price-box">
                                    <p className="price">$42.00</p>
                                    <del>$10.00</del>
                                </div>

                                </div>

                            </div>

                            <div className="showcase">

                                <a href="#" className="showcase-img-box">
                                <img src="./assets/images/torta cake pics/brownies'/45.jpg" alt="men's leather reversible belt" className="showcase-img"
                                    width="70"/>
                                </a>

                                <div className="showcase-content">

                                <a href="#">
                                    <h4 className="showcase-title">strawberry & chocolate</h4>
                                </a>

                                <a href="#" className="showcase-category">brownies</a>

                                <div className="price-box">
                                    <p className="price">$24.00</p>
                                    <del>$10.00</del>
                                </div>

                                </div>

                            </div>

                            </div>

                            <div className="showcase-container">

                            <div className="showcase">

                                <a href="#" className="showcase-img-box">
                                <img src="./assets/images/products/jewellery-2.jpg" alt="platinum zircon classNameic ring" className="showcase-img"
                                    width="70"/>
                                </a>

                                <div className="showcase-content">

                                <a href="#">
                                    <h4 className="showcase-title">platinum Zircon classNameic Ring</h4>
                                </a>

                                <a href="#" className="showcase-category">jewellery</a>

                                <div className="price-box">
                                    <p className="price">$62.00</p>
                                    <del>$65.00</del>
                                </div>

                                </div>

                            </div>

                            <div className="showcase">

                                <a href="#" className="showcase-img-box">
                                <img src="./assets/images/products/watch-1.jpg" alt="smart watche vital plus" className="showcase-img" width="70"/>
                                </a>

                                <div className="showcase-content">

                                <a href="#">
                                    <h4 className="showcase-title">Smart watche Vital Plus</h4>
                                </a>

                                <a href="#" className="showcase-category">Watches</a>

                                <div className="price-box">
                                    <p className="price">$56.00</p>
                                    <del>$78.00</del>
                                </div>

                                </div>

                            </div>

                            <div className="showcase">

                                <a href="#" className="showcase-img-box">
                                <img src="./assets/images/products/shampoo.jpg" alt="shampoo conditioner packs" className="showcase-img"
                                    width="70"/>
                                </a>

                                <div className="showcase-content">

                                <a href="#">
                                    <h4 className="showcase-title">shampoo conditioner packs</h4>
                                </a>

                                <a href="#" className="showcase-category">cosmetics</a>

                                <div className="price-box">
                                    <p className="price">$20.00</p>
                                    <del>$30.00</del>
                                </div>

                                </div>

                            </div>

                            <div className="showcase">

                                <a href="#" className="showcase-img-box">
                                <img src="./assets/images/products/jewellery-1.jpg" alt="rose gold peacock earrings" className="showcase-img"
                                    width="70"/>
                                </a>

                                <div className="showcase-content">

                                <a href="#">
                                    <h4 className="showcase-title">Rose Gold Peacock Earrings</h4>
                                </a>

                                <a href="#" className="showcase-category">jewellery</a>

                                <div className="price-box">
                                    <p className="price">$20.00</p>
                                    <del>$30.00</del>
                                </div>

                                </div>

                            </div>

                            </div>

                            </div>

                            </div>

                            </div>



                            {/* <!--
                            - PRODUCT FEATURED
                            --> */}

                            <div className="product-featured">

                            <h2 className="title">Deal of the day</h2>

                            <div className="showcase-wrapper has-scrollbar">

                            <div className="showcase-container">

                            <div className="showcase">
                            
                            <div className="showcase-banner">
                                <img src="./assets/images/torta cake pics/birthday/20.jpg" alt="shampoo, conditioner & facewash packs" className="showcase-img"/>
                            </div>

                            <div className="showcase-content">
                                
                                <div className="showcase-rating">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star-outline"></ion-icon>
                                <ion-icon name="star-outline"></ion-icon>
                                </div>

                                <a href="#">
                                <h3 className="showcase-title">blue,white & chocolate</h3>
                                </a>

                                <p className="showcase-desc">
                                "Indulging in a Symphony of Blue, White, and Chocolate Bliss! 🍰✨"
                                </p>

                                <div className="price-box">
                                <p className="price">$150.00</p>

                                <del>$200.00</del>
                                </div>

                                <button className="add-cart-btn">add to cart</button>

                                <div className="showcase-status">
                                <div className="wrapper">
                                    <p>
                                    already sold: <b>20</b>
                                    </p>

                                    <p>
                                    available: <b>40</b>
                                    </p>
                                </div>

                                <div className="showcase-status-bar"></div>
                                </div>

                                <div className="countdown-box">

                                <p className="countdown-desc">
                                    Hurry Up! Offer ends in:
                                </p>

                                <div className="countdown">

                                    <div className="countdown-content">

                                    <p className="display-number">360</p>

                                    <p className="display-text">Days</p>

                                    </div>

                                    <div className="countdown-content">
                                    <p className="display-number">24</p>
                                    <p className="display-text">Hours</p>
                                    </div>

                                    <div className="countdown-content">
                                    <p className="display-number">59</p>
                                    <p className="display-text">Min</p>
                                    </div>

                                    <div className="countdown-content">
                                    <p className="display-number">00</p>
                                    <p className="display-text">Sec</p>
                                    </div>

                                </div>

                                </div>

                            </div>

                            </div>

                            </div>

                            <div className="showcase-container">

                            <div className="showcase">

                            <div className="showcase-banner">
                                <img src="./assets/images/torta cake pics/pudding/35.jpg" alt="Rose Gold diamonds Earring" className="showcase-img"/>
                            </div>

                            <div className="showcase-content">

                                <div className="showcase-rating">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star-outline"></ion-icon>
                                <ion-icon name="star-outline"></ion-icon>
                                </div>

                                <h3 className="showcase-title">
                                <a href="#" className="showcase-title">white and chocolate mousse</a>
                                </h3>

                                <p className="showcase-desc">
                                "Indulge in the harmonious blend of velvety white and rich chocolate mousse perfection."
                                </p>

                                <div className="price-box">
                                <p className="price">$1990.00</p>
                                <del>$2000.00</del>
                                </div>

                                <button className="add-cart-btn">add to cart</button>

                                <div className="showcase-status">
                                <div className="wrapper">
                                    <p> already sold: <b>15</b> </p>

                                    <p> available: <b>40</b> </p>
                                </div>

                                <div className="showcase-status-bar"></div>
                                </div>

                                <div className="countdown-box">

                                <p className="countdown-desc">Hurry Up! Offer ends in:</p>

                                <div className="countdown">
                                    <div className="countdown-content">
                                    <p className="display-number">360</p>
                                    <p className="display-text">Days</p>
                                    </div>

                                    <div className="countdown-content">
                                    <p className="display-number">24</p>
                                    <p className="display-text">Hours</p>
                                    </div>

                                    <div className="countdown-content">
                                    <p className="display-number">59</p>
                                    <p className="display-text">Min</p>
                                    </div>

                                    <div className="countdown-content">
                                    <p className="display-number">00</p>
                                    <p className="display-text">Sec</p>
                                    </div>
                                </div>

                                </div>

                            </div>

                            </div>

                            </div>

                            </div>

                            </div>



                            {/* <!--
                            - PRODUCT GRID
                            --> */}

                            <div className="product-main">

                            <h2 className="title">New Products</h2>

                            <div className="product-grid">

                            <div className="showcase">

                            <div className="showcase-banner">

                            <img src="./assets/images/torta cake pics/birthday/12.jpg" alt="Mens Winter Leathers Jackets" width="300" className="product-img default"/>
                            <img src="./assets/images/torta cake pics/birthday/8.jpg" alt="Mens Winter Leathers Jackets" width="300" className="product-img hover"/>

                            <p className="showcase-badge">15%</p>

                            <div className="showcase-actions">

                                <button className="btn-action">
                                <ion-icon name="heart-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="eye-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="repeat-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="bag-add-outline"></ion-icon>
                                </button>

                            </div>

                            </div>

                            <div className="showcase-content">

                            <a href="#" className="showcase-category">jacket</a>

                            <a href="#">
                                <h3 className="showcase-title">Mens Winter Leathers Jackets</h3>
                            </a>

                            <div className="showcase-rating">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star-outline"></ion-icon>
                                <ion-icon name="star-outline"></ion-icon>
                            </div>

                            <div className="price-box">
                                <p className="price">$48.00</p>
                                <del>$75.00</del>
                            </div>

                            </div>

                            </div>

                            <div className="showcase">

                            <div className="showcase-banner">
                            <img src="./assets/images/torta cake pics/birthday/24.jpg" alt="Pure Garment Dyed Cotton Shirt" className="product-img default"
                                width="300"/>
                            <img src="./assets/images/torta cake pics/birthday/28.jpg" alt="Pure Garment Dyed Cotton Shirt" className="product-img hover"
                                width="300"/>

                            <p className="showcase-badge angle black">sale</p>

                            <div className="showcase-actions">
                                <button className="btn-action">
                                <ion-icon name="heart-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="eye-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="repeat-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="bag-add-outline"></ion-icon>
                                </button>
                            </div>
                            </div>

                            <div className="showcase-content">
                            <a href="#" className="showcase-category">shirt</a>

                            <h3>
                                <a href="#" className="showcase-title">Pure Garment Dyed Cotton Shirt</a>
                            </h3>

                            <div className="showcase-rating">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star-outline"></ion-icon>
                                <ion-icon name="star-outline"></ion-icon>
                            </div>

                            <div className="price-box">
                                <p className="price">$45.00</p>
                                <del>$56.00</del>
                            </div>

                            </div>

                            </div>

                            <div className="showcase">

                            <div className="showcase-banner">
                            <img src="./assets/images/torta cake pics/brownies'/10.jpg" alt="MEN Yarn Fleece Full-Zip Jacket" className="product-img default"
                                width="300"/>
                            <img src="./assets/images/torta cake pics/brownies'/43.jpg" alt="MEN Yarn Fleece Full-Zip Jacket" className="product-img hover"
                                width="300"/>

                            <div className="showcase-actions">
                                <button className="btn-action">
                                <ion-icon name="heart-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="eye-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="repeat-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="bag-add-outline"></ion-icon>
                                </button>
                            </div>
                            </div>

                            <div className="showcase-content">
                            <a href="#" className="showcase-category">Jacket</a>

                            <h3>
                                <a href="#" className="showcase-title">MEN Yarn Fleece Full-Zip Jacket</a>
                            </h3>

                            <div className="showcase-rating">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star-outline"></ion-icon>
                                <ion-icon name="star-outline"></ion-icon>
                            </div>

                            <div className="price-box">
                                <p className="price">$58.00</p>
                                <del>$65.00</del>
                            </div>

                            </div>

                            </div>

                            <div className="showcase">

                            <div className="showcase-banner">
                            <img src="./assets/images/torta cake pics/pudding/29.jpg" alt="Black Floral Wrap Midi Skirt" className="product-img default"
                                width="300"/>
                            <img src="./assets/images/torta cake pics/pudding/7.jpg" alt="Black Floral Wrap Midi Skirt" className="product-img hover"
                                width="300"/>

                            <p className="showcase-badge angle pink">new</p>

                            <div className="showcase-actions">
                                <button className="btn-action">
                                <ion-icon name="heart-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="eye-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="repeat-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="bag-add-outline"></ion-icon>
                                </button>
                            </div>
                            </div>

                            <div className="showcase-content">
                            <a href="#" className="showcase-category">skirt</a>

                            <h3>
                                <a href="#" className="showcase-title">Black Floral Wrap Midi Skirt</a>
                            </h3>

                            <div className="showcase-rating">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                            </div>

                            <div className="price-box">
                                <p className="price">$25.00</p>
                                <del>$35.00</del>
                            </div>

                            </div>

                            </div>

                            <div className="showcase">

                            <div className="showcase-banner">
                            <img src="./assets/images/torta cake pics/buruani/19.jpg" alt="Casual Men's Brown shoes" className="product-img default"
                                width="300"/>
                            <img src="./assets/images/torta cake pics/buruani/16.jpg" alt="Casual Men's Brown shoes" className="product-img hover"
                                width="300"/>

                            <div className="showcase-actions">
                                <button className="btn-action">
                                <ion-icon name="heart-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="eye-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="repeat-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="bag-add-outline"></ion-icon>
                                </button>
                            </div>
                            </div>

                            <div className="showcase-content">
                            <a href="#" className="showcase-category">casual</a>

                            <h3>
                                <a href="#" className="showcase-title">Casual Men's Brown shoes</a>
                            </h3>

                            <div className="showcase-rating">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                            </div>

                            <div className="price-box">
                                <p className="price">$99.00</p>
                                <del>$105.00</del>
                            </div>

                            </div>

                            </div>

                            <div className="showcase">

                            <div className="showcase-banner">
                            <img src="./assets/images/torta cake pics/chocolate cake/2.jpg" alt="Pocket Watch Leather Pouch" className="product-img default"
                                width="300"/>
                            <img src="./assets/images/torta cake pics/chocolate cake/25.jpg" alt="Pocket Watch Leather Pouch" className="product-img hover"
                                width="300"/>

                            <p className="showcase-badge angle black">sale</p>

                            <div className="showcase-actions">
                                <button className="btn-action">
                                <ion-icon name="heart-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="eye-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="repeat-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="bag-add-outline"></ion-icon>
                                </button>
                            </div>
                            </div>

                            <div className="showcase-content">
                            <a href="#" className="showcase-category">watches</a>

                            <h3>
                                <a href="#" className="showcase-title">Pocket Watch Leather Pouch</a>
                            </h3>

                            <div className="showcase-rating">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star-outline"></ion-icon>
                                <ion-icon name="star-outline"></ion-icon>
                            </div>

                            <div className="price-box">
                                <p className="price">$150.00</p>
                                <del>$170.00</del>
                            </div>

                            </div>

                            </div>

                            <div className="showcase">

                            <div className="showcase-banner">
                            <img src="./assets/images/torta cake pics/event/40.jpg" alt="Smart watche Vital Plus" className="product-img default"
                                width="300"/>
                            <img src="./assets/images/torta cake pics/event/41.jpg" alt="Smart watche Vital Plus" className="product-img hover" width="300"/>

                            <div className="showcase-actions">
                                <button className="btn-action">
                                <ion-icon name="heart-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="eye-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="repeat-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="bag-add-outline"></ion-icon>
                                </button>
                            </div>
                            </div>

                            <div className="showcase-content">
                            <a href="#" className="showcase-category">watches</a>

                            <h3>
                                <a href="#" className="showcase-title">Smart watche Vital Plus</a>
                            </h3>

                            <div className="showcase-rating">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star-outline"></ion-icon>
                            </div>

                            <div className="price-box">
                                <p className="price">$100.00</p>
                                <del>$120.00</del>
                            </div>

                            </div>

                            </div>

                            <div className="showcase">

                            <div className="showcase-banner">
                            <img src="./assets/images/torta cake pics/birthday/3.jpg" alt="Womens Party Wear Shoes" className="product-img default"
                                width="300"/>
                            <img src="./assets/images/torta cake pics/birthday/26.jpg" alt="Womens Party Wear Shoes" className="product-img hover"
                                width="300"/>

                            <p className="showcase-badge angle black">sale</p>

                            <div className="showcase-actions">
                                <button className="btn-action">
                                <ion-icon name="heart-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="eye-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="repeat-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="bag-add-outline"></ion-icon>
                                </button>
                            </div>
                            </div>

                            <div className="showcase-content">
                            <a href="#" className="showcase-category">party wear</a>

                            <h3>
                                <a href="#" className="showcase-title">Womens Party Wear Shoes</a>
                            </h3>

                            <div className="showcase-rating">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star-outline"></ion-icon>
                                <ion-icon name="star-outline"></ion-icon>
                            </div>

                            <div className="price-box">
                                <p className="price">$25.00</p>
                                <del>$30.00</del>
                            </div>

                            </div>

                            </div>

                            <div className="showcase">

                            <div className="showcase-banner">
                            <img src="./assets/images/products/jacket-1.jpg" alt="Mens Winter Leathers Jackets" className="product-img default"
                                width="300"/>
                            <img src="./assets/images/products/jacket-2.jpg" alt="Mens Winter Leathers Jackets" className="product-img hover"
                                width="300"/>

                            <div className="showcase-actions">
                                <button className="btn-action">
                                <ion-icon name="heart-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="eye-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="repeat-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="bag-add-outline"></ion-icon>
                                </button>
                            </div>
                            </div>

                            <div className="showcase-content">
                            <a href="#" className="showcase-category">jacket</a>

                            <h3>
                                <a href="#" className="showcase-title">Mens Winter Leathers Jackets</a>
                            </h3>

                            <div className="showcase-rating">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star-outline"></ion-icon>
                            </div>

                            <div className="price-box">
                                <p className="price">$32.00</p>
                                <del>$45.00</del>
                            </div>

                            </div>

                            </div>

                            <div className="showcase">

                            <div className="showcase-banner">
                            <img src="./assets/images/products/sports-2.jpg" alt="Trekking & Running Shoes - black" className="product-img default"
                                width="300"/>
                            <img src="./assets/images/products/sports-4.jpg" alt="Trekking & Running Shoes - black" className="product-img hover"
                                width="300"/>

                            <p className="showcase-badge angle black">sale</p>

                            <div className="showcase-actions">
                                <button className="btn-action">
                                <ion-icon name="heart-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="eye-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="repeat-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="bag-add-outline"></ion-icon>
                                </button>
                            </div>
                            </div>

                            <div className="showcase-content">
                            <a href="#" className="showcase-category">sports</a>

                            <h3>
                                <a href="#" className="showcase-title">Trekking & Running Shoes - black</a>
                            </h3>

                            <div className="showcase-rating">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star-outline"></ion-icon>
                                <ion-icon name="star-outline"></ion-icon>
                            </div>

                            <div className="price-box">
                                <p className="price">$58.00</p>
                                <del>$64.00</del>
                            </div>

                            </div>

                            </div>

                            <div className="showcase">

                            <div className="showcase-banner">
                            <img src="./assets/images/products/shoe-1.jpg" alt="Men's Leather Formal Wear shoes" className="product-img default"
                                width="300"/>
                            <img src="./assets/images/products/shoe-1_1.jpg" alt="Men's Leather Formal Wear shoes" className="product-img hover"
                                width="300"/>

                            <div className="showcase-actions">
                                <button className="btn-action">
                                <ion-icon name="heart-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="eye-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="repeat-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="bag-add-outline"></ion-icon>
                                </button>
                            </div>
                            </div>

                            <div className="showcase-content">
                            <a href="#" className="showcase-category">formal</a>

                            <h3>
                                <a href="#" className="showcase-title">Men's Leather Formal Wear shoes</a>
                            </h3>

                            <div className="showcase-rating">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star-outline"></ion-icon>
                            </div>

                            <div className="price-box">
                                <p className="price">$50.00</p>
                                <del>$65.00</del>
                            </div>

                            </div>

                            </div>

                            <div className="showcase">

                            <div className="showcase-banner">
                            <img src="./assets/images/products/shorts-1.jpg" alt="Better Basics French Terry Sweatshorts"
                                className="product-img default" width="300"/>
                            <img src="./assets/images/products/shorts-2.jpg" alt="Better Basics French Terry Sweatshorts"
                                className="product-img hover" width="300"/>

                            <p className="showcase-badge angle black">sale</p>

                            <div className="showcase-actions">
                                <button className="btn-action">
                                <ion-icon name="heart-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="eye-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="repeat-outline"></ion-icon>
                                </button>

                                <button className="btn-action">
                                <ion-icon name="bag-add-outline"></ion-icon>
                                </button>
                            </div>
                            </div>

                            <div className="showcase-content">
                            <a href="#" className="showcase-category">shorts</a>

                            <h3>
                                <a href="#" className="showcase-title">Better Basics French Terry Sweatshorts</a>
                            </h3>

                            <div className="showcase-rating">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star-outline"></ion-icon>
                                <ion-icon name="star-outline"></ion-icon>
                            </div>

                            <div className="price-box">
                                <p className="price">$78.00</p>
                                <del>$85.00</del>
                            </div>

                            </div>

                            </div>

                            </div>

                            </div>

                    </div> 
                
            </div>
        </div>
        </>    
        
    );
}

export default Sidebar;