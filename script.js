$(document).ready(function() {

  let now = moment().format('MMMM Do YYYY, h:mm:ss a');

  $("#now").html("<h1>Day Planner!</h1>");
  $("#now").append(now); 
});