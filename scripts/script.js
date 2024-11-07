$("button").click(function(){
    $.getJSON("https://mtrejo03.github.io/dev-david-hw/data.json", function(result){
      $.each(result, function(i, field){
        $("div").append(field + " ");
      });
    });
  });
