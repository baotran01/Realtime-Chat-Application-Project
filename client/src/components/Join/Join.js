import React, { useState } from "react";
import { Link } from "react-router-dom";
import './vendor/bootstrap/css/bootstrap.min.css'
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import './vendor/animate/animate.css'
import './vendor/css-hamburgers/hamburgers.min.css'
import './vendor/select2/select2.min.css'
import './css/util.css'
import './css/main.css'
import logo from './images/img-01.png'

export default function SignIn() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt >
              <img src= {logo} alt="IMG" />
            </div>
            <form className="login100-form validate-form">
              <span className="login100-form-title">Real Time Chat App</span>
              <div
                className="wrap-input100 validate-input"
              >
                <input
                  className="input100"
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={(event) => setName(event.target.value)}
                />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-user-circle" aria-hidden="true" />
                </span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Room is required"
              >
                <input
                  className="input100"
                  type="text"
                  name="room"
                  placeholder="Room"
                  onChange={(event) => setRoom(event.target.value)}
                />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true" />
                </span>
              </div>
              <div className="container-login100-form-btn">
                <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                  <button className="login100-form-btn">Join Chat</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
