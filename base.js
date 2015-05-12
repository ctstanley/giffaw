$(document).ready(function(){
  // press enter to search
  // cleaned up the mockData script from before
  alert("Ready?");
  var check = 0;
  $("#input").keypress(function(e){
  	var keycode = (e.keyCode ? e.keyCode : e.which)
  	if (keycode == '13'){
  		var valu = $("#input").val();
  		$(".container-fluid").empty();
  		$.get("http://api.giphy.com/v1/gifs/search?q='" + valu + "'&api_key=dc6zaTOxFJmzC", render);
  	}
  });
 $.get("http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC", render);
   
    // 

function render(responseData) {
    var data = responseData.data;
    data.forEach(function(item, i) {
        var thumb = item.images.fixed_height.url;
        $(".container-fluid").append("<img src='" + thumb + "'>"); // mind the single vs. double quotes!
    })
}
  console.log("here's your data:", mockData)
})