import { useRef, useState, useEffect } from 'react'
import { carruselData } from '../utils/carruselData.js';

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
            if (!isLastSlide) { setCurrentIndex(curr => curr + 1) }
        }
    }

    const goToSlide = (slideIndex) => setCurrentIndex(slideIndex)

    return (
        <>
            <section className='carrusel-container'>
                <div className='slider-container'>
                    <div className='leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
                    <div className='rightArrow' onClick={() => scrollToImage('next')}>&#10093;</div>
                    <ul className='container-images' ref={listRef} >
                        {carruselData.map(item =>
                            <li key={item.id} className='image'>
                                <img src={item.imgUrl} alt='Carrusel image' className='image' />
                            </li>
                        )}
                    </ul>
                </div>
                <div className='dots-container'>
                    {carruselData.map((e, idx) => (
                        <div key={idx} className={`dot-container-item ${idx === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(idx)}>
                            &#11044;
                        </div>
                    ))
                    }
                </div>
            </section>
            <div className='h1-use'>
                <h2>LIFESTYLE | HIKING | OFF ROAD | HARD TERRAIN </h2>
            </div>
            <section className='banners'>
                <div className='banner-1'>
                    <div >
                        {/* <img src="../public/images/Try-On-Event-Vote-Cover-Photo-Anya-Samantha-768x432.jpeg" alt="" /> */}
                        <h2>POPULAR PRODUCTS</h2>
                        <p>Our most valued footwear</p>
                        <div className='shop-now'>
                            <p>shop now!</p>
                        </div>
                    </div>
                </div>
                <div className='banner-2'>
                    <div>
                        <h2>ENVIRONMENT</h2>
                        <h3>We care our planet</h3>
                        <div className='learn-more'>
                            <p>Learn more!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="carrusel-brands-section">
                <h2>OUR BRANDS</h2>
                <div className='carrusel-brands-container'>
                    <h2>soy el carrusel de marcas</h2>
                </div>
            </section>
        </>
    )
}

export default Home