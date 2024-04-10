import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="con">
      
      
      <div className="container f1">
        <h1 className="text-light py-3">Contact Us</h1>
        <form action="#" method="POST">
          <div className="form-group">
            <input
              type="text"
              id="first-name"
              name="first-name"
              placeholder="First Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="last-name"
              name="last-name"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Mobile Number"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              id="comment"
              name="comment"
              placeholder="What do you want to tell us"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-warning rounded ">
            Submit
          </button>
        </form>
      </div>
      <div className="row t">
        <div className="text-center t1 col-md-8">
        <h1>Your satisfaction is our number one focus</h1>
        <h1>Please fill in your details above and one of our friendly team members will be in touch shortly.</h1>
        </div>
        <div className="t2 col-md-4 ">
        <h2>Call us : +91 9373124725</h2>
        <h2>Email: kshaminnovation@gmail.com</h2>
        </div>
 

      </div>
    </div>
  );
}

export default Contact;
