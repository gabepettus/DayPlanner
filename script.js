$(document).ready(function() {

  // need to put in a timeInterval to update clock dynamically
  // Bonus need to navigate to past future days - calendar options
  // get times from moment
  const let = moment().format('MMMM Do YYYY, h:mm:ss a');
  // returns current hour
  const nowHour = moment().format('H');
  // logic to check for hour roll over call updaterowcolor for each row
  // end timer

  // draw calendar

  // loop through 9 to 5 
  // add hour row : need id to update
  // need time element, meeting, crud context sensitive buttons icons
  
  // need eventListener on entire calendar looking for onclick to edit?

  //option to save to local memory


  // function to update local memory
  // function to update row color
  let updateColor = updateRowColor (rowId) {

  }

  // test long strings
  // test html injection

  





  $("#planner").html("<h1>Day Planner!</h1>");
  $("#planner").append(now); 
});