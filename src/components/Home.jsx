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
                behavior:"smooth"
            });
        }

    }, [currentIndex])
    const scrollToImage = (direction) => {
        if(direction == 'prev') {
            setCurrentIndex(curr => {
                const isFirstSlide = currentIndex === 0;
                return isFirstSlide ? 0 : curr -1;
            })
        } else {
            const isLastSlide = currentIndex === data.length - 1;
            if(!isLastSlide) {
                setCurrentIndex(curr => curr +1);
            }
        }
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);

    }

    return (
        <>
            <div className="carrusel-container">
                <div className="slider-container">
                    <div className='leftArrow' onClick={() =>scrollToImage('prev')}>&#10092;</div>
                    <div className='rightArrow' onClick={() =>scrollToImage('next')}>&#10093;</div>
                    <div className="container-images">
                        <h1>SOY UN CARRUSEL</h1>
                        <ul ref={listRef} >
                            {
                            carruselData.map((item) => {
                                return <li key={item.id}>
                                    <img src={item.imgUrl} width={1800}height={500} alt="" />
                                </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className='dots-container'>
                    {
                        carruselData.map((_, idx) => (
                            <div key={idx} className={`dot-container-item ${idx === currentIndex ? "active" : ""}`}
                            onClick={()=> goToSlide(idx)}>
                                &#9865;
                            </div>
                        ))
                    }
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