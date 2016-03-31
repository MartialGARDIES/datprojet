var map;
function initMap() {


  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 14.654345, lng: -15.263202},
    zoom: 7,
    scrollwheel:  false,
  });

var marker = new google.maps.Marker({
    map: map,
    place: {
      location: {lat: 16.019060, lng: -16.446780,},
      query: 'Google, Sydney, Australia'

    },
    
  });





  var marker2 = new google.maps.Marker({
    map: map,
    place: {
      location: {lat: 14, lng: -15},
      query: 'Google, Sydney, Australia'

    },
    
  });



  marker.addListener('click', function() {
    ouvrir(0);
  });

  marker2.addListener('click', function() {
    ouvrir(1);
  });

document.getElementById("fermer").onclick =function(){
fermer()}

document.getElementById("fermer2").onclick =function(){
fermer()}


  function ouvrir(numero){
  var tabinfo = document.getElementsByClassName("information");
  var info = tabinfo[numero];
  info.setAttribute("class","informationon");
  }


  function fermer(){
  var tabinfo = document.getElementsByClassName("informationon");
  var info = tabinfo[0];
  info.setAttribute("class","information");
  }


}

