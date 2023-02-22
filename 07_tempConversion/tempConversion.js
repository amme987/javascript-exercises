const convertToCelsius = function (temp) {
  const temperature = (temp - 32) / (9 / 5);
  if (!Number.isInteger(temperature)) {
    return Number(temperature.toFixed(1));
  }
  return temperature;
};

const convertToFahrenheit = function (temp) {
  const temperature = temp * (9 / 5) + 32;
  if (!Number.isInteger(temperature)) {
    return Number(temperature.toFixed(1));
  }
  return temperature;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
