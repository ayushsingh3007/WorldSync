import React from 'react';

function LeaveRequest() {
  return (
    <section>
      <h2>Leave Request</h2>
      <div>
        <h3>Pending Leave Requests</h3>
        <p>Post Leave: May 29, 2024 (1 Day)</p>
        <p>Leave Type: Sick Leave</p>
        <p>Reason: Mention the reason...</p>
      </div>
      <div>
        <h3>Request Leave</h3>
        <p>Leave Type: 
          <select>
            <option value="sick">Sick Leave</option>
            <option value="annual">Annual Leave</option>
            <option value="maternity">Maternity Leave</option>
          </select>
        </p>
        <textarea placeholder="Reason for leave..."></textarea>
        <button>Submit Request</button>
      </div>
    </section>
  );
}

export default LeaveRequest;
