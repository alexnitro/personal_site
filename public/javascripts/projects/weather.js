var units;

var weatherIcons = {
  clearday: "https://image.flaticon.com/icons/svg/136/136723.svg",
  clearnight: "https://image.flaticon.com/icons/svg/136/136765.svg",
  rain: "https://image.flaticon.com/icons/svg/136/136737.svg",
  sleet: "https://image.flaticon.com/icons/svg/136/136710.svg",
  wind: "https://image.flaticon.com/icons/svg/136/136738.svg",
  fog: "https://image.flaticon.com/icons/svg/136/136702.svg",
  cloudy: "https://image.flaticon.com/icons/svg/136/136701.svg",
  partlycloudyday: "https://image.flaticon.com/icons/svg/136/136722.svg",
  partlycloudynight: "https://image.flaticon.com/icons/svg/136/136719.svg",
  thunderstorm: "https://image.flaticon.com/icons/svg/136/136749.svg"
};
function swapDash(text) {
  var finalText;
  if (text.indexOf("-") > -1) {
    finalText = text.split("-").join("");
    return finalText;
  } else {
    return text;
  }
}
function runCurrentWeather(obj) {
  $("#weather-app").css("opacity", 1);
  $("#loader-wrapper").css("opacity", 0);
  setTimeout(function() {
    $("#loader-wrapper").hide();
  }, 500);
  var weatherObj = obj;
  var dailyObj = weatherObj.daily;
  var currentObj = weatherObj.currently;
  units = weatherObj.flags.units;
  runDaily(currentObj, dailyObj);
  runForecast(dailyObj);
}
function runDaily(current, daily) {
  var currentObj = current;
  var dailyObj = daily;
  var currentIconFix = swapDash(currentObj.icon);
  var currentTemp = Math.round(currentObj.temperature);
  var todayHigh = Math.round(dailyObj.data[0].temperatureMax);
  var todayLow = Math.round(dailyObj.data[0].temperatureMin);
  var todayPercip = dailyObj.data[0].precipProbability * 100;
  $(".weather-current > img").prop("src", weatherIcons[currentIconFix]);
  $(".weather-current > h2").html(currentTemp + "&deg");
  $(".today-high").html(todayHigh + "&deg");
  $(".today-low").html(todayLow + "&deg");
  $(".chance-rain").html(todayPercip + "%");
}

function runForecast(obj) {
  var forecastObj = obj.data;
  var forecastCol = $(".forecast-col");
  for (var i = 0; i < forecastObj.length; i++) {
    var currentCol = forecastCol.eq(i);
    var dayOfWeek = unixDate(forecastObj[i].time);
    var dailyHigh = Math.round(forecastObj[i].temperatureMax);
    var dailyLow = Math.round(forecastObj[i].temperatureMin);
    var dailyPercip = Math.round(forecastObj[i].precipProbability * 100);
    var imgIcon = swapDash(forecastObj[i].icon);

    currentCol.find(".day").html(dayOfWeek);
    currentCol.find("img").prop("src", weatherIcons[imgIcon]);
    currentCol.find(".forecast-high").html(dailyHigh);
    currentCol.find(".forecast-low").html(dailyLow);
    currentCol.find(".forecast-percip").html(dailyPercip + "%");
  }
}
function unixDate(num) {
  var textDate = new Date(num * 1000).toString();
  var splitDate = textDate.split(" ");
  var dayofWeek = splitDate[0];
  return dayofWeek;
}
function gotGeo(pos) {
  var crd = pos.coords;
  var url = buildUrl(crd.longitude, crd.latitude);
  lookUpWeather(url);
}
function error(err) {
  console.error(err.code + " - " + err.message);
}
function getCoords() {
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  navigator.geolocation.getCurrentPosition(gotGeo, error, options);
}

function buildUrl(lon, lat) {
  var staticUrl =
    "https://api.darksky.net/forecast/8568593109b5f871be437dc27c1606e3/" +
    lat +
    "," +
    lon + '?units=auto';
  return staticUrl;
}
function lookUpWeather(weatherUrl) {
  var weather;
  $.ajax({
    url: weatherUrl,
    method: "GET",
    dataType: "jsonp",
    success: function(data) {
      runCurrentWeather(data);
      console.log(data);
    }
  });
}
$(".current-btn").on("click", function() {
  console.log("TEST");
  var foreCast = $(".weather-forecast");
  var current = $(".weather-current");

  if (!foreCast.hasClass("inactive")) {
    foreCast.addClass("inactive");
  }
  if (current.hasClass("inactive")) {
    current.removeClass("inactive");
  }
});
$(".forecast-btn").on("click", function() {
  console.log("TEST");
  var foreCast = $(".weather-forecast");
  var current = $(".weather-current");

  if (!current.hasClass("inactive")) {
    current.addClass("inactive");
  }
  if (foreCast.hasClass("inactive")) {
    foreCast.removeClass("inactive");
  }
});
$(".metric").on("click", function(evt) {
  if ($(evt.target).hasClass("fahren")) {
    changeNumbers();
  } else if ($(evt.target).hasClass("celcius")) {
    changeNumbers("c");
  } else {
    return false;
  }
});
function metricChange(metric, num) {
  var newNum;
  if (metric === "c") {
    newNum = (num - 32) * 5 / 9;
    return newNum;
  } else {
    newNum = num * 9 / 5 + 32;
    return newNum;
  }
}
function changeNumbers(deg) {
  var degPass;
  if (deg === "c") {
    degPass = "c";
  } else {
    degPass = "f";
  }
  var newNums = [];
  var changeNums = $(".change");
  for (var i = 0; i < changeNums.length; i++) {
    var currentNum = parseInt(changeNums.eq(i).html());
    var newNum = metricChange(degPass, currentNum);
    changeNums.eq(i).html(Math.round(newNum) + '&deg;');
  }
}

getCoords();
