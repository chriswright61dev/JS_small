// function scheduleMeeting(startTime, durationMinutes) {
// It should return true if the meeting falls entirely within the work day
// (according to the times specified in dayStart and dayEnd);
// return false if the meeting violates the work day bounds.

function stringHoursMinutes(timeString) {
  // split string into hours and minutes
  const seperatorPosition = timeString.indexOf(":");
  // this does not need to be an object
  // could just return minutes from midnight
  const hoursMinutes = {
    hours: 0,
    minutes: 0,
    minutesFromMidnight: 0
  };
  hoursMinutes.hours = parseInt(timeString.slice(0, seperatorPosition));
  hoursMinutes.minutes = parseInt(timeString.slice(seperatorPosition + 1));
  hoursMinutes.minutesFromMidnight =
    hoursMinutes.hours * 60 + hoursMinutes.minutes;

  return hoursMinutes;
}

function scheduleMeeting(startTime, durationMinutes) {
  const dayStart = 7 * 60 + 30;
  const dayEnd = 17 * 60 + 45;
  const start = stringHoursMinutes(startTime);
  let timeStart = start.minutesFromMidnight;
  let timeEnd = timeStart + durationMinutes;

  if (timeStart < dayStart) {
    console.log(1);
    return false;
  } else if (timeStart > dayEnd) {
    console.log(2);
    return false;
  } else if (timeEnd > dayEnd) {
    console.log(3);
    return false;
  } else {
    return true;
  }
}

console.log(scheduleMeeting("17:30", 30));

// scheduleMeeting("7:00",15);     // false
// scheduleMeeting("07:15",30);    // false

// scheduleMeeting("7:30",30);     // true
// scheduleMeeting("11:30",60);    // true
// scheduleMeeting("17:00",45);    // true
// scheduleMeeting("17:30",30);    // false
// scheduleMeeting("18:00",15);    // false
