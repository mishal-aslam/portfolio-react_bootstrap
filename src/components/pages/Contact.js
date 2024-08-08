import React from "react";
import Particle from "../../Particle";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import Header from "../Header";
import '../../styles/contact.css'

const Contact = () => {
  return (
    <>
      <Particle />
      <div className="container  lopppp">
        <Header />

        <div class="">
          <div class="container">
            <div class="">
              <div class="screen-body">
                <div class="screen-body-item left">
                  <div class="app-title">
                    <span >Let's Chat. <br/> Tell me about your <br className="project-br" /> Project. </span>
                    {/* <span>Tell me about your </span>
                    <span>Project. </span> */}
                  </div>
                  <div class="app-create">Let's create something together</div>
                  <div class="app-contact">
                    <span class="icon-contact"><LiaPhoneVolumeSolid /></span>
                   +92 319 3865337
                  </div>
                  <div class="app-contact">
                    <span class="icon-contact"><MdEmail  /></span>
                   mishalaslam17@gmail.com
                  </div>
                </div>
                <div class="screen-body-item">
                  <div class="app-form">
                    <div class="app-form-group">
                      <input class="app-form-control" placeholder="NAME" />
                    </div>
                    <div class="app-form-group">
                      <input class="app-form-control" placeholder="EMAIL" />
                    </div>
                    <div class="app-form-group">
                      <input
                        class="app-form-control"
                        placeholder="CONTACT NO"
                      />
                    </div>
                    <div class="app-form-group message">
                      <input class="app-form-control" placeholder="MESSAGE" />
                    </div>
                    <div class="app-form-group buttons">
                      <button class="app-form-button">CANCEL</button>
                      <button class="app-form-button">SEND</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
