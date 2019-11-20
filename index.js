// Cau 1
console.log("Câu 1: (Khong su dung thu vien)");
var now = new Date("1999-03-25T09:03:00Z");

function getTime(result, style = "numeric") {
  return now.toLocaleString("en-US", {
    [result]: style
  });
}

console.log(
  `${getTime("day")}-${getTime("month", "2-digit")}-${getTime(
    "year",
    "2-digit"
  )}`
);

console.log(
  `${getTime("day")}-${getTime("month", "2-digit")}-${getTime(
    "year",
    "2-digit"
  )} ${now.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: false
  })}`
);

console.log(
  `${getTime("day")}-${getTime("month", "2-digit")}-${getTime(
    "year"
  )} ${now.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false
  })}`
);

console.log(
  `${getTime("month")}/${getTime("day")}/${getTime("year", "2-digit")}`
);

console.log(
  `${getTime("month", "2-digit")}/${getTime("day")}/${getTime(
    "year",
    "2-digit"
  )}`
);

console.log(
  `${now.toLocaleString("en-US", {
    month: "short",
    day: "numeric"
  })}, ${getTime("year")}`
);

console.log(
  `${now.toLocaleString("en-US", {
    month: "long",
    day: "numeric"
  })} ${getTime("year")}`
);

console.log(
  `${getTime("day")}/${getTime("month", "2-digit")}/${getTime(
    "year",
    "2-digit"
  )} ${now.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true
  })}`
);

console.log(
  `${getTime("day")}-${getTime("month", "short")}-${getTime(
    "year"
  )} ${now.toLocaleTimeString("en-US", { hour12: false })}`
);

console.log(
  `${getTime("weekday", "long")}, ${now.toLocaleString("en-US", {
    month: "long",
    day: "numeric"
  })}, ${getTime("year")}`
);

var timezone = now.getTimezoneOffset() / -60;
console.log(
  `${getTime("year")}-${getTime("month", "2-digit")}-${getTime("day")}${
    timezone > 0 ? "+" + timezone : timezone
  }`
);

console.log(
  `${getTime("weekday", "long")}, ${now.toLocaleString("en-US", {
    month: "long",
    day: "numeric"
  })}, ${getTime("year")} ${now.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
    timeZoneName: "short"
  })}`
);

// Cau 1 su dung thu vien
console.log("================================================");
console.log("Cau 1: Su dung thu vien");
// var day = new Date();
var day = new Date("1999-03-25T09:03:44Z");
console.log(moment(day).format("DD-MM-YY"));
console.log(moment(day).format("DD-MM-YY HH:MM"));
console.log(moment(day).format("DD-MM-YYYY kk:mm:ss"));
console.log(moment(day).format("DD/M/YY"));
console.log(moment(day).format("DD/MM/YY"));
console.log(moment(day).format("MMM DD, YYYY"));
console.log(moment(day).format("MMMM DD YYYY"));
console.log(moment(day).format("DD/MM/YY hh:mm A"));
console.log(moment(day).format("DD-MMM-YYYY HH:MM:ss"));
console.log(moment(day).format("dddd, MMM DD, YYYY"));
console.log(moment(day).format("YYYY-MM-DDZ"));
console.log(
  moment
    .parseZone(moment(day).format())
    .format("dddd, MMMM DD, YYYY hh:mm:ss A z")
);

// Cau 2
function convertTem(caseConvert) {
  // 1: C -> F 2: F -> C
  console.log("================================================");
  console.log("Cau 2:");

  var cel = document.querySelector("#celsius").value;
  var fah = document.querySelector("#fahrenheit").value;
  if (caseConvert == 1) {
    result = (cel * 9) / 5 + 32;

    document.querySelector(
      ".output-2"
    ).textContent = `${cel} doC = ${result} doF`;

    console.log(`${cel} doC = ${result} doF`);
  } else {
    result = (5 * (fah - 32)) / 9;

    document.querySelector(
      ".output-2"
    ).textContent = `${cel} doC = ${result} doF`;

    console.log(`${cel} doC = ${result} doF`);
  }
}

// Cau 3
console.log("================================================");
console.log("Câu 3: " + document.URL);

// Cau 4

function checkFileExtension() {
  var fileName = document.querySelector("#file1").value;
  var extension = fileName.split(".").pop();
  document.querySelector(".output-4").textContent = extension;

  console.log("================================================");
  console.log("Cau 4: ", extension);
}

// Cau 5
var content = "a given string";
document.querySelector(".input-5").textContent = content;
function removeChar() {
  position = document.querySelector("#input-5").value;
  var result =
    content.substring(0, position - 1) +
    content.substring(position, content.length);

  console.log("================================================");
  console.log("Cau 5: ", result);

  document.querySelector(".output-5").textContent = result;
}

// Cau 6
var names = [
  "Yaakov",
  "John",
  "Jen",
  "Jason",
  "Paul",
  "Frank",
  "Larry",
  "Paula",
  "Laura",
  "Jim"
];

names = names.map(function(item) {
  if (item[0].toLowerCase() === "j") {
    return "Goodbye " + item;
  }
  return "Hello " + item;
});

console.log("================================================");
console.log("Cau 6: ", names);

// Cau 7
console.log("================================================");
console.log("Cau 7: ");
var people = ["Greg", "Mary", "Devon", "James"];

console.log(
  "Using a loop, iterate through this array and console.log all of the people."
);

people.forEach(elm => {
  console.log(elm);
});

// remove "James"
people.pop();
console.log("Remove James", people);

// remove "Greg"
people.shift();
console.log("Remove Greg", people);

// add "Matt" to the front of the array.
people.unshift("Matt");
console.log("Add Matt to the front of the array", people);

// add me to the end of the array
people.push("Viet");
console.log("Add Matt to the end of the array", people);

console.log("Loop, elm = Mary exit loop: ");

for (var i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Mary") break;
}

peopleCopy = people.slice(2, people.length);
console.log("copy array people NOT include Mary and Matt", peopleCopy);

console.log("index of Mary: ", people.indexOf("Mary"));

console.log("index of Foo: ", people.indexOf("Foo"));

people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie");
console.log("Delete Devon and add Elizabeth, Artie: ", people);

var withBob = people.concat("Bob");
console.log(
  "Create a new variable called withBob and set it equal to the people array concatenated with the string of Bob.",
  withBob
);
