import express from "express";
// import { dirname } from "path"
// import { filename } from

const app = express();
const port = 3000;

// const d = new Date();
const d = new Date("July 24, 1983 01:15:00");
const day = d.getDay();
var dayName = "";

switch (day) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    break;
}

app.get("/", (req, res) => {
  if (day > 0 && day < 6) {
    res.render("index.ejs", {
      dayName: dayName,
      advice: "Work Hard",
    });
  } else {
    res.render("index.ejs", {
      dayName: dayName,
      advice: "No Work Enjoyyyyy",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on Port : ${port}`);
});

// const weekday = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// const d = new Date();
// let day = weekday[d.getDay()];
