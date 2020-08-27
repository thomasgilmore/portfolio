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

$('.overlayReactStore').on('click', function() {
  $('.containerReactStoreClicked').css('visibility', 'visible');
});

// $('.containerReactStoreClicked').on('click', function() {
//   $('.containerReactStoreClicked').css('visibility', 'hidden');
// })

$('.closecontainerReactStoreClicked').on('click', function() {
  $('.containerReactStoreClicked').css('visibility', 'hidden');
});

$(document).mouseup(function(e) {
    var popUpWindow = $(".containerReactStoreClicked");
    var projectPicture = $('.overlayReactStore');

    // if the target of the click isn't the container nor a descendant of the container
    if (!popUpWindow.is(e.target) && popUpWindow.has(e.target).length === 0) {
      if (!projectPicture.is(e.target) && projectPicture.has(e.target).length === 0) {
        $('.containerReactStoreClicked').css('visibility', 'hidden');
      }
    }
});

$('.overlayExpensifyApp').on('click', function() {
  $('.containerExpensifyAppClicked').css('visibility', 'visible');
});

$('.closecontainerExpensifyAppClicked').on('click', function() {
  $('.containerExpensifyAppClicked').css('visibility', 'hidden');
});

$(document).mouseup(function(e) {
  var popUpWindow = $(".containerExpensifyAppClicked");
  var projectPicture = $('.overlayExpensifyApp');

  // if the target of the click isn't the container nor a descendant of the container
  if (!popUpWindow.is(e.target) && popUpWindow.has(e.target).length === 0) {
    if (!projectPicture.is(e.target) && projectPicture.has(e.target).length === 0) {
      $('.containerExpensifyAppClicked').css('visibility', 'hidden');
    }
  }
});