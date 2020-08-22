var input = document.querySelector('#user-input');

var saveBtn = document.querySelector("#save");
var today = document.querySelector("#currentDay");

// current day
var momentElement = moment().hours(Number);
today.innerHTML = (momentElement);

