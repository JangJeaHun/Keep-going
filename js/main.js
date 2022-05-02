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

$(function(){
  tab();

});

function tab(){
  $("#deluxe_ondol").click(function(){
      $(".room_1").css("display","block");
      $(".room_2").css("display","none");
      $(".room_3").css("display","none");
      $(".room_4").css("display","none");

      $("#deluxe_ondol").css({
        "font-weight":"900",
        "color":"#2A286E"
      });

      $("#double").css({
        "font-weight":"inherit",
        "color":"black"
      });
      $("#twin").css({
        "font-weight":"inherit",
        "color":"black"
      });
      $("#suite").css({
        "font-weight":"inherit",
        "color":"black"
      });


      $(this).addClass("active").sibling("div").removeClass("active");
  })
  $("#double").click(function(){
    $(".room_1").css("display","none");
    $(".room_2").css("display","block");
    $(".room_3").css("display","none");
    $(".room_4").css("display","none");


    $("#deluxe_ondol").css({
      "font-weight":"inherit",
      "color":"black"
    });

    $("#double").css({
      "font-weight":"900",
      "color":"#2A286E"
    });
    $("#twin").css({
      "font-weight":"inherit",
      "color":"black"
    });
    $("#suite").css({
      "font-weight":"inherit",
      "color":"black"
    });


      $(this).addClass("active");
      $("#deluxe_ondol").removeClass("active");
      $("#twin").removeClass("active");
      $("#suite").removeClass("active");
  })
  $("#twin").click(function(){
    $(".room_1").css("display","none");
    $(".room_2").css("display","none");
    $(".room_3").css("display","block");
    $(".room_4").css("display","none");

    $("#deluxe_ondol").css({
      "font-weight":"inherit",
      "color":"black"
    });
    $("#double").css({
      "font-weight":"inherit",
      "color":"black"
    });
    $("#twin").css({

      "font-weight":"900",
      "color":"#2A286E"
    });
    $("#suite").css({
      "font-weight":"inherit",
      "color":"black"
    });


      $(this).addClass("active");
      $("#deluxe_ondol").removeClass("active");
      $("#double").removeClass("active");
      $("#suite").removeClass("active");
  })
  $("#suite").click(function(){
    $(".room_1").css("display","none");
    $(".room_2").css("display","none");
    $(".room_3").css("display","none");
    $(".room_4").css("display","block");

    $("#deluxe_ondol").css({
      "font-weight":"inherit",
      "color":"black"
    });
    $("#double").css({
      "font-weight":"inherit",
      "color":"black"
    });
    $("#twin").css({
      "font-weight":"inherit",
      "color":"black"
    });
    $("#suite").css({
      "font-weight":"900",
      "color":"#2A286E"
    });


      $(this).addClass("active");
      $("#deluxe_ondol").removeClass("active");
      $("#double").removeClass("active");
      $("#twin").removeClass("active");
  })
}


