function convertToDays() {
    var ageInYears = document.getElementById("ageInput").value;
    var ageInDays = ageInYears * 365 + countLeapYears(ageInYears);

    document.getElementById("result").innerHTML = "Your age in days is: " + ageInDays + " days";
  }

  function countLeapYears(years) {
    var leapYears = Math.floor(years / 4) - Math.floor(years / 100) + Math.floor(years / 400);
    return leapYears;
  }