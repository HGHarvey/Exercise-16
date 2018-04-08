$(document).ready(function(){

$( "#btnShow" ).click(function() {
    $( ".display-basic" ).show() ;
  });
  $( "#btnHide" ).click(function() {
    $( ".display-basic" ).hide() ;
  });
  $( "#btnToggle" ).click(function() {
    $( ".display-basic" ).toggle() ;
  });
  $( "#btnFadeIn" ).click(function() {
    $( ".display-fade" ).fadeIn("fast");
  });
  $( "#btnFadeOut" ).click(function() {
    $( ".display-fade" ).fadeOut("slow");
  });
  $("#btnFadeToggle").click(function() {
    $( ".display-fade" ).fadeToggle();
  });
$('.part3').show();
$("#btnSlideDown").click(function(){
    $(".display-slide").slideDown(2000);
  });
  $("#btnSlideUp").click(function(){
    $(".display-slide").slideUp(500);
  });
  $("#btnSlideToggle").click(function(){
    $(".display-slide").slideToggle();
  });


});