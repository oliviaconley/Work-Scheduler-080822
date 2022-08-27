var timeDisplayEl = $('#time-display');
var currentTime = moment().format('HH');
console.log(currentTime)

function displayTime() {
    var rightNow = moment().format('llll');
    timeDisplayEl.text(rightNow);
  }
  setInterval(displayTime, 1000);

  //for when save button is clicked 
  $(".saveBtn").click(function(event) {
    // console.log(event.target);
    // console.log($(event.target).siblings());
    // console.log($(event.target).siblings("textarea"));
    console.log($(event.target).siblings("textarea").val());
    console.log($(event.target).siblings("textarea").attr("id"));
    var key = $(event.target).siblings("textarea").attr("id");
    var value = $(event.target).siblings("textarea").val(); 
    localStorage.setItem(key, value); 
  });

for (let i = 0; i < $('.container ul li').length; i++) {
    var element = $('.container ul li textarea')[i]
    var currentElTime = $(element).attr("rel")

    if (currentTime > currentElTime) {
      element.style.backgroundColor = "#d3d3d3";
   }  else {
   
   } if (currentTime === currentElTime) {
         element.style.backgroundColor = "#ff6961"; 
   } else {
   
   } if (currentTime < currentElTime) {
      element.style.backgroundColor = "#77dd77"; 
   
   }; 
}; 

