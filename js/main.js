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
$(document).ready(function(){
  $('#fullpage_1').fullpage({
    sectionSelector: '.section',
    slideSelector: '.horizontal-scrolling',
    navigation: true,
    slidesNavigation: true,
    navigationTooltips: ['나로우주센터', '청소년우주체험센터', '천문과학관', '거문도/백도','소록도','나로도해수욕장','염포해수욕장','나로도항','봉래산'],
    showActiveTooltip: true,
    css3: true,
    controlArrows: false,
    anchors:['Section1','Section2','Section3','Section4','Section5','Section6','Section7','Section8','Section9']
    
  }); 
  $.fn.fullpage.setAllowScrolling(ture);
});