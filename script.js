// Variables
var timeDisplayEl = $('#currentDay');
var h2 = $('h2')
// This function will help display the date and time 
function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}



// this calls the display time function to show the date and time on the deployed site. 
displayTime();
// this sets the interval for the time to continue running correctly on the site.
setInterval(displayTime, 1000);


// In this function I am able to save eat item in the local storage by using, $this to go through the elements in the page and save the needed data in input val
// keyVal is used here as a dynamic key, so that when data is entered by the user, each different key is saved correctly. 
function saveProjectsToStorage() {
  var inputVal = $(this).siblings(".description").val();
  var keyVal = $(this).parent().attr("id");
  localStorage.setItem(keyVal, inputVal);
  alert("added to local storage!");
  // console.log(inputVal);
}

// these getItems are to get each piece of data from the local sotrage 
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));


// this is an event listener that will help the save button run the saveProjects function when clicked on by the user.
 $(".saveBtn").on("click", saveProjectsToStorage);



