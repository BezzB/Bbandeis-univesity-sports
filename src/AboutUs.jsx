import React from 'react';

function AboutUs() {
  const history = `
    Brandeis University Sports Complex has a rich history that dates back to its founding in 1970. 
    We have been a hub for sports and fitness enthusiasts, fostering a culture of wellness and excellence.
  `;

  const mission = `
    Our mission is to provide a world-class fitness and sports experience for our community, 
    promoting physical well-being and a sense of community.
  `;

  const values = `
    We are committed to the values of health, inclusivity, excellence, and community. 
    These principles guide everything we do.
  `;

  const team = [
    {
      name: 'Henry Haggins',
      role: 'Director',
      image: 'BarryHenry.jpg',
    },
    {
      name: 'Jame Smith Craige',
      role: 'Fitness Trainer',
      image: 'henrybarry.jpg',
    },
    {
      name: 'Michael Johnson',
      role: 'Swimming Coach',
      image: 'Henry-Barry-2.jpg',
    },
  ];

  return (
    <div className="about-us-page">
      <div className="container">
        <h1>About Us</h1>
        <div className="about-section">
          <h2>Our History</h2>
          <p>{history}</p>
          <h2>Our Mission</h2>
          <p>{mission}</p>
          <h2>Our Values</h2>
          <p>{values}</p>
        </div>
        <div className="team-section">
          <h2>Meet the Team</h2>
          <div className="row">
            {team.map((member, index) => (
              <div key={index} className="col-md-4">
                <div className="team-member text-center">
                  <img src={member.image} alt={member.name} className="img-fluid rounded-circle" />
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
