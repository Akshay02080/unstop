import React from "react";
import { useNavigate } from "react-router-dom";
import "../About/About.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="p-5 ab">
      <div
        className=" d-flex justify-content-between mx-5  "
        style={{ marginBottom: "10rem" }}
      >
        <div>
          <div className="">
            <h1 className="fw-bold display-1 ">World's 1st</h1>
            <h1 className="fw-bold display-1">Smart Aid</h1>
            <h1 className="fw-bold display-1">Glasses for</h1>
            <h1 className="fw-bold display-1 text-light">
              Deaf . Blind . Mute ^_^
            </h1>
          </div>
          <button
            className="btn btn-warning rounded-pill fs-2 fw-bold p-3 mt-5 text-white"
            onClick={() => {
              navigate("/Contact");
            }}
          >
            Get Early Access
          </button>
        </div>
        <div>
          <img
            src="https://i.pinimg.com/originals/44/5a/85/445a85a18d773894d3abd83645b3291d.gif"
            alt=""
            className="rounded-pill "
          />
        </div>
      </div>
      <h1
        className="display-2 text-center fw-semibold "
        style={{ marginBottom: "5rem" }}
      >
        Why Able Innovation Exists
      </h1>
      <div className="row mb-5 ">
        <div className="col">
          <video
            src="https://kshaminnovation.in/static/media/anim.0ae96bd64f4245a807ea.mp4"
            controls
            autoPlay
            loop
            height="400rem"
            width="700rem"
          ></video>
        </div>
        <div className="col fs-3 p-4 text-light ">
          <ul>
            <li>
              Globally, there are over 680 million people who are deaf, hard of
              hearing, mute, or blind.
            </li>
            <li>
              India alone is home to more than 80 million individuals belonging
              to these diverse disability groups.
            </li>
            <li>
              Sadly, an estimated 90% of these individuals lack access to
              education and often face poverty.
            </li>
            <li>
              or these individuals, accessing essential information, education,
              and communication channels remains a significant challenge.
            </li>
          </ul>
        </div>
      </div>
      <div className="row " style={{ marginTop: "10rem" }}>
        <div className="col fs-4 ">
          <div className="card bg-dark p-2 " style={{ width: "330px" }}>
            <div className="card-body">
              <h4 className="card-title text-warning text-center">
                Glasses for Deaf & Hard of Hearing
              </h4>
              <ul className="text-white">
                <li>Patented Dome Bone Conduction Transducer</li>
                <li>Arrays of Microphones</li>
                <li>Bluetooth & Rechargeable</li>
              </ul>
            </div>
          </div>
          <div
            className="card bg-dark p-2 mt-5 "
            style={{ width: "330px", marginLeft: "12rem" }}
          >
            <div className="card-body">
              <h4 className="card-title text-warning text-center">
                Glasses for Deaf & Hard of Hearing
              </h4>
              <ul className="text-white">
                <li>Patented Dome Bone Conduction Transducer</li>
                <li>Arrays of Microphones</li>
                <li>Bluetooth & Rechargeable</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col p-3 rounded fs-4 text-center mt-5 mb-5 text-white">
          <h1 className="mt-5">Our Innovation</h1>
          <p>
            Able glasses aims to provide smart aid glasses for Deaf, Mute and
            Blind.The Able glasses uses patented bone conduction to enable Deaf
            to Listen, interpret signs & acts as voice assist tool for the mute,
            the sensory audio-based information enables the blind to visualize.
            The open ear design makes able glasses a complete smart glasses
            device for everyone
          </p>
          <button
            className="btn btn-outline-light fs-4"
            onClick={() => {
              navigate("/About");
            }}
          >
            About us
          </button>
        </div>
        <div className="col fs-4">
          <div
            className="card bg-dark p-2 "
            style={{ width: "330px", marginLeft: "15rem" }}
          >
            <div className="card-body">
              <h4 className="card-title text-warning text-center">
                Glasses for Deaf & Hard of Hearing
              </h4>
              <ul className="text-white">
                <li>Patented Dome Bone Conduction Transducer</li>
                <li>Arrays of Microphones</li>
                <li>Bluetooth & Rechargeable</li>
              </ul>
            </div>
          </div>
          <div
            className="card bg-dark p-2 mt-5 "
            style={{ width: "330px", marginLeft: "5rem" }}
          >
            <div className="card-body">
              <h4 className="card-title text-warning text-center">
                Glasses for Deaf & Hard of Hearing
              </h4>
              <ul className="text-white">
                <li>Patented Dome Bone Conduction Transducer</li>
                <li>Arrays of Microphones</li>
                <li>Bluetooth & Rechargeable</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h1
        className="text-center display-4 fw-bold "
        style={{ marginTop: "5rem" }}
      >
        How Able Glasses Work
      </h1>
      <div class="d-flex justify-content-center mt-5">
        <video
          src="https://kshaminnovation.in/static/media/vdo.66e3521b4938cfc54110.mp4"
          controls
          autoPlay
          loop
          height="500rem"
        ></video>
      </div>
      <h1 className="text-center mt-5 display-4 fw-bold mb-5">Our Supportes</h1>
      <div className="row">
           
        <div className="col">
          <img src="https://kshaminnovation.in/static/media/supp1.90743b57533127f65b96.png" width="300px" height="300px"/>
        </div>
        <div className="col">
        <img src="https://cdn.telanganatoday.com/wp-content/uploads/2022/04/Google-multisearch-tool-to-help-users-search-with-photos.jpg"  width="300px" height="300px"/>
        </div>
        <div className="col">
        <img src="https://kshaminnovation.in/static/media/supp5.c62fb58826198faf2250.png"  width="300px" height="300px"/>
        </div>
        <div className="col">
        <img src="https://bsmedia.business-standard.com/_media/bs/img/about-page/1562575696.png"  width="300px" height="300px"/>
        </div>
        <div className="col">
        <img src="https://kshaminnovation.in/static/media/supp4.8d19f8fcd6e18c93abc4.png"  width="300px" height="300px"/>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
