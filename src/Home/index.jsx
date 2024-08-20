import { useState } from "react";
import Header from "../components/Header";
import { Carousel } from 'react-responsive-carousel';
export default function Home(){
    return(
        <><>
            <Header />
            <p>SYMPHONY</p>
        </><Carousel
            infiniteLoop
            useKeyboardArrows
            autoPlay
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            dynamicHeight
        >
                <div>
                    <img src="" alt="Slide 1" />
                </div>

            </Carousel></>
    );

}