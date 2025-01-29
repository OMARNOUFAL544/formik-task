import React, { useState } from "react";
import "./index.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.password.match(/^(?=.*\d).{6,}$/))
      newErrors.password = "Password must be at least 6 characters and contain a number";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div>
      <section className="showcase">
        <div className="overlay">
          <article>
            <h1> Learn to code by watching others</h1>
            <p>
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.
            </p>
          </article>

          <article>
            <p className="tag">
              <strong>Try it free 7 days </strong> then $20/mo. thereafter
            </p>

            <form className="form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <small className="error" style={{ color: "red" }}>{errors.firstName}</small>}

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <small className="error" style={{ color: "red" }}>{errors.lastName}</small>}

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <small className="error" style={{ color: "red" }}>{errors.email}</small>}

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <small className="error" style={{ color: "red" }}>{errors.password}</small>}

              <button type="submit">Claim your free trial</button>
              <small>
                By clicking the button, you are agreeing to our
                <span className="red"> Terms and Services</span>
              </small>
            </form>
          </article>
        </div>
      </section>
    </div>
  );
}

export default App;
