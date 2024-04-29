import { useRef, useState, useEffect } from 'react'
import { carruselData } from '../assets/carruselData.js';

function Home() {
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll('li>img')[currentIndex];
        if (imgNode) {
            const scrollOptions = {
                top: imgNode.offsetTop - (listNode.offsetHeight - imgNode.offsetHeight) / 2,
                behavior: 'smooth' 
            };
            listNode.scrollTo(scrollOptions);
            // imgNode.scrollIntoView({
            //     behavior: 'smooth'
            // });
        }
    }, [currentIndex])

    const scrollToImage = (direction) => {
        if (direction == 'prev') {
            setCurrentIndex(curr => {
                const isFirstSlide = currentIndex === 0;
                return isFirstSlide ? 0 : curr - 1;
            })
        } else {
            const isLastSlide = currentIndex === carruselData.length - 1;
            if (!isLastSlide) {
                setCurrentIndex(curr => curr + 1);
            }
        }
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    return (
        <>
            <section className='carrusel-container'>
                <div className='slider-container'>
                    <div className='leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
                    <div className='rightArrow' onClick={() => scrollToImage('next')}>&#10093;</div>
                    <ul className='container-images' ref={listRef} >
                        {carruselData.map((item) =>
                            <li key={item.id}
                                className='image'
                                >
                                <img src={item.imgUrl} alt='Carrusel image' className='image'/>
                                {/* <img src={item.imgUrl} width={1800} height={500} alt=' /> */}
                            </li>
                        )}
                    </ul>
                </div>
                <div className='dots-container'>
                    {carruselData.map((_, idx) => (
                        <div key={idx} className={`dot-container-item ${idx === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(idx)}>
                            &#9865;
                        </div>
                    ))
                    }
                </div>
            </section>
            <section className='banners'>
                <div className='banner-1'>
                    <h2>Soy el banner 1</h2>
                </div>
                <div className='banner-2'>
                    <h2>Soy el banner 2</h2>
                </div>
            </section>
            <section className="carrusel-brands">
                <div>
                    <h2>soy el carrusel de marcas</h2>
                </div>
            </section>
        </>
    )
}

export default Home