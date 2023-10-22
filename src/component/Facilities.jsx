import React from 'react';

function Facilities() {
  const facilitiesData = [
    {
      name: 'Fitness Center',
      image: 'fitnesscenter.jpg',
      description: 'Our fitness center features state-of-the-art equipment for all fitness levels.',
      hours: 'Open daily from 6:00 AM to 10:00 PM',
      reservations: 'Reservations are not required for the fitness center.',
      rules: 'Please wipe down equipment after use, and practice good gym etiquette.',
    },
    {
      name: 'Swimming Pool',
      image: 'swimingpool.jpg',
      description: 'Our Olympic-sized pool is perfect for both leisure swimming and laps.',
      hours: 'Open for lap swimming from 7:00 AM to 12:00 PM and 5:00 PM to 9:00 PM.',
      reservations: 'Reservations are required for lap swimming sessions.',
      rules: 'Please follow pool safety guidelines, and shower before entering the pool.',
    },
    {
      name: 'Tennis Courts',
      image: 'bballcourt.jpg',
      description: 'Our tennis courts are well-maintained and available for singles and doubles play.',
      hours: 'Open daily from 8:00 AM to 9:00 PM',
      reservations: 'Reservations can be made for court reservations.',
      rules: 'Proper tennis attire is required, and please keep noise levels to a minimum.',
    },
    {
      name: 'Basketball Courts',
      image: 'bballcourt.jpg',
      description: 'Our indoor basketball court is ideal for pickup games and practice.',
      hours: 'Open for open play from 12:00 PM to 9:00 PM.',
      reservations: 'Reservations are not required for open play sessions.',
      rules: 'Please be respectful of other players and maintain a clean court.',
    },
  ];

  return (
    <div className="facilities-page">
      <div className="container">
        <h1>Facilities</h1>
        {facilitiesData.map((facility, index) => (
          <div key={index} className="facility">
            <img src={facility.image} alt={facility.name} />
            <h2>{facility.name}</h2>
            <p>{facility.description}</p>
            <p><strong>Operating Hours:</strong> {facility.hours}</p>
            <p><strong>Reservations:</strong> {facility.reservations}</p>
            <p><strong>Facility Rules:</strong> {facility.rules}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Facilities;
