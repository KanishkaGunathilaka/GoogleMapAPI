var opacity = 0.1;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 13,
	  center: {lat: -37.8243, lng: 144.9234}, //center cordinates of the map
	  mapTypeId: 'terrain'
	});

	// Define the LatLng coordinates for the polygon.
	var first_polygon_cords = [[-37.787131751153915,144.8159408569336],[-37.79391457604158,144.84220504760742],[-37.81737834565081,144.84203338623047],[-37.82266683618851,144.81868743896484],[-37.79947602782783,144.81027603149414]];	
	//creates first object
	var first_polygon = new Polygon(map);
	//set the cordinate for the first polygon
	first_polygon.setCoordinates(first_polygon_cords);
	//set the display properties for the first polygon
	first_polygon.setDisplayProperties({color:'blue',opacity:opacity});
	//set the marker for the first polygon
	first_polygon.setMarker({lat: -37.80205314400207, lng: 144.82538223266602});
	
	//creates the second polygon
	var second_polygon_cords = [[-37.863470385874066,144.9184226989746],[-37.848832506474004,144.90589141845703],[-37.85750715625203,144.95052337646484]];
	var second_polygon = new Polygon(map);
	second_polygon.setCoordinates(second_polygon_cords);
	second_polygon.setDisplayProperties({color:'#FF0000',opacity:opacity});
	second_polygon.setMarker({lat:-37.85886247807693, lng:144.92855072021484});
	
	var third_polygon_cords = [[-37.8331071023325,144.92168426513672],[-37.78563944612242,144.9203109741211],[-37.78523244861118,144.93558883666992],[-37.81941242531438,144.93816375732422],[-37.8210396486882,145.00425338745117],[-37.80503706092161,145.0063133239746],[-37.80354511753133,145.02382278442383],[-37.83025990351395,145.02382278442383]];	
	var third_polygon = new Polygon(map);
	third_polygon.setCoordinates(third_polygon_cords);
	third_polygon.setDisplayProperties({color:'green',opacity:opacity});
	third_polygon.setMarker({lat: -37.824700770115996, lng:144.97369766235352});
	
	var fourth_polygon_cords = [[-37.8210396486882,144.86211776733398],[-37.79893346559685,144.85868453979492],[-37.80286695148152,144.8792839050293],[-37.817785166067594,144.87516403198242]];
	var fourth_polygon = new Polygon(map);
	fourth_polygon.setCoordinates(fourth_polygon_cords);
	fourth_polygon.setDisplayProperties({color:'yellow',opacity:opacity});
	fourth_polygon.setMarker({lat:-37.811411388625636, lng:144.86949920654297});
}

//creates polygon objects using this class. This is a reusable code and can pass any number of polygons
class Polygon{
	
	//constructor takes the map object from the initialisation  
	constructor(map){
		this.map = map;
	}
	
	setCoordinates(coordinates){
		this.cord = [];
		//loop through the latitude and longitude coordinates. Polygons can have different number of corners
		for(var i=0;i<=coordinates.length-1;i++){
			this.cord.push( new google.maps.LatLng(coordinates[i][0],coordinates[i][1]));
		}
		this.cord;
	}
	
	//set the display properties for the polygon
	setDisplayProperties(props){
		var bermudaTriangle = new google.maps.Polygon({
		  paths: this.cord,
		  strokeColor: props.color,
		  strokeWeight: 3,
		  fillColor: props.color,
		  fillOpacity: props.opacity
		});
		bermudaTriangle.setMap(this.map);
	}
	
	//set the marker for the polygon
	setMarker(marker){
		var marker = new google.maps.Marker({
          position: marker,
          map: this.map
        });
	}	
}


function changeOpacity(){
	var selection = document.getElementById("opacitySelector");
	//console.log(selection.value);
	opacity = selection.value;
	initMap();
}


      
   