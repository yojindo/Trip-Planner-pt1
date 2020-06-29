const mapboxgl = require('mapbox-gl')
mapboxgl.accessToken = 'pk.eyJ1IjoieW9qaW5kbyIsImEiOiJja2Mwb3hvb2gwbGpxMzBvZXM1aTlyaXhvIn0.YQL1FJs4zNp_D2SwKID0Qg'

const map = require('./index')

const marker = document.createElement('div')
marker.style.width = '32px'
marker.style.height = '39px'
marker.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)'

new mapboxgl.Marker(marker).setLngLat([-87.6354, 41.8885]).addTo(map);

const markerMaker = () => {
  //create the marker maker function so we do not need to repeat code.
}
