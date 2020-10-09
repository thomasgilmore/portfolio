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

var section1 = document.querySelector('.home');
var section2 = document.querySelector('.about');
var section3 = document.querySelector('.portfolio');
var section4 = document.querySelector('.contact');

const sections = document.querySelectorAll('.section');

function checkScroll(e) {
  sections.forEach(sections => {
    const activeClass = window.scrollY;

    var section_1 = document.getElementById('home');
    var section_2 = document.getElementById('about');
    var section_3 = document.getElementById('portfolio');
    var section_4 = document.getElementById('contact');

    if (activeClass >= section_1.offsetTop-20 && activeClass < section_2.offsetTop-35) {
      section1.classList.add('nav-click');
      section2.classList.remove('nav-click');
      section3.classList.remove('nav-click');
      section4.classList.remove('nav-click');
    } else if (activeClass >= section_2.offsetTop-35 && activeClass < section_3.offsetTop-25) {
      section1.classList.remove('nav-click');
      section2.classList.add('nav-click');
      section3.classList.remove('nav-click');
      section4.classList.remove('nav-click');
    } else if (activeClass >= section_3.offsetTop-35 && activeClass < section_4.offsetTop-35) {
      section1.classList.remove('nav-click');
      section2.classList.remove('nav-click');
      section3.classList.add('nav-click');
      section4.classList.remove('nav-click');
    } else if (activeClass >= section_4.offsetTop-35) {
      section1.classList.remove('nav-click');
      section2.classList.remove('nav-click');
      section3.classList.remove('nav-click');
      section4.classList.add('nav-click');
    } 
  });
}

window.addEventListener('scroll', checkScroll);

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

if ($(window).width() > 200 & $(window).width() < 500) {
  $('.imageReactStoreClicked').attr('src', 'img/projects/store-square.png');
  $('.imageExpensifyAppClicked').attr('src', 'img/projects/expensify-with-expenses.png');
  $('.imageIndecisionAppClicked').attr('src', 'img/projects/indecision-app-square.png');
  $('.imageChatAppClicked').attr('src', 'img/projects/chat-app-with-chat-square.png');


} else {
  $('.imageReactStoreClicked').attr('src', 'img/projects/store.png');
  $('.imageExpensifyAppClicked').attr('src', 'img/projects/expensify.png');
  $('.imageIndecisionAppClicked').attr('src', 'img/projects/indecision-app.png');
  $('.imageChatAppClicked').attr('src', 'img/projects/chat-app-with-chat-smaller-window-size.png');

}

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

$('.overlayIndecisionApp').on('click', function() {
  $('.containerIndecisionAppClicked').css('visibility', 'visible');
});

$('.closecontainerIndecisionAppClicked').on('click', function() {
  $('.containerIndecisionAppClicked').css('visibility', 'hidden');
});

$(document).mouseup(function(e) {
  var popUpWindow = $(".containerIndecisionAppClicked");
  var projectPicture = $('.overlayIndecisionApp');

  // if the target of the click isn't the container nor a descendant of the container
  if (!popUpWindow.is(e.target) && popUpWindow.has(e.target).length === 0) {
    if (!projectPicture.is(e.target) && projectPicture.has(e.target).length === 0) {
      $('.containerIndecisionAppClicked').css('visibility', 'hidden');
    }
  }
});

$('.overlayChatApp').on('click', function() {
  $('.containerChatAppClicked').css('visibility', 'visible');
});

$('.closecontainerChatAppClicked').on('click', function() {
  $('.containerChatAppClicked').css('visibility', 'hidden');
});

$(document).mouseup(function(e) {
    var popUpWindow = $(".containerChatAppClicked");
    var projectPicture = $('.overlayChatApp');

    // if the target of the click isn't the container nor a descendant of the container
    if (!popUpWindow.is(e.target) && popUpWindow.has(e.target).length === 0) {
      if (!projectPicture.is(e.target) && projectPicture.has(e.target).length === 0) {
        $('.containerChatAppClicked').css('visibility', 'hidden');
      }
    }
});

$('.overlayFriendsTrivia').on('click', function() {
  $('.containerFriendsTriviaClicked').css('visibility', 'visible');
});

$('.closecontainerFriendsTriviaClicked').on('click', function() {
  $('.containerFriendsTriviaClicked').css('visibility', 'hidden');
});

$(document).mouseup(function(e) {
  var popUpWindow = $(".containerFriendsTriviaClicked");
  var projectPicture = $('.overlayFriendsTrivia');

  // if the target of the click isn't the container nor a descendant of the container
  if (!popUpWindow.is(e.target) && popUpWindow.has(e.target).length === 0) {
    if (!projectPicture.is(e.target) && projectPicture.has(e.target).length === 0) {
      $('.containerFriendsTriviaClicked').css('visibility', 'hidden');
    }
  }
});

$('.overlayTheBigBangTheoryTrivia').on('click', function() {
  $('.containerTheBigBangTheoryTriviaClicked').css('visibility', 'visible');
});

$('.closecontainerTheBigBangTheoryTriviaClicked').on('click', function() {
  $('.containerTheBigBangTheoryTriviaClicked').css('visibility', 'hidden');
});

$(document).mouseup(function(e) {
  var popUpWindow = $(".containerTheBigBangTheoryTriviaClicked");
  var projectPicture = $('.overlayTheBigBangTheoryTrivia');

  // if the target of the click isn't the container nor a descendant of the container
  if (!popUpWindow.is(e.target) && popUpWindow.has(e.target).length === 0) {
    if (!projectPicture.is(e.target) && projectPicture.has(e.target).length === 0) {
      $('.containerTheBigBangTheoryTriviaClicked').css('visibility', 'hidden');
    }
  }
});

$('.overlayMovieDatabase').on('click', function() {
  $('.containerMovieDatabaseClicked').css('visibility', 'visible');
});

$('.closecontainerMovieDatabaseClicked').on('click', function() {
  $('.containerMovieDatabaseClicked').css('visibility', 'hidden');
});

$(document).mouseup(function(e) {
    var popUpWindow = $(".containerMovieDatabaseClicked");
    var projectPicture = $('.overlayMovieDatabase');

    // if the target of the click isn't the container nor a descendant of the container
    if (!popUpWindow.is(e.target) && popUpWindow.has(e.target).length === 0) {
      if (!projectPicture.is(e.target) && projectPicture.has(e.target).length === 0) {
        $('.containerMovieDatabaseClicked').css('visibility', 'hidden');
      }
    }
});

$('.overlayWeatherApp').on('click', function() {
  $('.containerWeatherAppClicked').css('visibility', 'visible');
});

$('.closecontainerWeatherAppClicked').on('click', function() {
  $('.containerWeatherAppClicked').css('visibility', 'hidden');
});

$(document).mouseup(function(e) {
  var popUpWindow = $(".containerWeatherAppClicked");
  var projectPicture = $('.overlayWeatherApp');

  // if the target of the click isn't the container nor a descendant of the container
  if (!popUpWindow.is(e.target) && popUpWindow.has(e.target).length === 0) {
    if (!projectPicture.is(e.target) && projectPicture.has(e.target).length === 0) {
      $('.containerWeatherAppClicked').css('visibility', 'hidden');
    }
  }
});

$('.overlayBlogWebsite').on('click', function() {
  $('.containerBlogWebsiteClicked').css('visibility', 'visible');
});

$('.closecontainerBlogWebsiteClicked').on('click', function() {
  $('.containerBlogWebsiteClicked').css('visibility', 'hidden');
});

$(document).mouseup(function(e) {
  var popUpWindow = $(".containerBlogWebsiteClicked");
  var projectPicture = $('.overlayBlogWebsite');

  // if the target of the click isn't the container nor a descendant of the container
  if (!popUpWindow.is(e.target) && popUpWindow.has(e.target).length === 0) {
    if (!projectPicture.is(e.target) && projectPicture.has(e.target).length === 0) {
      $('.containerBlogWebsiteClicked').css('visibility', 'hidden');
    }
  }
});