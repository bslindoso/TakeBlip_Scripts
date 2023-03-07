let holiday = JSON.stringify(["1-1","2-21","4-2","4-21","5-1","9-7","10-8","10-12","11-2","11-15", "12-25","12-31"])
let weekSchedule = JSON.stringify({
  "weekdays": [{
      "day": "Domingo",
      "id": 0,
      "hourStart": "",
      "hourEnd": ""
  },
  {
      "day": "Segunda",
      "id": 1,
      "hourStart": "0700",
      "hourEnd": "1600"
  },
  {
      "day": "Terça",
      "id": 2,
      "hourStart": "0700",
      "hourEnd": "1600"
  },
  {
      "day": "Quarta",
      "id": 3,
      "hourStart": "0700",
      "hourEnd": "1600"
  },
  {
      "day": "Quinta",
      "id": 4,
      "hourStart": "0700",
      "hourEnd": "1600"
  },
  {
      "day": "Sexta",
      "id": 5,
      "hourStart": "0700",
      "hourEnd": "2200"
  },
  {
      "day": "Sábado",
      "id": 6,
      "hourStart": "0700",
      "hourEnd": "1200"
  }
  ]
})

console.log(run(holiday, weekSchedule))

function run(weekSchedule) {

  let offset = -3;
   
  offset = !isNaN(parseInt(offset))? parseInt(offset) : DEFAULT_OFFSET;
  
  weekSchedule = JSON.parse(weekSchedule);
  let today = nowUTC(offset);
  if (isWorkDay(today, weekSchedule)) {
      let todaySchedule = getTodaySchedule(weekSchedule, today);
      let intervalTime = getIntervalTime(todaySchedule, today);
      return checkTime(intervalTime, today);
  }
  return false;
}
function getIntervalTime(todaySchedule, today) {
  let intervalTime = [];
  for (let i = 0; i < todaySchedule.workTime.length; i++) {
      intervalTime.push({
          start: utcDate(todaySchedule.workTime[i].start, today),
          end: utcDate(todaySchedule.workTime[i].end, today)
      });
  }
  return intervalTime;
}
function checkTime(intervalTime, today) {
  for (let i = 0; i < intervalTime.length; i++) {
      if (today - intervalTime[i].start > 0 && intervalTime[i].end - today > 0)
          return true;
  }
  return false;
}
function getTodaySchedule(weekSchedule, today) {
  for (let i = 0; i < weekSchedule.length; i++) {
      if (weekSchedule[i].num == today.getDay()) return weekSchedule[i];
  }
}
//Get now UTC Date
function nowUTC(offset) {
  let now = new Date();
  let utc_timestamp = Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      now.getUTCHours(),
      now.getUTCMinutes(),
      now.getUTCSeconds(),
      now.getUTCMilliseconds()
  );
  return new Date(utc_timestamp + offset * 3600 * 1000);
}
//Get UTC Date
function utcDate(timeString, today) {
  let hour = getValueByString("hour", timeString);
  let minutes = getValueByString("minutes", timeString);
  let utc_timestamp = Date.UTC(
      today.getUTCFullYear(),
      today.getUTCMonth(),
      today.getUTCDate(),
      hour,
      minutes,
      0,
      0
  );
  return new Date(utc_timestamp);
}
//Get hour/minute by string with pattern HH:mm
function getValueByString(type, timeString) {
  if (type === "hour") {
      return parseInt(timeString.substring(0, timeString.indexOf(":")));
  } else if (type === "minutes") {
      return parseInt(
          timeString.substring(timeString.indexOf(":") + 1, timeString.length)
      );
  }
  return 0;
}
//Get if today is a work day
function isWorkDay(today, workDays) {
  for (let i = 0; i < workDays.length; i++) {
      if (workDays[i].num == today.getDay().toString()) return true;
  }
  return false;
}