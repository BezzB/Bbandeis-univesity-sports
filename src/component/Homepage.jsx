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
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Join the Women Basketball Team </h1>
              <p>
                The women basktball team has had a history of producing some of
                the best Basketballers in the region
              </p>
              <button className="btn btn-primary">SignUp Today</button>
            </div>
            <div className="col-md-6">
              <img src="bball.jpg" alt="Sports Complex" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="location">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Our Location</h2>
              <p>
                Brandeis University Sports Complex is located at the heart of
                the campus, offering easy access to all students and community
                members.
              </p>
            </div>
            <div className="col-md-6">
              <img src="location1.jpg" alt="Location" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="facilities-programs">
        <div className="container">
          <h2>Our Facilities and Programs</h2>
          <div className="row">
            {/* Facility Cards */}
            <div className="col-lg-4 col-md-6">
              <div className="card mb-4">
                <img
                  src="fitnesscenter.jpg"
                  className="card-img-top"
                  alt="Facility 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Fitness Center</h5>
                  <p className="card-text">
                    State-of-the-art equipment for all fitness levels.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card mb-4">
                <img
                  src="swimingpool.jpg"
                  className="card-img-top"
                  alt="Facility 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Swimming Pool</h5>
                  <p className="card-text">
                    Olympic-sized pool with dedicated lanes for swimmers. Join the move today and be part of the move
                  </p>                 
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card mb-4">
                <img
                  src="bballcourt.jpg"
                  className="card-img-top"
                  alt="Facility 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Basketball Court</h5>
                  <p className="card-text">
                    Indoor court for basketball enthusiasts.
                  </p>
                  <p className="card-text">
                    Enjoy Indoor court for basketball enthusiasts.
                  </p>
                </div>
              </div>
            </div>
            {/* Program Cards */}
            <div className="col-lg-4 col-md-6">
              <div className="card mb-4">
                <img
                  src="YogaClasses.jpg"
                  className="card-img-top"
                  alt="Program 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Yoga Classes</h5>
                  <p className="card-text">
                    Relax and rejuvenate with our yoga sessions.
                  </p>
                  <p className="card-text">
                    Relax and rejuvenate with our yoga sessions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card mb-4">
                <img
                  src="PersonalTraining.webp"
                  className="card-img-top"
                  alt="Program 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Personal Training</h5>
                  <p className="card-text">
                    One-on-one sessions with our experienced trainers.                   
                  </p>
                  <p className="card-text">
                    Get Personal Training to get your health on the move.                   
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card mb-4">
                <img
                  src="lainey.solomon.620.jpg"
                  className="card-img-top"
                  alt="Program 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Zumba Classes</h5>
                  <p className="card-text">
                    Dance your way to fitness with energetic Zumba classes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="upcoming-events">
        <div className="container">
          <h2>Upcoming Events</h2>
          <div className="row">
            {/* Event Cards */}
            <div className="col-lg-4 col-md-6">
              <div className="card mb-4">
                <img src="walking-spring-3.jpg" className="card-img-top" alt="Event 1" />
                <div className="card-body">
                  <h5 className="card-title">Summer Fun Run</h5>
                  <p className="card-text">
                    Join us for a 5k run on a beautiful summer morning.
                  </p>
                  <p className="card-text">
                    Be part of the people that are thinkig and runing for their health. 
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Date: July 15, 2023</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card mb-4">
                <img src="yoga-in-the-park.jpg" className="card-img-top" alt="Event 2" />
                <div className="card-body">
                  <h5 className="card-title">Yoga in the Park</h5>
                  <p className="card-text">
                    Relax with a yoga session in the park. You will have the chance to unwind and get well.
                  </p>
                  <p className="card-text">
                   Have the chance to unwind and get well.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Date: August 5, 2023</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card mb-4">
                <img src="Monestime_Vienna_Brandeis.jpg" className="card-img-top" alt="Event 3" />
                <div className="card-body">
                  <h5 className="card-title">Basketball Tournament</h5>
                  <p className="card-text">
                    Compete in our annual basketball tournament.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Date: September 10, 2023
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
