import React from 'react';

    function Home() {
      return (
        <>
          <section className="hero">
            <div className="container">
              <h1>Meet Ada & Milo: Your Personal Fitness & Wellness Coaches on WhatsApp</h1>
              <p>Engage in personalized conversations and expert support to achieve your health goals.</p>
              <div style={{marginTop: '20px'}}>
                <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" className="btn">Start Your Journey Now</a>
                <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" className="btn btn-whatsapp">Chat on WhatsApp</a>
              </div>
            </div>
          </section>

          <section className="features">
            <div className="container">
              <h2>Key Features</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h3>Personalized AI Coaching</h3>
                  <p>Get tailored advice and support from our AI companions, Ada and Milo.</p>
                </div>
                <div className="feature-item">
                  <h3>Support from Certified Trainers</h3>
                  <p>Connect with certified trainers for expert guidance and motivation.</p>
                </div>
                <div className="feature-item">
                  <h3>24/7 Availability</h3>
                  <p>Access support and guidance anytime, anywhere.</p>
                </div>
                <div className="feature-item">
                  <h3>Progress Tracking</h3>
                  <p>Monitor your progress and stay motivated with our tracking tools.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="testimonials">
            <div className="container">
              <h2>Testimonials</h2>
              <div className="testimonial-item">
                <p>"Fit Talks has transformed my approach to fitness. The AI coaches are incredibly helpful!"</p>
                <p>- Jane D.</p>
              </div>
              <div className="testimonial-item">
                <p>"I love the flexibility and support I get from Fit Talks. It's like having a personal trainer in my pocket."</p>
                <p>- Mark S.</p>
              </div>
              <div className="testimonial-item">
                <p>"The combination of AI and human trainers is fantastic. I've never felt so supported on my wellness journey."</p>
                <p>- Emily L.</p>
              </div>
            </div>
          </section>
        </>
      );
    }

    export default Home;
