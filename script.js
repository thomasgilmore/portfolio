// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var newerNav = document.getElementById("newerNav");
var about = document.getElementById("about");

// Get the offset position of the navbar
var sticky = newerNav.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    newerNav.classList.add("fixed-top");
    about.classList.add("paddingForAbout");
  } else {
    newerNav.classList.remove("fixed-top");
    about.classList.remove("paddingForAbout");
  }
}

var section1 = document.querySelector('.home');
var section2 = document.querySelector('.about');
var section3 = document.querySelector('.coursesAndCertifications')
var section4 = document.querySelector('.portfolio');
var section5 = document.querySelector('.contact');

const sections = document.querySelectorAll('.section');

function checkScroll(e) {
  sections.forEach(sections => {
    const activeClass = window.scrollY;

    var section_1 = document.getElementById('home');
    var section_2 = document.getElementById('about');
    var section_3 = document.getElementById('coursesAndCertifications');
    var section_4 = document.getElementById('portfolio');
    var section_5 = document.getElementById('contact');

    if (activeClass >= section_1.offsetTop-20 && activeClass < section_2.offsetTop-35) {
      section1.setAttribute("id", "nav-click");
      section2.setAttribute("id", "nav-link");
      section3.setAttribute("id", "nav-link");
      section4.setAttribute("id", "nav-link");
      section5.setAttribute("id", "nav-link");
    } else if (activeClass >= section_2.offsetTop-35 && activeClass < section_3.offsetTop-25) {
      section1.setAttribute("id", "nav-link");
      section2.setAttribute("id", "nav-click");
      section3.setAttribute("id", "nav-link");
      section4.setAttribute("id", "nav-link");
      section5.setAttribute("id", "nav-link");
    } else if (activeClass >= section_3.offsetTop-35 && activeClass < section_4.offsetTop-35) {
      section1.setAttribute("id", "nav-link");
      section2.setAttribute("id", "nav-link");
      section3.setAttribute("id", "nav-click");
      section4.setAttribute("id", "nav-link");
      section5.setAttribute("id", "nav-link");
    } else if (activeClass >= section_4.offsetTop-35 && activeClass < section_5.offsetTop-35) {
      section1.setAttribute("id", "nav-link");
      section2.setAttribute("id", "nav-link");
      section3.setAttribute("id", "nav-link");
      section4.setAttribute("id", "nav-click");
      section5.setAttribute("id", "nav-link");
    } else if (activeClass >= section_5.offsetTop-35) {
      section1.setAttribute("id", "nav-link");
      section2.setAttribute("id", "nav-link");
      section3.setAttribute("id", "nav-link");
      section4.setAttribute("id", "nav-link");
      section5.setAttribute("id", "nav-click");
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

// if ($(window).width() > 200 & $(window).width() < 500) {
  // $('.imageReactStoreClicked').attr('src', 'img/projects/store-square.png');
  // $('.imageExpensifyAppClicked').attr('src', 'img/projects/expensify-with-expenses.png');
  // $('.imageIndecisionAppClicked').attr('src', 'img/projects/indecision-app-square.png');
  // $('.imageChatAppClicked').attr('src', 'img/projects/chat-app-with-chat-square.png');
  // $('.imageFriendsTriviaClicked').attr('src', 'img/projects/friends-trivia-square.png');
  // $('.imageTheBigBangTheoryTriviaClicked').attr('src', 'img/projects/the-big-bang-theory-trivia-square.png');
  // $('.imageMovieDatabaseClicked').attr('src', 'img/projects/movie-database-square.png');
  // $('.imageWeatherAppClicked').attr('src', 'img/projects/weather-app.png');
  // $('.imageBlogWebsiteClicked').attr('src', 'img/projects/blog-website.png');
// } else {
  // $('.imageReactStoreClicked').attr('src', 'img/projects/store.png');
  // $('.imageExpensifyAppClicked').attr('src', 'img/projects/expensify.png');
  // $('.imageIndecisionAppClicked').attr('src', 'img/projects/indecision-app.png');
  // $('.imageChatAppClicked').attr('src', 'img/projects/chat-app-with-chat-smaller-window-size.png');
  // $('.imageFriendsTriviaClicked').attr('src', 'img/projects/friends-trivia-pop-up-window.png');
  // $('.imageTheBigBangTheoryTriviaClicked').attr('src', 'img/projects/the-big-bang-theory-trivia-pop-up-window.png');
  // $('.imageMovieDatabaseClicked').attr('src', 'img/projects/movie-database-pop-up-window.png');
  // $('.imageWeatherAppClicked').attr('src', 'img/projects/weather-app-new-york.png');
  // $('.imageBlogWebsiteClicked').attr('src', 'img/projects/blog-website-pop-up-window.png');
// }

$('.overlayWineRecommendations').on('click', function() {
  $('.containerWineRecommendationsClicked').css('visibility', 'visible');
  if ($(window).width() > 200 & $(window).width() < 500) {
    $('.imageWineRecommendationsClicked').attr('src', 'img/projects/wine-recommendations-square.png');
  } else {
    $('.imageWineRecommendationsClicked').attr('src', 'img/projects/wine-recommendations-pop-up-window.png');
  }
});

$('.closecontainerWineRecommendationsClicked').on('click', function() {
  $('.containerWineRecommendationsClicked').css('visibility', 'hidden');
});

$(document).mouseup(function(e) {
  var popUpWindow = $(".containerWineRecommendationsClicked");
  var projectPicture = $('.overlayWineRecommendations');

  // if the target of the click isn't the container nor a descendant of the container
  if (!popUpWindow.is(e.target) && popUpWindow.has(e.target).length === 0) {
    if (!projectPicture.is(e.target) && projectPicture.has(e.target).length === 0) {
      $('.containerWineRecommendationsClicked').css('visibility', 'hidden');
    }
  }
});

$('.overlayReactStore').on('click', function() {
  $('.containerReactStoreClicked').css('visibility', 'visible');
  if ($(window).width() > 200 & $(window).width() < 500) {
    $('.imageReactStoreClicked').attr('src', 'img/projects/store-square.png');
  } else {
    $('.imageReactStoreClicked').attr('src', 'img/projects/store.png');
  }
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
  if ($(window).width() > 200 & $(window).width() < 500) {
    $('.imageExpensifyAppClicked').attr('src', 'img/projects/expensify-with-expenses.png');
  } else {
    $('.imageExpensifyAppClicked').attr('src', 'img/projects/expensify.png');
  }
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
  if ($(window).width() > 200 & $(window).width() < 500) {
    $('.imageIndecisionAppClicked').attr('src', 'img/projects/indecision-app-square.png');
  } else {
    $('.imageIndecisionAppClicked').attr('src', 'img/projects/indecision-app.png');
  }
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
  if ($(window).width() > 200 & $(window).width() < 500) {
    $('.imageChatAppClicked').attr('src', 'img/projects/chat-app-with-chat-square.png');
  } else {
    $('.imageChatAppClicked').attr('src', 'img/projects/chat-app-with-chat-smaller-window-size.png');
  }
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

// $('.overlayFriendsTrivia').on('click', function() {
//   $('.containerFriendsTriviaClicked').css('visibility', 'visible');
//   if ($(window).width() > 200 & $(window).width() < 500) {
//     $('.imageFriendsTriviaClicked').attr('src', 'img/projects/friends-trivia-square.png');
//   } else {
//     $('.imageFriendsTriviaClicked').attr('src', 'img/projects/friends-trivia-pop-up-window.png');
//   }
// });

// $('.closecontainerFriendsTriviaClicked').on('click', function() {
//   $('.containerFriendsTriviaClicked').css('visibility', 'hidden');
// });

// $(document).mouseup(function(e) {
//   var popUpWindow = $(".containerFriendsTriviaClicked");
//   var projectPicture = $('.overlayFriendsTrivia');

//   // if the target of the click isn't the container nor a descendant of the container
//   if (!popUpWindow.is(e.target) && popUpWindow.has(e.target).length === 0) {
//     if (!projectPicture.is(e.target) && projectPicture.has(e.target).length === 0) {
//       $('.containerFriendsTriviaClicked').css('visibility', 'hidden');
//     }
//   }
// });

$('.overlayTheBigBangTheoryTrivia').on('click', function() {
  $('.containerTheBigBangTheoryTriviaClicked').css('visibility', 'visible');
  if ($(window).width() > 200 & $(window).width() < 500) {
    $('.imageTheBigBangTheoryTriviaClicked').attr('src', 'img/projects/the-big-bang-theory-trivia-square.png');
  } else {
    $('.imageTheBigBangTheoryTriviaClicked').attr('src', 'img/projects/the-big-bang-theory-trivia-pop-up-window.png');
  }
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
  if ($(window).width() > 200 & $(window).width() < 500) {
    $('.imageMovieDatabaseClicked').attr('src', 'img/projects/movie-database-square.png');
  } else {
    $('.imageMovieDatabaseClicked').attr('src', 'img/projects/movie-database-pop-up-window.png');
  }
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
  if ($(window).width() > 200 & $(window).width() < 500) {
    $('.imageWeatherAppClicked').attr('src', 'img/projects/weather-app.png');
  } else {
    $('.imageWeatherAppClicked').attr('src', 'img/projects/weather-app-new-york-2.png');
  }
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
  if ($(window).width() > 200 & $(window).width() < 500) {
    $('.imageBlogWebsiteClicked').attr('src', 'img/projects/blog-website.png');
  } else {
    $('.imageBlogWebsiteClicked').attr('src', 'img/projects/blog-website-pop-up-window.png');
  }
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

$('.overlayPricingComponentWithToggle').on('click', function() {
  $('.containerPricingComponentWithToggleClicked').css('visibility', 'visible');
  if ($(window).width() > 200 & $(window).width() < 500) {
    $('.imagePricingComponentWithToggleClicked').attr('src', 'img/projects/pricing-component-with-toggle-square.png');
  } else {
    $('.imagePricingComponentWithToggleClicked').attr('src', 'img/projects/pricing-component-with-toggle.png');
  }
});

$('.closecontainerPricingComponentWithToggleClicked').on('click', function() {
  $('.containerPricingComponentWithToggleClicked').css('visibility', 'hidden');
});

$(document).mouseup(function(e) {
  var popUpWindow = $(".containerPricingComponentWithToggleClicked");
  var projectPicture = $('.overlayPricingComponentWithToggle');

  // if the target of the click isn't the container nor a descendant of the container
  if (!popUpWindow.is(e.target) && popUpWindow.has(e.target).length === 0) {
    if (!projectPicture.is(e.target) && projectPicture.has(e.target).length === 0) {
      $('.containerPricingComponentWithToggleClicked').css('visibility', 'hidden');
    }
  }
});