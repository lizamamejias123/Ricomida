$(function(){
  $("a").click(function(event) {
  alert(this.hash)
  });

  $("a").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();

      var gato = this.hash;

      $("html, body").animate({
        scrollTop: $(gato).offset().top
      }, 0.005, function(){
        window.location.hash = gato;
      });
    }
  });

  $('[data-toggle="popover"]').popover();

});
$(function(){
$('[data-toggle="tooltip"]').tooltip();

});
