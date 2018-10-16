$(function() {

  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello</li>");
    $("ul#webpage").prepend("<li>Hello, you.</li>");
    $("li").css('background-color', "green");
  });

  $("button#goodbye").click(function() {
    $("ul").append("<li>Goodbye</li>");
  });

  $("button#go").click(function() {
    $("ul").before("<div><p>Something else</p></div>");
  });

  $("button#copy").click(function() {
    $("ul").after("<div><p>Something</p></div>");
  });







});
