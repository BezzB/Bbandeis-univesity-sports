import React from "react";

function Homepage() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Welcome to Brandeis University Sports Complex</h1>
              <p>Your Destination for Fitness and Sports Excellence</p>
              <button className="btn btn-primary">Join Now</button>
            </div>
            <div className="col-md-6">
              <img
                src="welcome.jpeg"
                alt="Sports Complex"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="facilities">
        {/* Facilities Section Content */}
        <div className="container">
          <h2>Our Facilities</h2>
          {/* Facility Cards (Bootstrap Cards) */}
        </div>
      </section>

      <section className="programs">
        {/* Programs Section Content */}
        <div className="container">
          <h2>Our Programs</h2>
          {/* Program Cards (Bootstrap Cards) */}
        </div>
      </section>
    </div>
  );
}

export default Homepage;
