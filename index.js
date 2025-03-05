function showSelectedColor(event) {
  const colorEmojis = {
    red: "❤️",
    blue: "💙",
    yellow: "💛",
  };
  if (colorEmojis[event.target.value]) {
    alert(colorEmojis[event.target.value]);
  }
}

let colorSelect = document.querySelector("#color");
colorSelect.addEventListener("change", showSelectedColor);

function displayDate(event) {
  if (!event || !event.target) return;

  let dateElement = document.querySelector("#current-date");
  let timeZones = {
    banana: {
      name: "Accra, Ghana",
      time: moment.tz("Africa/Accra").format("dddd, MMMM D, YYYY h:mm A"),
    },
    grapes: {
      name: "Lagos, Nigeria",
      time: moment.tz("Africa/Lagos").format("dddd, MMMM D, YYYY h:mm A"),
    },
    cherry: {
      name: "Johannesburg, South Africa",
      time: moment
        .tz("Africa/Johannesburg")
        .format("dddd, MMMM D, YYYY h:mm A"),
    },
    lime: {
      name: "Antananarivo, Madagascar",
      time: moment
        .tz("Indian/Antananarivo")
        .format("dddd, MMMM D, YYYY h:mm A"),
    },
    watermelon: {
      name: "Riga, Latvia",
      time: moment.tz("Europe/Riga").format("dddd, MMMM D, YYYY h:mm A"),
    },
  };

  let selectedValue = event.target.value;
  if (timeZones[selectedValue]) {
    dateElement.innerHTML = `It is ${timeZones[selectedValue].time} in ${timeZones[selectedValue].name}`;
  } else {
    dateElement.innerHTML = "👉 Select a country to see the time 👈";
  }
}

let yerlerSelect = document.querySelector("#yerler");
yerlerSelect.addEventListener("change", displayDate);

function guessTime() {
  let localTimezone = moment.tz.guess();
  let localElement = document.querySelector("#local-time-zone");

  let currentTime = moment().format("h:mm A");
  let timeText = `Your current time zone is ${localTimezone} and the current time is ${currentTime}`;

  localElement.innerHTML = timeText;

  new Typewriter("#local-time-zone", {
    strings: timeText,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

guessTime();
setInterval(guessTime, 60000); // Update every minute

function updateResponseBox(event) {
  if (!event || !event.target) return;

  let responseBox = document.querySelector("#response-box");
  let themes = {
    banana: "love-theme",
    grapes: "night-theme",
    cherry: "sad-theme",
    lime: "happy-theme",
    watermelon: "mystery-theme",
  };

  responseBox.className = `response-box ${
    themes[event.target.value] || "default-theme"
  }`;
}

yerlerSelect.addEventListener("change", updateResponseBox);
