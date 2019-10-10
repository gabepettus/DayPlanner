$(document).ready(function() {

  // need to put in a timeInterval to update clock dynamically
  // Bonus need to navigate to past future days - calendar options
  // get times from moment
  // const now = moment().format('MMMM Do YYYY, h:mm:ss a');
  // returns current hour
  const nowHour = moment().format('H');
  // logic to check for hour roll over call updaterowcolor for each row
  // end timer

  // draw calendar
  // set variable referencing ul planner element
  let $plannerUl = $('#planner');
  // clear existing elements
  $plannerUl.empty();

  // Render a new li for each hour in the planner
  for (let hour = 9; hour < 18; hour++) {
    // create list item container for the row
    let $hourLi = $('<li>');
    //give item idex which cooresponds with the start of the hour
    $hourLi.attr('hour-index',hour);

    // create save button element
    let $saveBtn = $('<button>');
    // can use this to get value
    //TODO convert this to an icon with a mouse over
    $saveBtn.text('Save');
    $saveBtn.attr('class','pull-right');

    //build row
    $hourLi.append($saveBtn);

    //add row to planner
    $plannerUl.append($hourLi);
  }

  // loop through 9 to 5 
  // add hour row : need id to update
  // need time element, meeting, crud context sensitive buttons icons
  
  // need eventListener on entire calendar looking for onclick to edit?

  //option to save to local memory
  
  // get ul element for html upon which to build planner
  

  // function to update local memory

  // function to update row color
  // let updateColor = updateRowColor (rowId) { }

  // test long strings
  // test html injection

});