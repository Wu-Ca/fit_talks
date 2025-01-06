import React from 'react';

    function Features() {
      return (
        <section className="features">
          <div className="container">
            <h2>Our Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>Ada & Milo: Your AI Companions</h3>
                <p>Our AI coaches, Ada and Milo, are designed to provide personalized guidance and support. They're available 24/7 to answer your questions and help you stay on track.</p>
                <img src="https://placehold.co/100x100/A6E22E/FFFFFF?text=AI" alt="AI Icon" style={{maxWidth: '100px', height: 'auto', display: 'block', margin: '10px auto'}} />
              </div>
              <div className="feature-item">
                <h3>Human Trainer Support</h3>
                <p>Connect with our certified trainers for expert advice and motivation. They're here to provide personalized plans and support you on your journey.</p>
                <img src="https://placehold.co/100x100/00C2D1/FFFFFF?text=Trainer" alt="Trainer Icon" style={{maxWidth: '100px', height: 'auto', display: 'block', margin: '10px auto'}} />
              </div>
              <div className="feature-item">
                <h3>Progress Tracking</h3>
                <p>Monitor your progress and stay motivated with our tracking tools. We'll help you visualize your achievements and stay on track to reach your goals.</p>
                <img src="https://placehold.co/100x100/A6E22E/FFFFFF?text=Progress" alt="Progress Icon" style={{maxWidth: '100px', height: 'auto', display: 'block', margin: '10px auto'}} />
              </div>
              <div className="feature-item">
                <h3>Personalized Plans</h3>
                <p>Get a fitness plan tailored to your specific needs and goals. Our AI and human trainers work together to create a plan that's right for you.</p>
                <img src="https://placehold.co/100x100/00C2D1/FFFFFF?text=Plan" alt="Plan Icon" style={{maxWidth: '100px', height: 'auto', display: 'block', margin: '10px auto'}} />
              </div>
            </div>
          </div>
        </section>
      );
    }

    export default Features;
