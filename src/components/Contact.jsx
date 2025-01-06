import React from 'react';

    function Contact() {
      return (
        <section className="contact-form">
          <div className="container">
            <h2>Join Fit Talks Now</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label htmlFor="goals">Fitness Goals (Optional)</label>
                <textarea id="goals" placeholder="Your Fitness Goals"></textarea>
              </div>
              <button type="submit" className="btn">Join Fit Talks Now</button>
            </form>
          </div>
        </section>
      );
    }

    export default Contact;
