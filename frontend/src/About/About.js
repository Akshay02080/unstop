import React from "react";
import Slider from "react-slick";
import "./About.css";

function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
   
  };
  return (
    <div className="p-5 ab fs-5">
      <div className="row section">
        <div className="col-6 ">
          <h1>Transforming Accessibility: Introducing Able Glasses</h1>
          <div className="ct1 p-5">
            <p>
              We at Ksham Innovation work to provide smart aid glasses for Deaf,
              Mute and Blind. The Able glasses uses patented bone conduction to
              enable Deaf to Listen, interpret sign language for mute, the
              sensory audio-based information enables the blind to visualize.
              The open ear design makes able glasses a complete smart glasses
              device for everyone.
            </p>
          </div>
        </div>
        <div className="col-6">
          <Slider {...settings}>
            <div className="sub">
              <img
                src="https://png.pngtree.com/png-clipart/20220927/original/pngtree-international-day-of-the-deaf-for-persons-with-disabilities-png-image_8634106.png"
                alt="Carousel  1"
                height="400rem"
              />
            </div>
            <div className="sub">
              <img
                src="https://png.pngtree.com/png-clipart/20201208/original/pngtree-hand-drawn-cartoon-blind-people-world-disability-day-international-day-of-png-image_5540364.jpg"
                alt="Carousel 2"
                height="400rem"
              />
            </div>
            <div className="sub">
              <img
                src="https://png.pngtree.com/png-clipart/20210128/ourmid/pngtree-deaf-mute-people-communicate-better-than-sign-language-png-image_2809675.jpg"
                alt="Carousel  3"
                height="400rem"
              />
            </div>
          </Slider>
        </div>
      </div>

      <div className="seca ">
        <h3>
          "Our mission is to make Information, Education & Entertainment
          accessible through Smart Wearable Solutions."
        </h3>
      </div>
{/* 
      <div className=" m-4 text-center mx-5">
        <div className="row ct2 ms-auto" style={{ width: "50rem" }}>
          <div className="col-md-10">
           
          </div>

          <div className="col-md-2 ">
           
          </div>
        </div>

        <div className="col-md-6 mt-5 ">
          <h1 className="fs-1 text-white mt-5 ">Our Vision</h1>
        </div>
      
        className="ct3 m-4 ms-auto text-center mt-5 p-5"
        style={{ width: "60rem" }}
      >
        
      </div> */}
      <div className="row">
      <div className="c1 col">
            <h1>Our Vision</h1>
            <p>
              "Empowering a World Without Communication Barriers": Our vision is
              to leverage cutting-edge technology to empower individuals with
              hearing, speech, or visual impairments, fostering a more inclusive
              and accessible world. We envision a future where our smart glasses
              become a bridge to communication, independence, and endless
              possibilities, allowing everyone, regardless of their abilities,
              to connect, express themselves, and thrive in our interconnected
              society.
            </p>
      </div>
      <div className=" col i1">
        <img className="rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPVoeYB13rjOsJwH6TrVYZWkehVVLMIqbMSg&s" alt=""/>
      </div>
      </div>



     <div className="row">
     <div className="i2 col">
        <img
          className="float-start m-5 mt-5 p-5 rounded"
          src="https://media.istockphoto.com/id/806315218/photo/futuristic-smart-glasses.jpg?s=612x612&w=0&k=20&c=xupVP05ZM2RiUo-ZI3wZZLern2-X3_5yUt2tRiB3PtI="
        alt=""/>
      </div>
     <div className="c2 col">
      <h1>Empowering Accessibility: Redefining Technology for All</h1>
        <p>
          At Ksham Innovation, we break down barriers and make technology
          accessible to everyone. We believe that everyone deserves the
          opportunity to hear, speak, and navigate the world in real-time,
          regardless of having hearing, speech, or visual impairment.
        </p>
        <p>
          Our technology is designed to empower those with disabilities,
          allowing them to learn, communicate & perform their daily chores with
          greater ease and independence. But our work doesn't stop there. We
          dream & envision creating a smart and safer alternative to traditional
          earbuds and headphones, extending the age during which people may face
          difficulties in hearing.
        </p>
        <p>
          By doing so, we are not only improving the lives of those with hearing
          loss, but also providing a solution for anyone who wants to enjoy
          music, information access in a safer way, and audio content while
          minimizing the risk of damaging their hearing.
        </p>
      </div>
      
     </div>
    </div>
  );
}

export default About;

      
      