$(document).ready(function() {

  // need to put in a timeInterval to update clock dynamically
  // Bonus need to navigate to past future days - calendar options
  // get times from moment
  // const now = moment().format('MMMM Do YYYY, h:mm:ss a');
  // returns current hour

  // const nowHour24 = moment().format('H');
  const nowHour24 = 14;
  // const nowHour12 = moment().format('h');
  const nowHour12 = 2;

  const test = true;

  // logic to check for hour roll over call updaterowcolor for each row
  // end timer

  // draw calendar
  // set variable referencing ul planner element
  let $plannerUl = $('#planner');
  // clear existing elements
  $plannerUl.empty();

  // let hourArr = [9,10,11,12,1,2,3,4,5];
  // hourArr.forEach((hour) => 

  // Render a new li for each hour in the planner
  console.log(nowHour12);

  for (let hour = 9; hour <= 17; hour++) {
    // create list item container for the row

    let $hourLi = $('<li>');
    //give item idex which cooresponds with the start of the hour
    $hourLi.attr('hour-index',hour);

    // create timeBox element (contains time)
    const $timeBoxSpn = $('<span>');
    // can use this to get value
    //TODO convert this to an icon with a mouse over
    $timeBoxSpn.attr('class','timeBox');
    $timeBoxSpn.text(`${hour}:00`);

    let $dailyPlanSpn = $('<span>');
    // can use this to get value
    //TODO convert this to an icon with a mouse over
    $dailyPlanSpn.attr('class','dailyPlan');
    $dailyPlanSpn.text('planning text goes here');

    // create save button element
    let $saveBtn = $('<button>');
    // can use this to get value
    //TODO convert this to an icon with a mouse over
    $saveBtn.text('Save');

    //build row
    console.log("here");
    $hourLi.append($timeBoxSpn);
    $hourLi.append($dailyPlanSpn);
    $hourLi.append($saveBtn);
    // to update color, to compare hour

    updateRowColor($hourLi, hour);

    $plannerUl.append($hourLi);
  };
  // need time element, meeting, crud context sensitive buttons icons
  // need eventListener on entire calendar looking for onclick to edit?
  //option to save to local memory

  // get ul element for html upon which to build planner
  // function to update local memory
  // function to update row color

  function updateRowColor ($hourRow,hour) { 

    if (test) { console.log("rowColor ",nowHour24, hour); }

    if ( hour < nowHour24) {
      // $hourRow.css('')
      if (test) { console.log("lessThan"); }
      $hourRow.css("background-color","grey")
    } else if ( hour > nowHour24) {
      if (test) { console.log("greaterthan"); }
      $hourRow.css("background-color","green")
    } else {
      if (test) { console.log("eqaul"); }
      $hourRow.css("background-color","red")
    }
  };

  // test long strings
  // test html injection
});