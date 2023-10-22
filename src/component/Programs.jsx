import React from 'react';

function Programs() {
  const programsData = [
    {
      name: 'Fitness Classes',
      schedule: 'View Class Schedule',
      pricing: 'Pricing: $15 per class or $100 for a monthly pass.',
      registration: 'Register online or at the front desk.',
      testimonials: [
        {
          author: 'John D.',
          text: 'I love the variety of fitness classes available. The instructors are fantastic!',
        },
        {
          author: 'Sarah M.',
          text: 'The fitness classes have helped me stay in shape and meet new friends.',
        },
      ],
    },
    {
      name: 'Swim Lessons',
      schedule: 'View Swim Lesson Schedule',
      pricing: 'Pricing: $30 per lesson or $200 for a package of 8 lessons.',
      registration: 'Register online or at the front desk.',
      testimonials: [
        {
          author: 'Michael P.',
          text: 'My childs swim skills have improved significantly. Highly recommended!',
        },
        {
          author: 'Emily S.',
          text: 'The swim instructors are patient and make learning fun.',
        },
      ],
    },
    {
      name: 'Youth Sports Leagues',
      schedule: 'View Youth Sports League Schedule',
      pricing: 'Pricing: Varies by league and age group.',
      registration: 'Register online or contact the league coordinator.',
      testimonials: [
        {
          author: 'Jason L.',
          text: 'The youth sports leagues have been a great way for my kids to stay active and make friends.',
        },
        {
          author: 'Lisa H.',
          text: 'Well-organized leagues with emphasis on skill development.',
        },
      ],
    },
  ];

  return (
    <div className="programs-page">
      <div className="container">
        <h1>Programs and Classes</h1>
        {programsData.map((program, index) => (
          <div key={index} className="program">
            <h2>{program.name}</h2>
            <p><strong>Schedule:</strong> <a href={program.schedule} target="_blank" rel="noopener noreferrer">View Schedule</a></p>
            <p><strong>Pricing:</strong> {program.pricing}</p>
            <p><strong>Registration:</strong> {program.registration}</p>
            <h3>Testimonials</h3>
            <ul>
              {program.testimonials.map((testimonial, i) => (
                <li key={i}>
                  <p>"{testimonial.text}"</p>
                  <p><em>- {testimonial.author}</em></p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;
