import React from 'react'
import "../style/home.scss"
import vg from "../assets/2.webp"
import{ AiFillGoogleCircle, AiFillAmazonCircle,AiFillYoutube,AiFillInstagram } from "react-icons/ai"
function Home() {
  return (
    <>
      <div className="home" id='home'>
        <main>
          <h1> Techie</h1>
          <p>One Stop Solution</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="graphics"></img>
        <div>
          <p>
            We are the exclusive solution provider for your everyday technical challenges.
            As a leading technology company,
            our primary objective is to enhance problem-solving skills in children.
          </p>
        </div>
      </div>
      <div className="home3" id='about'>
        <div>
          <h1>
            Developers-Section
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Ducimus esse perferendis dolorum ad recusandae! Alias quisquam officiis omnis,
            laudantium culpa ipsam modi deleniti officia, deserunt, tempora sed! Eveniet,
            dolores tenetur?
          </p>
        </div>
      </div>
      <div className="home4" id='brand'>
        <div>
          <h1>Brands</h1>
          <article>
        <div style={{animationDelay:"0.3s"}}>

          <AiFillGoogleCircle/>
          <p>Google</p>
        </div>
        <div style={{animationDelay:"0.5s"}}>

          <AiFillAmazonCircle/>
          <p>Amazon</p>
        </div>
        <div style={{animationDelay:"0.7s"}}>

          <AiFillYoutube/>
          <p>Youtube</p>
        </div>
        <div style={{animationDelay:"1s"}}>

          <AiFillInstagram/>
          <p>Instagram</p>
        </div>
          </article>
        </div>
      </div>
    </>

  )
}

export default Home