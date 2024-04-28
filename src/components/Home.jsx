import React, { useRef, useState, useEffect } from 'react'
//import { carruselData } from '../assets/carruselData.js';

function Home() {
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    // Un moment que quiero ver si funciona
    // Otra vez se ha roto :(
    const carruselData = [
        { id: 1, imgUrl: "/src/assets/carrusel-images/323400_9630_XL.jpeg" },
        { id: 2, imgUrl: "/src/assets/carrusel-images/barfussschuhe_titel1_1024x1024.jpeg" },
        { id: 3, imgUrl: "/src/assets/carrusel-images/michal-parzuchowski-zoJgYWHOYaw-unsplash.jpeg" },
        { id: 4, imgUrl: "/src/assets/carrusel-images/Try-On-Event-Vote-Cover-Photo-Anya-Samantha-768x432.jpeg" },
        { id: 5, imgUrl: "/src/assets/carrusel-images/anthony-tori-z3uRzmu22nE-unsplash.jpeg" }
    ]


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
                            {
                                carruselData.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            <img src={item.imgUrl} width="100px" height="100px" alt="" />
                                        </li>
                                    )
                                })
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