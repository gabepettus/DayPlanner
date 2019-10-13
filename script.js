$(document).ready(function() {
  
  // get times from moment
  const now = moment().format('MMMM Do YYYY');

  // commented out for test in non-standard hours
  const nowHour24 = moment().format('H');
  const nowHour12 = moment().format('h');
  // const nowHour24 = 13;
  // const nowHour12 = 1;
  
  let $dateHeading = $('#navbar-subtitle');
  $dateHeading.text(now);
  
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
  let $plannerDiv = $('#plannerContainer');
  // clear existing elements
  $plannerDiv.empty();

  // Render a new li for each hour in the planner
  if (test) { console.log("current time",nowHour12); }

  // create grid building blocks
  // let $div = $('<div>');
  // let $row = $div.addClass('row');
  // let $col2 = $div.addClass('col-md-2');
  // let $col8 = $div.addClass('col-md-8');

  for (let hour = 9; hour <= 17; hour++) {
    // index for array use offset from hour
    let index = hour - 9;
    
    // build row components
    let $rowDiv = $('<div>');
    $rowDiv.addClass('row');
    $rowDiv.addClass('plannerRow');
    $rowDiv.attr('hour-index',hour);
  
    let $col2SaveDiv = $('<div>');
    $col2SaveDiv.addClass('col-md-2');
    
    // create list item container for the row
    // const $hourLi = $('<li>');
    //give item idex which cooresponds with the start of the hour
    // $hourLi.attr('hour-index',hour);
    
    // Start building Time box portion of row
    let $col2TimeDiv = $('<div>');
    $col2TimeDiv.addClass('col-md-2');
  
    // create timeBox element (contains time)
    const $timeBoxSpn = $('<span>');
    // can use this to get value
    $timeBoxSpn.attr('class','timeBox');
    
    // format hours for display
    let displayHour = 0;
    let ampm = "";
    if (hour > 12) { 
      displayHour = hour - 12;
      ampm = "pm";
    } else {
      displayHour = hour;
      ampm = "am";
    }
    
    // populate display
    $timeBoxSpn.text(`${displayHour} ${ampm}`);

    // add col 
    $rowDiv.append($col2TimeDiv);
    $col2TimeDiv.append($timeBoxSpn);
    
    // STOP building Time box portion of row
    let $dailyPlanSpn = $('<input>');
    // can use this to get value
    //TODO convert this to an icon with a mouse over
    $dailyPlanSpn.attr('id',`input-${index}`);
    $dailyPlanSpn.attr('type','text');
    $dailyPlanSpn.attr('class','dailyPlan');
    // access correct index 
    $dailyPlanSpn.val( planTextArr[index] );
    
    // start building input portion
    let $col9IptDiv = $('<div>');
    $col9IptDiv.addClass('col-md-9');

    // add col width and row component to row
    $rowDiv.append($col9IptDiv);
    $col9IptDiv.append($dailyPlanSpn);
    
    let $col1SaveDiv = $('<div>');
    $col1SaveDiv.addClass('col-md-1');

    let $saveBtn = $('<i>');
    $saveBtn.attr('save-id',index);
    // can use this to get value
    //TODO convert this to an icon with a mouse over
    $saveBtn.attr('class',"far fa-save saveIcon");
    
    // add col width and row component to row
    $rowDiv.append($col1SaveDiv);
    $col1SaveDiv.append($saveBtn);

    //build content of row
    // $hourLi.append($timeBoxSpn);
    // $hourLi.append($dailyPlanSpn);
    // $hourLi.append($saveBtn);
    // to update color, to compare hour
    
    // updateRowColor($hourLi, hour);
    updateRowColor($rowDiv, hour);
    
    // add row to planner container
    // $plannerUl.append($hourLi);
    $plannerDiv.append($rowDiv);
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