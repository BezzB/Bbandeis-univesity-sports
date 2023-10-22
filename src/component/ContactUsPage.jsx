import React from 'react';

function ContactUs() {
  return (
    <div className="contact-us-page">
      <div className="container">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <p><strong>Address:</strong> 123 Sports Complex Avenue, Your City, State 12345</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Email:</strong> info@sportscomplex.com</p>
          <div className="social-media">
            <a href="https://facebook.com/sportscomplex" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="https://twitter.com/sportscomplex" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com/sportscomplex" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="contact-form">
          <h2>Contact Form</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" className="form-control" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="map">
          {/* Embed a map for directions, or provide a link to a mapping service */}
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
