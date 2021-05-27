// function scheduleMeeting(startTime, durationMinutes) {
// It should return true if the meeting falls entirely within the work day
// (according to the times specified in dayStart and dayEnd);
// return false if the meeting violates the work day bounds.

//coercion will need to be involved

const dayStart = "07:30";
const dayEnd = "17:45";

function stringHoursMinutes(timeString) {
  // split string into hours and minutes
  const seperatorPosition = timeString.indexOf(":");
  //return minutes from midnight
  let minutesFromMidnight = 0;
  const hours = timeString.slice(0, seperatorPosition);
  const minutes = timeString.slice(seperatorPosition + 1);
  minutesFromMidnight = hours * 60 + minutes * 1; // need to coerse strings to numbers
  //   console.log(typeof minutesFromMidnight);
  return minutesFromMidnight;
}

function scheduleMeeting(startTime, durationMinutes) {
  const dayStartTime = stringHoursMinutes(dayStart);
  const dayEndTime = stringHoursMinutes(dayEnd);
  const timeStart = stringHoursMinutes(startTime);
  let timeEnd = timeStart + durationMinutes;

  if (timeStart < dayStartTime) {
    console.log(1);
    return false;
  } else if (timeStart > dayEndTime) {
    console.log(2);
    return false;
  } else if (timeEnd > dayEndTime) {
    console.log(3);
    return false;
  } else {
    return true;
  }
}

// scheduleMeeting("7:00",15);     // false
// scheduleMeeting("07:15",30);    // false
// scheduleMeeting("7:30",30);     // true
// scheduleMeeting("11:30",60);    // true
// scheduleMeeting("17:00",45);    // true
// scheduleMeeting("17:30",30);    // false
// scheduleMeeting("18:00",15);    // false

for (let index = 0; index < array.length; index++) {
  const element = array[index];
}
