import React from 'react';

function LeaveDetails() {
  return (
    <section>
      <h2>Leave Details</h2>
      <div>
        <h3>Leave Balance</h3>
        <p>Available: 15 days</p>
        <p>Carried Over: 2 days</p>
        <p>Annual Quota: 18 days</p>
      </div>
      <div>
        <h3>Other Leave Types</h3>
        <p>Birthday Leave: 1 day</p>
        <p>Maternity Leave: 80 days</p>
        <p>Paternity Leave: 15 days</p>
      </div>
    </section>
  );
}

export default LeaveDetails;
