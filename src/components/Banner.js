import React from "react";
import shaheerImg from "../assets/Layer-1.png";
import Typewriter from "typewriter-effect";
function Banner() {
  return (
    <div className="row align-items-center">
      <div className="col-md-6">
        <div className="text-area">
          <h1 className="bannerText1">Hello!</h1>
          <h1 className="bannerText2">
            I'm <span>Muhammad Shaheer</span>
          </h1>
          <h2 className="font">
            <Typewriter
              options={{
                strings: ["Frontend Developer", "UI Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

          <div class="app-form-group  mt-5 mr-2">
            <button class="app-form-button">Hire Me</button>
            <button class="app-form-button2">My Works</button>
          </div>
        </div>
      </div>
      <div className="center col-md-3 text-center">
        <div className="">
          <img className="myImg " src={shaheerImg} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
