// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");
var about = document.getElementById("about");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    about.classList.add("paddingForAbout");
  } else {
    navbar.classList.remove("sticky");
    about.classList.remove("paddingForAbout");
  }
}

// $('.projectPictureReactStore').hover(function() {
//   $('.projectTitleReactStore').removeClass('hide');
//   $('.projectTitleReactStore').addClass('fadein');
// }, function() {
//   if ($('.projectTitleReactStore').hover(function() {
//     console.log('mouse is over title');
//   }))
//   $('.projectTitleReactStore').addClass('fadeout');
//   $('.projectTitleReactStore').removeClass('fadein');
// })

// $('.projectPictureExpensifyApp').hover(function() {
//   $('.projectTitleExpensifyApp').removeClass('hide');
//   $('.projectTitleExpensifyApp').addClass('fadein');
// }, function() {
//   $('.projectTitleExpensifyApp').addClass('fadeout');
//   $('.projectTitleExpensifyApp').removeClass('fadein');
// })