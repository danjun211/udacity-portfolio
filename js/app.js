function filterKind(ele, kind) {
  if(kind === "all") {
    $(ele).closest(".card-list-item").show();
  } else {
    if($(ele).data("kind") === kind) {
      $(ele).closest(".card-list-item").show();
    } else {
      $(ele).closest(".card-list-item").hide();
    }
  }
}

$(function(){ 
  $(".card").on("click", "img.card-img-top, .card-title", function(e){
    location.href = $(e.delegateTarget).data("href");
  });

  $(".fa-search").on("click", function (e) {
    $("#input-search-text").toggle();
  });

  $(".nav-link").on("click", function(e) {
    switch($(e.currentTarget).data("kind")) {
      case "all":
      $(".card").each(function(i, ele) {
        filterKind(ele, "all");
      });
      break;

      case "web":
        $(".card").each(function(i, ele) {
          filterKind(ele, "web");
        });
      break;

      case "mobile":
        $(".card").each(function(i, ele) {
          filterKind(ele, "mobile");
        });
      break;

      case "etc":
        $(".card").each(function(i, ele) {
          filterKind(ele, "etc");
        });
      break;
    }
  });

  $("#input-search-text").on("keydown", function (e){ 
    if(e.keyCode === 13) {
      $(".card").each(function(i, ele) {
        var re = new RegExp(e.currentTarget.value, "i");
        if(re.test($(ele).find(".card-title").text()) || re.test($(ele).find(".card-text").text())) {
          $(ele).closest(".card-list-item").show();
        } else {
          $(ele).closest(".card-list-item").hide();
        }
      });
    }
  });
});