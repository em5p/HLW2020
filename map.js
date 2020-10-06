mapboxgl.accessToken = 'pk.eyJ1IjoiZWdvaDEzMDQiLCJhIjoiY2tmeGN1OHowMTg4azJ0bjRkemw4ejJvYiJ9.Cg5puSBwv_RHI77QeeCQjw';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [-84.398, 33.776],
  zoom: 16
});

var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
    //   latitude, longitude i think? left to right, up and down
      coordinates: [-84.396, 33.777]
    },
    properties: {
      title: 'Mapbox',
      description: 'Klaus'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-84.3962, 33.775]
    },
    properties: {
      title: 'Mapbox',
      description: 'Culc'
    }
  }]
};

// add markers to map
geojson.features.forEach(function(marker) {

// create a HTML element for each feature
var el = document.createElement('div');
el.className = 'marker';

// make a marker for each feature and add to the map
new mapboxgl.Marker(el)
  .setLngLat(marker.geometry.coordinates)
  .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
  .addTo(map);
});

// map.on('click', function(e) {
//   var features = map.queryRenderedFeatures(e.point, {
//     layers: ['layer-name-here'] // replace this with the name of the layer
//   });

//   if (!features.length) {
//     return;
//   }

//   var feature = features[0];

//   var popup = new mapboxgl.Popup({ offset: [0, -15] })
//     .setLngLat(feature.geometry.coordinates)
//     .setHTML('<h3>' + feature.properties.title + '</h3><p>' + feature.properties.description + '</p>')
//     .addTo(map);
// });