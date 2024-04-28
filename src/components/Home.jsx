import React, { useRef, useState, useEffect } from 'react'
import { carruselData } from '../assets/carruselData.js';

function Home() {
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("li>img")[currentIndex];
        if (imgNode) {
            imgNode.scrollIntoView({
                behavior: "smooth"
            });
        }

    }, [currentIndex])


    return (
        <>
            <div className="carrusel-container">
                <div className="slider-container">
                    <div className="container-images">
                        <h1>SOY UN CARRUSEL</h1>
                        <ul ref={listRef}>
                            {carruselData.map(item => (
                                <li key={item.id}>
                                    <img src={item.imgUrl} width="100px" height="100px" alt="" />
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                </div>
                <section>
                    <div className="banner-1">
                        <h2>Soy el banner 1</h2>
                    </div>
                    <div className="banner-2">
                        <h2>Soy el banner 2</h2>
                    </div>
                </section>
                <section className="carrusel-brands">
                    <div>
                        <h2>soy el carrusel de marcas</h2>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home