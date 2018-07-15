$(function(){ 
  $(".card").on("click", "img.card-img-top, .card-title", function(e){
    location.href = $(e.delegateTarget).data("href");
  });
});