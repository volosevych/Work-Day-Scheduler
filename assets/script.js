// timeblock inputs
var nine = document.querySelector('#user-input9');
var ten = document.querySelector('#user-input10');
var eleven = document.querySelector('#user-input11');
var twelve = document.querySelector('#user-input12');
var thirteen = document.querySelector('#user-input13');
var fourteen = document.querySelector('#user-input14');
var fifteen = document.querySelector('#user-input15');
var sixteen = document.querySelector('#user-input16');
var seventeen = document.querySelector('#user-input17');

// save button
var saveBtn = document.querySelector("#save")

// variable for current day
var today = document.querySelector("#currentDay");

// displaying current day
var momentElement = moment().hours(Number);
today.innerHTML = (momentElement);

