// import React from 'react'
// import './Home.css'
// import Product from './Product'
// import Carousel from "react-bootstrap/Carousel";
// import './App.css'
// function Home() {
//     return (
//         <div className="home">
//             <div className="home__container">
//                 <Carousel interval='4000' className="home__image">
//                     <Carousel.Item>
//                         <img src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YmM4ZGRiNGQt/YmM4ZGRiNGQt-MmY2NWM1MzMt-w3000._CB669575617_.jpg" alt="" />

//                     </Carousel.Item>
//                     <Carousel.Item>
//                         <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/MzBiNjIyYjgt/MzBiNjIyYjgt-NGMzNDJiY2Et-w3000._CB669025630_.jpg" alt="" />
//                     </Carousel.Item>
//                     <Carousel.Item>
//                         <img src="https://images-na.ssl-images-amazon.com/images/G/01/img21/events/grfww/traffic_drivers/GRFWW_GW_Desktop_MemorialDayDeals_2x-3000x1200._CB661646560_.jpg" alt="" />
//                     </Carousel.Item>
//                 </Carousel>
//                 {/* <img
//                     className="home__image"
//                     src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
//                     alt=""
//                 /> */}
//                 <div className="home__row">
//                     <Product id="12321341"
//                         title="New Apple iMac with Retina 5K Display (27-inch, 8GB RAM, 256GB SSD Storage)"
//                         price={1669}
//                         rating={5}
//                         image="https://m.media-amazon.com/images/I/71KR2i6-WaL._AC_UY218_.jpg" />
//                     <Product id="49538094"
//                         title="Epic Racing Professional Gaming Chair with Adjustable Height, Full Recline and Headrest/Lumbar Support"
//                         price={159.99}
//                         rating={4}
//                         image="https://m.media-amazon.com/images/I/71t8UBllIgL._AC_UL320_.jpg" />

//                 </div>
//                 <div className="home__row">
//                     <Product id="4903850"
//                         title="New Apple Watch Series 6 (GPS, 40mm) - Space Gray Aluminum Case with Black Sport Band"
//                         price={499.99}
//                         rating={4}
//                         image="https://images-na.ssl-images-amazon.com/images/I/71yOGVLGWpL._AC_SX679_.jpg" />
//                     <Product id="99903850"
//                         title="4K 60FPS Video Camera Camcorder Ultra HD 48MP YouTube Camera Vlogging WiFi Digital Camera Recorder IPS Touch Screen"
//                         price={139.99}
//                         rating={4}
//                         image="https://m.media-amazon.com/images/I/81eUw7H78UL._AC_UY218_.jpg" />
//                     <Product id="3254354345"
//                         title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
//                         price={598.99}
//                         rating={4}
//                         image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg" />
//                 </div>
//                 <div className="home__row">
//                     <Product id="90829332"
//                         title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
//                         price={1094.98}
//                         rating={4}
//                         image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg" />
//                     <Product
//                         id="8903851"
//                         title="SAMSUNG 85-inch Class QLED Q950T Series  Smart TV with Alexa Built-in (QN85Q950TSFXZA, 2020 Model"
//                         price={999.99}
//                         rating={4}
//                         image="https://images-na.ssl-images-amazon.com/images/I/71-LV9vYPmL._AC_SX679_.jpg
//                         "
//                     />
//                     {/* <Product
//                         id="23445930"
//                         title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
//                         price={98.99}
//                         rating={5}
//                         image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
//                     /> */}


//                 </div>
//             </div>
//         </div >
//     )
// }

// export default Home
import React from "react";
import "./Home.css";
import Product from "./Product";
import Carousel from "react-bootstrap/Carousel";



function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <div className="home_image">
                    <Carousel interval="4000" home_images >
                        <Carousel.Item>
                            <img
                                className=" home_image "

                                src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/TV/SSYD_S1_GWBleedingHero_1500x600_POST_Final_noLocale_PVD7312._CB665757288_.jpg"
                                alt=""
                            //  style={{ height: "100vh" }}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className=" home_image "
                                src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/MGY0YzMzNTMt/MGY0YzMzNTMt-YzM0NmY3MjAt-w1500._CB664905557_.jpg"
                                alt=""
                            // style={{ height: "100vh" }}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className=" home_image "
                                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZmVhMDM4ZmYt/ZmVhMDM4ZmYt-OTdjNmEzYzMt-w1500._CB668936041_.jpg"
                                alt=""
                            // style={{ height: "100vh" }}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className=" home_image"
                                src="https://images-na.ssl-images-amazon.com/images/G/01/BISS/Avalon/GW_DesktopHeroTall_Dx_1500x600_EN._CB665443657_.jpg"
                                alt=""
                            // style={{ height: "100vh" }}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="home_image"
                                src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/BTS/Homepage/BTS_HP_Desktop_Phase3_1x-1500x600._CB667984820_.jpg"
                                alt=""
                            // style={{ height: "100vh" }}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className=" home_image"
                                src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/Other/EMPR_21_GWBleedingHero_1500x600_Final_en-US_PVD7263_UGGR-THBY._CB664773569_.jpg"

                                alt=""
                            // style={{ height: "100vh" }}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="home_image"
                                src="https://images-na.ssl-images-amazon.com/images/G/01/xcm/brand_truths/6_15_Updtae/2021_06_17_SmallBusiness_Amazon_GRD_DesktopHero_1x._CB666497547_.jpg"
                                alt=""
                            // style={{ height: "100vh" }}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="home_image"
                                src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/TV/HKTG_S2_GWBleedingHero_1500x600_POST_Final_en-US_DOT0071._CB666548404_.jpg"
                                alt=""
                            // style={{ height: "100vh" }}
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                {/* <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                /> */}
                <div className="top-container ">
                    <div className="le">
                        <h4 className="description">"Cabinet,Counter"</h4>

                        <img src="https://images-na.ssl-images-amazon.com/images/I/81r26CYoj4L._AC_SY355_.jpg" />
                        <a className="links" href="#">

                            Visit the WOBANE Store
                        </a>
                    </div>

                    <div className="le">
                        <h4 className="description">"The Pursuit of Love"</h4>

                        <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/TV/TPOL_S1_DashboardCard_379x304_PRE_Final_noLocale_DOT0084._SY304_CB666234560_.jpgg" />
                        <a className="links" href="#">
                            Watch trailer on Prime Video
                        </a>
                    </div>

                    <div className="le">
                        <h4 className="description">Get styled for summer</h4>
                        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/Y2E4YjY3ZjIt/Y2E4YjY3ZjIt-MjU4N2E0ZDYt-w379._SY304_CB664801210_.jpg" />
                        <a className="links" href="#">
                            Try Personal Shopper
                        </a>
                    </div>
                </div>


                <div className="home__row">
                    <Product
                        id="12321341"
                        title="
                        SAMSUNG Galaxy S21 Ultra 5G | Factory Unlocked Android Cell Phone | US Version 5G Smartphone | Pro-Grade Camera, 8K Video,...
                "
                        price={899.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71bdE2zv5+S._AC_UY218_.jpg
                        "
                    />
                    <Product
                        id="49538094"
                        title="18 x 18 Decorative Pillow Cover Sets for Pillows - Couch Sofa Bed,Faux Leather Black and White Pillow Covers"
                        price={26.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/51JGVvRKi+L._AC_SY200_.jpg
                        "
                    />

                    <Product
                        id="12321341"
                        title="Homchwell 9-Tier Wooden Plant Stand for Indoor & Outdoor,Tiered Plant Ladder, 47.2-inch Height,Stylish Plant"
                        price={48.44}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51xLh5xa5JL.jpg

                        "
                    />
                    <Product
                        id="12321341"
                        title="2020 Apple MacBook Pro with Intel Processor (13-inch, 16GB RAM, 1TB SSD Storage) - Space Gray"
                        price={1849.00}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71bElkQQ7LL._AC_UY218_.jpg

                        "
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Apple Watch Series 6 (GPS + Cellular, 40mm) - (Product) RED Aluminum Case with RED Sport Band (Renewed)"
                        price={349.99}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/81P929A4TcL._AC_UY218_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={36.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/51S-AfbJDkL._AC_SR160,160_.jpg"
                    />
                    <Product
                        id="3254354345"
                        title="TOBBI 12V Kids Ride On Truck Toys with Remote Control Electric Vehicles with 3 Speeds for Boys Girls in Rose Red"
                        price={339.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71G9rHDKDdL._AC_SX679_.jpg"
                    />
                    <Product
                        id="3254354345"
                        title="Mr IRONSTONE L-Shaped Desk 50.8 computer corner Desk,Home"
                        price={69.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71uBn67o-YL._AC_SX450_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />


                </div>
                <div>

                </div>
            </div>
        </div>
    );
}

export default Home;
