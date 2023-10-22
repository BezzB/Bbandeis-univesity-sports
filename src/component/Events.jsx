import React from 'react';

function Events() {
  const upcomingEventsData = [
    {
      name: 'Summer Fun Run',
      date: 'Date: July 15, 2023',
      description: 'Join us for a 5k run on a beautiful summer morning. All ages and fitness levels welcome.',
      image: 'YogaClasses.jpg',
    },
    {
      name: 'Yoga in the Park',
      date: 'Date: August 5, 2023',
      description: 'Relax with a yoga session in the park. Bring your yoga mat and find your zen.',
      image: 'spin_class.webp',
    },
    {
      name: 'Basketball Tournament',
      date: 'Date: September 10, 2023',
      description: 'Compete in our annual basketball tournament. Show off your skills and win prizes.',
      image: 'tounerment.jpg',
    },
  ];

  const pastEventsData = [
    {
      name: 'Charity 5K Race',
      date: 'Date: June 12, 2023',
      description: 'Our charity race raised funds for a local cause and had a great turnout.',
      image: 'swimingpool.jpg',
    },
    {
      name: 'Swim-a-Thon',
      date: 'Date: May 20, 2023',
      description: 'Participants swam laps to raise funds for a community organization. A successful event!',
      image: 'walking-spring-3.jpg',
    },
    {
      name: 'Basketball Showdown',
      date: 'Date: March 4, 2023',
      description: 'Our annual basketball showdown featured intense competition and thrilling games.',
      image: 'walking-spring-3.jpg',
    },
  ];

  return (
    <div className="events-page">
      <div className="container">
        <h1>Upcoming Events</h1>
        <div className="row">
          {upcomingEventsData.map((event, index) => (
            <div key={index} className="col-md-4">
              <div className="event">
                <img src={event.image} alt={event.name} className="img-fluid" />
                <h2>{event.name}</h2>
                <p>{event.date}</p>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
        <h1>Past Events</h1>
        <div className="row">
          {pastEventsData.map((event, index) => (
            <div key={index} className="col-md-4">
              <div className="event">
                <img src={event.image} alt={event.name} className="img-fluid" />
                <h2>{event.name}</h2>
                <p>{event.date}</p>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
