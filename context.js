const input = require("./input.json");

function getVariable(key) {
  if (typeof input[key] === "object") return JSON.stringify(input[key]);
  return input[key];
}

function setVariable(key, value) {
  console.log(key, value);
}

module.exports = {
  getVariable,
  setVariable,
};
