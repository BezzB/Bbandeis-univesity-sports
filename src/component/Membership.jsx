import React from 'react';

function Membership() {
  const membershipData = [
    {
      type: 'Individual Membership',
      price: '$50/month',
      benefits: [
        'Unlimited access to all facilities',
        'Discounted rates for fitness classes',
        'Personal training sessions available',
      ],
    },
    {
      type: 'Family Membership',
      price: '$90/month',
      benefits: [
        'All benefits of Individual Membership',
        'Access for spouse and children',
        'Family-oriented events and activities',
      ],
    },
    {
      type: 'Student Membership',
      price: '$30/month',
      benefits: [
        'Access to fitness center and swimming pool',
        'Discounted rates for classes and events',
        'Valid student ID required',
      ],
    },
  ];

  return (
    <div className="membership-page">
      <div className="container">
        <h1>Membership</h1>
        <p>Choose the membership option that suits your needs and enjoy exclusive benefits.</p>
        <div className="membership-options">
          {membershipData.map((membership, index) => (
            <div key={index} className="membership-option">
              <h2>{membership.type}</h2>
              <p><strong>Price:</strong> {membership.price}</p>
              <ul>
                {membership.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <button className="btn btn-primary">Sign Up Now</button>
      </div>
    </div>
  );
}

export default Membership;
