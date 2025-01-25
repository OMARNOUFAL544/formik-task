import React from "react";
import "./index.css";


function App() {

  return (
    <div>
      <section className="showcase">
        <div className="overlay">
          <article>
            <h1> Learn to code by watching others</h1>
            <p>
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.{" "}
            </p>
          </article>

          <article>
            <p className="tag">
              <strong>Try it free 7 days </strong> then $20/mo. thereafter
            </p>

            <form className="form">
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
              />
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
              />

              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <button type="sumbit">Claim your free trial </button>
              <small>
                By clicking the button, you are agreeing to our{" "}
                <span className="red">Terms and Services</span>
              </small>
            </form>
          </article>
        </div>
      </section>
    </div>
  );
}

export default App;