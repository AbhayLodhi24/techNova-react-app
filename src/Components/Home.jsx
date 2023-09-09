import React from 'react'
import "../styles/home.scss";
import vg from "../assets/2.webp";
import {AiFillGoogleCircle , AiFillAmazonCircle , AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
       <main>
        <h1>TechNova</h1>
        <p>Solution to all your problems</p>
       </main>
    </div>
    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>
            "Welcome to Technova, where innovation meets the future. Explore the latest tech trends and gadgets with us. This is where stars of technology shine."
            </p>
        </div>
    </div>
    <div className="home3" id='about'>
        <div>
        <h1>Who we are?</h1>
        <p>Technova is your premier source for all things tech. We are a passionate team of tech enthusiasts dedicated to delivering the latest insights, reviews, and trends in the world of technology. With a finger on the pulse of innovation, we're here to keep you informed and inspired.
        </p>
        </div>
    </div>

    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{animationDelay: "0.3s"}}>
                    <AiFillGoogleCircle />
                    <p>Google</p>
                </div>
                <div style={{animationDelay: "0.5s"}}>
                    <AiFillAmazonCircle />
                    <p>Amazon</p>
                </div>
                <div style={{animationDelay: "0.7s"}}>
                    <AiFillYoutube />
                    <p>YouTube</p>
                </div>
                <div style={{animationDelay: "1s"}}>
                    <AiFillInstagram />
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home