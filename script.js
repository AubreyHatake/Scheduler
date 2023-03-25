// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// Variable
var btn = $('btn saveBtn');
var timeDisplayEl = $('#currentDay')

// This function will help display the date and time 
function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}


function saveProjectsToStorage(projects) {
  localStorage.setItem('projects', JSON.stringify(projects));
}

function readProjectsFromStorage() {
  var projects = localStorage.getItem('projects');
  if (projects) {
    projects = JSON.parse(projects);
  } else {
    projects = [];
  }
  return projects;
}



// Adds a project to local storage and prints the project data
function handleProjectFormSubmit(event) {
  event.preventDefault();
  
  // read user input from the form
  var projectName = projectNameInputEl.val().trim();
  
  
  var newProject = {
    name: projectName,
  };
  
  // add project to local storage
  var projects = readProjectsFromStorage();
  projects.push(newProject);
  saveProjectsToStorage(projects);
  
  // print project data
  printProjectData();
  
}



$(function () {
  
});

btn.addEventListener('btn saveBtn',handleProjectFormSubmit);
// this calls the display time function to show the date and time on the deployed site. 
displayTime();
// this sets the interval for the time to continue running correctly on the site.
setInterval(displayTime, 1000);

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.