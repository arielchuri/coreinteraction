$(document).ready(function() {
  // hides pi
  $('.p1').hide();
  // toggles p1 visibility
  $('.p2').click(function() {
    $('.p1').toggle();
  });
  // click on p3 to add a css class and run a function defined below.
  $('.p3').click(function() {
    $('.p3').toggleClass('important');
    myFunctionName();
  });
  //menu toggles
  $(".menu-toggle").click(function() {
    $(".hamburger").hide();
    $("#menu").addClass("showmenu");
  })
});
// when this functions run it checks to see if p3 has the 'important' class and shows an alert.
// why does it never show 'False'?
function myFunctionName() {
  if ($('.p3').hasClass('important') == true) {
    alert($('.p3').hasClass("important"));
  };
}
