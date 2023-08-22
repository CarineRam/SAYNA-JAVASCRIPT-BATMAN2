  
  window.addEventListener("scroll", function() {
    var image = document.querySelector(".illustrations");
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var imageHeight = image.offsetHeight;
    var maxScale = 1; // L'échelle maximale que vous souhaitez atteindre
    var maxScrollHeight = windowHeight - imageHeight;

    var scrollPercentage = scrollPosition / (maxScrollHeight);
    var scale = Math.min(scrollPercentage, 1) * maxScale;

    if(scrollPosition >= maxScrollHeight){
        scale = maxScale;
    }

    image.style.transform = "scale(" + scale + ") ";

  });
  window.addEventListener("scroll", function() {
    var image1 = document.querySelector(".illustrations2");
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var imageHeight = image1.offsetHeight;
    var maxScale = 1; // L'échelle maximale que vous souhaitez atteindre
    var maxScrollHeight = windowHeight - imageHeight;

    var scrollPercentage = scrollPosition / (maxScrollHeight);
    var scale = Math.min(scrollPercentage, 1) * maxScale;

    /*if(scrollPosition >= maxScrollHeight){
        scale = maxScale;
    }*/

    image1.style.transform = "scale(" + scale + ") ";

  });
  window.addEventListener("scroll", function() {
    var image = document.querySelector(".illustrations3");
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var imageHeight = image.offsetHeight;
    var maxScale = 1; // L'échelle maximale que vous souhaitez atteindre
  
    var scrollPercentage = scrollPosition / (windowHeight - imageHeight);
    var scale = Math.min(scrollPercentage, 1) * maxScale;
  
    image.style.transform = "scale(" + scale + ") ";
  });

  window.addEventListener("scroll", function() {
    var image = document.querySelector(".justiceLeaguePhoto");
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var imageHeight = image.offsetHeight;
    var maxScale = 1; // L'échelle maximale que vous souhaitez atteindre
  
    var scrollPercentage = scrollPosition / (windowHeight - windowHeight);
    var scale = Math.min(scrollPercentage, 1) * maxScale;
  
    image.style.transform = "scale(" + scale + ") ";
  });

  let bopen = document.querySelector("#open");
  let bclose = document.querySelector("#close");

  //fonction pour afficher le popup
  function afficher(){
    document.querySelector('#popup').style.display = "flex";
  }
  //fonction pour masquer le popup
  function masquer(){
    document.querySelector('#popup').style.display = "none";
  }

  bopen.addEventListener('click', afficher);
  bclose.addEventListener('click', masquer);