//JavaScript method
var divs = document.getElementsByTagName('div');
divs[0].style.paddingLeft = "0px";
divs[0].style.paddingRight = "0px";

var headings = ["Canberra Art Biennial"];

var contents = ["Canberra Art Biennial"];
//Source of the images

var images = ["Riotact", "Contour", "Contour2", "Harris", "NewArt", "Sullivan"];


var techSection = document.getElementById("techs");
for (var x = 0; x < images.length; x++) {
    techSection.innerHTML +=
        //
        "   <img src='images/CBR1/" + images[x] + ".jpg' />" +
      "   <figcaption>" +
      // "       <h3>" + headings[x] + "</h3>" +
        //"       <p>" + contents[x] + "</p>" +
        "   </figcaption>" +
        "</figure>";
}


var figures = document.getElementsByTagName("figure");
for (var x = 0; x < figures.length; x++) {
    figures[x].style.padding = "0px";
    figures[x].style.margin = "0px";
    figures[x].style.border = "none";
}


//Source of the images
//title of the carousel page

var slideImages = ["Contour3", "Contour4", "Archive"];
var Title = ["COVID-19", "People", "Subscribe to our Newsletter"];

var sliders = document.getElementById("slides");

for (var x = 0; x < slideImages.length; x++) {
    sliders.innerHTML +=
        "<li data-target='#myCarousel' data-slide-to=" + x + "class='active'></li > ";
}

var imageSlide = document.getElementById("slideImage");

for (var a = 0; a < slideImages.length; a++) {
    var activeClass = '';
    if (a == 0) activeClass = 'active';
    imageSlide.innerHTML +=
        "<div class='carousel-item " + activeClass + "'>" +
        "    <img src='images/CBR1/" + slideImages[a] + ".jpg' alt="+ Title[a] + " class='img-fluid' />" +
        "    <div class='carousel-caption' role='option'>" +
        "        <header class='carouselTitle'>" + Title[a] + "</header>" +
        "        <br /><br />" +
        "        <input class='learnMore' type='button' value='Learn More' />" +
        "        <br />" +
        "    </div>" +
        "</div>";
}





