var numProjects = 3;

function showHideNav() {
  // var navVisibility = document.getElementById('nav-items').style.visibility;
  // var navOpacity = document.getElementById('nav-items').style.opacity;
  // var navDisplay = document.getElementById('nav-items').style.display;
  // document.getElementById("nav-items").style.visibility = (navVisibility == "visible"? "hidden" : 'visible');
  // document.getElementById("nav-items").style.display = (navDisplay == "none"? "flex" : "none");
  // document.getElementById('nav-items').style.opacity = (navOpacity == 0? 1 : 0);
}

// $("#nav-items-component").toggle());

$("#nav-btn").click(function(){
  $("#nav-items-component").toggle(500);
});

$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header-component").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header-component").removeClass("active");
        }
    });
});


function previousProjectImage() {
  var currentProject = 1;
  for (var i = 1; i <= numProjects; i++)
    if (document.getElementById("project".concat(i)).style.visibility == 'visible')
      currentProject = i;
  document.getElementById("project".concat(currentProject)).style.visibility = 'hidden';
  document.getElementById("project".concat(currentProject == 1? numProjects : currentProject - 1)).style.visibility = 'visible';
}

function nextProjectImage() {
  var currentProject = 1;
  for (var i = 1; i <= numProjects; i++)
    if (document.getElementById("project".concat(i)).style.visibility == 'visible')
      currentProject = i;
  document.getElementById("project".concat(currentProject)).style.visibility = 'hidden';
  document.getElementById("project".concat(currentProject % numProjects + 1)).style.visibility = 'visible';
}
