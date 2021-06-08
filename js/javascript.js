$(document).ready(function() {
  $('#HTML').popover();
  $('#CSS').popover();
  $('#BOOSTRAP').popover();
  $('#JAVASCRIPT').popover();
  $('#JQUERY').popover();
  $('#GIT').popover();
  $('#SQL').popover();
  $('#JAVA').popover();
  $('#ARDUINO').popover();

  $("li").click(function() {
    $(".navbar-collapse").attr("class", "collapse navbar-collapse");
  });
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior

    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });

    } // End if

  });
});