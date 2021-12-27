const nextButton = document.getElementById("next");
const featuresSubParent = document.getElementById("features-subparent");
const prevButton = document.getElementById("prev");
const openMenu = document.getElementById( "open-menu" );
const closeMenu = document.getElementById( "close-menu" )
const testNext = document.getElementById( "test-next" );
const testimonials = document.getElementById("testimonials-subparent")
const testPrev = document.getElementById( "test-prev" );
function getTranslateX() {
  var style = window.getComputedStyle(featuresSubParent);
  var matrix = new WebKitCSSMatrix(style.transform);
  return matrix.m41;
}

function translateXOftest ()
{
  var style = window.getComputedStyle(testimonials);
  var matrix = new WebKitCSSMatrix(style.transform);
  
  return matrix.m41;
}

nextButton.onclick = () => {
  if (getTranslateX() > -600) {
    featuresSubParent.style.transform += "translateX(-230px)";
  } else {
    featuresSubParent.style.transform = "translateX(0px)";
  }
};

prevButton.onclick = () => {
  if (getTranslateX() > 600) {
    featuresSubParent.style.transform += "translateX(230px)";
  } else {
    featuresSubParent.style.transform = "translateX(0px)";
  }
};




openMenu.onclick = () =>
{
  document.getElementById( "links-list" ).style.transform = 'translateX(0)';
}

closeMenu.onclick = () =>
{
    document.getElementById("links-list").style.transform = "translateX(300px)";
}


testNext.onclick = () => {
  if (translateXOftest() > -400) {
    testimonials.style.transform += "translateX(-230px)";
  } else {
    testimonials.style.transform = "translateX(70px)";
  }
};

testPrev.onclick = () => {
  if (translateXOftest() > 400) {
    testimonials.style.transform += "translateX(230px)";
  } else {
    testimonials.style.transform = "translateX(70px)";
  }
};