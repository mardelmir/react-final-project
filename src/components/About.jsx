import '../styles/About.css'

function About() {
    return (
        <div className='about-container'>
            <div className='about-content'>
                <h1>About us!</h1>
                <div className='about-text'>
                    <img src="/images/team2.png" />
                    <p>We are María, José and Carlos; three full-stack developers from Spain. We've been always passionate
                        about barefoot and nature so we decided to follow our passion and do this project together.
                        We build this site working fully remotely and we did our best to put together what we think
                        is a well-rounded webapp. Hope you enjoy it!</p>
                    <p>Welcome to On Ground Footwear!
                        We're a team of three passionate programmers who met during The Bridge bootcamp. Our bond goes beyond a love for technology; it's rooted in our shared belief that minimalist footwear is key to a more comfortable and healthy life.
                        In a world where speed and technology reign, the importance of fundamentals like caring for our feet is often overlooked. That's why we embarked on this project, with a mission to offer high-quality minimalist footwear that allows our customers to experience freedom and comfort with every step.
                        But our concern extends beyond just our customers' well-being; we care deeply about the environment too. We're firm believers in environmental responsibility and strive to minimize our impact on the planet at every stage of our production process.
                        At On Ground Footwear, we're not just selling shoes; we're promoting a more conscious and sustainable lifestyle. Join us on our journey towards a world where comfort, style, and environmental respect go hand in hand.
                        Thank you for joining us on this minimalist adventure!
                        Team On Ground Footwear</p>
                    {/* <img src="../../public/images/team1.png" /> */}
                </div>
            </div>
        </div>
    )
}

export default About