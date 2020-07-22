import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <img className="home_image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="" />
            <div className="home_row">
                <Product
                    id="12314"
                    title="The Start Up: How Constant Innovation Creates Radically Successful Business Paperback"
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                    price={15.96}
                    rating={4}
                />
                <Product
                    id="12315"
                    title="Kenwood kMix Stand Mixer, 5 Litre, 1000 W, Color: Red, 220V"
                    image="https://m.media-amazon.com/images/I/81O+GNdkzKL._AC_UY218_.jpg"
                    price={7.96}
                    rating={5}
                />
            </div>
            <div className="home_row">
                <Product
                    id="12316"
                    title="Samsung 24-inch (54.78cm) Curved Gaming Monitor- Full HD, AMD Free Sync, 144 Hz Refresh Rate- LC24RG50FQWXXL"
                    image="https://images-na.ssl-images-amazon.com/images/I/71dGb%2B7qhQL._SX679_.jpg"
                    price={10.3}
                    rating={5}
                />
                <Product
                    id="12318"
                    title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)"
                    image="https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"
                    price={11.96}
                    rating={5}
                />
                <Product
                    id="12317"
                    title="Redmi Note 9 Pro (Interstellar Black, 4GB RAM, 64GB Storage) - Latest Snapdragon 720G & Gorilla Glass 5 Protection"
                    image="https://m.media-amazon.com/images/I/81-gD8hlE8L._AC_UY218_.jpg"
                    price={15.96}
                    rating={5}
                />
            </div>
            <div className="home_row">
                <Product
                    id="12310"
                    title="Apple iPhone 11 (64GB) - White"
                    image="https://images-na.ssl-images-amazon.com/images/I/51o5RmQtroL._SX679_.jpg"
                    price={11.96}
                    rating={5}
                />
            </div>
        </div>
    )
}

export default Home;
