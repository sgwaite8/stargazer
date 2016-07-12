$(document).ready(function(){
  $('#submit').click(function(event){
    event.preventDefault();
    var name = $('#search-name').val();
    search(name);


  });

});

function search(name) {
    var api = 'http://www.strudel.org.uk/lookUP/json/?name='+ name;
    // requires "jsonp" datatype.

      $.ajax({
        method: "GET",
        url: api,
        dataType: "jsonp",
        jsonpCallback: "showImage"
      })
}
function showImage(json) {
  var image = json.image.src;
  $('#preview').html(`<div><img src="${image}"></div>`);
  }
