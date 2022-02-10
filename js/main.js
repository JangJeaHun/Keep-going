$(document).ready(function(){
  $('#fullpage').fullpage({
    sectionSelector: '.section',
    //slideSelector: '.horizontal-scrolling',
    navigation: true,
    slidesNavigation: true,
    css3: true,
    controlArrows: false,
    anchors:['Section1','Section2','Section3','Section4','Section5']
  }); 
  
});