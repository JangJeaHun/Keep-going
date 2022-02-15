$(document).ready(function(){
  $('#fullpage').fullpage({
    sectionSelector: '.section',
    slideSelector: '.horizontal-scrolling',
    navigation: true,
    slidesNavigation: true,
    navigationTooltips: ['Main', '공지 사항', '객실 소개', '주변 관광지 소개','꼬리말'],
    showActiveTooltip: true,
    css3: true,
    controlArrows: false,
    anchors:['Section1','Section2','Section3','Section4','Section5']
    
  }); 
  $.fn.fullpage.setAllowScrolling(ture);
});
