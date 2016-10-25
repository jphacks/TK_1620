$(document).ready(function(){
  $(document).ready(function(){
  });
  $.simpleWeather({
    location: 'Tokyo, JP',
    unit: 'c',
    success: function(weather){
      html = '<p>'+weather.city+'</p>';
      html += '<p>'+weather.temp+'℃'+'</p>';

      $("#weather").html(html);
    },
    error: function(error){
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});
