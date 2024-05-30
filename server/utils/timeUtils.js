const moment = require('moment-timezone');

exports.getCurrentTime = (country) => {
  // This function should map country to its respective timezone.
  // Example:
  const timezones = {
    India: 'Asia/Kolkata',
    // Add other countries and their respective timezones.
  };
  
  const timezone = timezones[country] || 'UTC';
  return moment().tz(timezone).toDate();
};
