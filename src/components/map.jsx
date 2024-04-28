function initiateMap(){
    var coord = {lat:-34.6169921 ,lng:-58.3842611};
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom: 100,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    })
}