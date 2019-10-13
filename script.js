$(document).ready(function() {
  
  // need to put in a timeInterval to update clock dynamically
  // Bonus need to navigate to past future days - calendar options
  // get times from moment
  // const now = moment().format('MMMM Do YYYY, h:mm:ss a');
  // returns current hour
  
  // commented out for test in non-standard hours
  // const nowHour24 = moment().format('H');
  // const nowHour12 = moment().format('h');
  const nowHour24 = 13;
  const nowHour12 = 1;
  
  
  // using font awesome icon https://fontawesome.com/license
  // change description here
  const saveIcon = "./images/save-regular.svg"; 
  // let planTextArr = null;
  // initialize empty array of length of day 

  const test = true;
  // Get stored todos from localStorage
  // Parsing the JSON string to an object
  let storedPlans = JSON.parse(localStorage.getItem("storedPlans"));

  console.log(storedPlans);

  // If plans were retrieved from localStorage, update the plan array to it
  if (storedPlans !== null) {
    planTextArr = storedPlans;
  } else {
    // this should only occur on first time the app is loaded in the browser
    // helpfully remind user that lunch is important
    planTextArr = new Array(9);
    planTextArr[4] = "Picnic lunch outside";
  }

  console.log("full array of plned text",planTextArr);

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
  if (test) { console.log("current time",nowHour12); }

  for (let hour = 9; hour <= 17; hour++) {
    // index for array use offset from hour
    let index = hour - 9;

    // create list item container for the row
    let $hourLi = $('<li>');
    //give item idex which cooresponds with the start of the hour
    $hourLi.attr('hour-index',hour);

    // create timeBox element (contains time)
    const $timeBoxSpn = $('<span>');
    // can use this to get value
    $timeBoxSpn.attr('class','timeBox');

    let displayHour = 0;
    let ampm = "";
    if (hour > 12) { 
      displayHour = hour - 12;
      ampm = "pm";
    } else {
      displayHour = hour;
      ampm = "am";
    }

    $timeBoxSpn.text(`${displayHour} ${ampm}`);

    let $dailyPlanSpn = $('<input>');
    // can use this to get value
    //TODO convert this to an icon with a mouse over
    $dailyPlanSpn.attr('id',`input-${index}`);
    $dailyPlanSpn.attr('type','text');
    $dailyPlanSpn.attr('class','dailyPlan');
    // access correct index 
    $dailyPlanSpn.val( planTextArr[index] );


    //TODO convert this to an icon with a mouse over
    let $saveBtn = $('<i>');
    $saveBtn.attr('save-id',index);
    // can use this to get value
    //TODO convert this to an icon with a mouse over
    $saveBtn.attr('class',"far fa-save saveIcon");

    //build row
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
      $hourRow.css("background-color","lightgrey")
    } else if ( hour > nowHour24) {
      if (test) { console.log("greaterthan"); }
      $hourRow.css("background-color","lightgreen")
    } else {
      if (test) { console.log("eqaul"); }
      $hourRow.css("background-color","tomato")
    }
  };

  // conclick function to listen for user clicks on plan area
  //  $(".dailyPlan").submit( function(event) {
  $(document).on('click','i', function(event) {
    
    event.preventDefault();  

    if (test) { console.log('click pta before '+ planTextArr); }

    let $index = $(this).attr('save-id');

    let inputId = '#input-'+$index;
    let $value = $(inputId).val();

    planTextArr[$index] = $value;

    if (test) { console.log('this ', $value); }
    if (test) { console.log('value ', $value); }
    if (test) { console.log('index ', $index); }
    if (test) { console.log('click pta after '+ planTextArr); }

    localStorage.setItem("storedPlans", JSON.stringify(planTextArr));
  });  


  // test long strings
  // test html injection
});