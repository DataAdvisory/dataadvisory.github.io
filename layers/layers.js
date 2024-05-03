var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_location_observation_20240331_1 = new ol.format.GeoJSON();
var features_location_observation_20240331_1 = format_location_observation_20240331_1.readFeatures(json_location_observation_20240331_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_location_observation_20240331_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_location_observation_20240331_1.addFeatures(features_location_observation_20240331_1);
var lyr_location_observation_20240331_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_location_observation_20240331_1, 
                style: style_location_observation_20240331_1,
                popuplayertitle: "location_observation_20240331",
                interactive: true,
    title: 'location_observation_20240331<br />\
    <img src="styles/legend/location_observation_20240331_1_0.png" /> Non Verified<br />\
    <img src="styles/legend/location_observation_20240331_1_1.png" /> Estimated<br />\
    <img src="styles/legend/location_observation_20240331_1_2.png" /> Poor<br />\
    <img src="styles/legend/location_observation_20240331_1_3.png" /> Fair<br />\
    <img src="styles/legend/location_observation_20240331_1_4.png" /> Good<br />\
    <img src="styles/legend/location_observation_20240331_1_5.png" /> <br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_location_observation_20240331_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_location_observation_20240331_1];
lyr_location_observation_20240331_1.set('fieldAliases', {'location_id': 'location_id', 'name': 'name', 'quality_code': 'quality_code', 'timestamp': 'timestamp', 'value': 'value', });
lyr_location_observation_20240331_1.set('fieldImages', {'location_id': '', 'name': '', 'quality_code': '', 'timestamp': '', 'value': '', });
lyr_location_observation_20240331_1.set('fieldLabels', {'location_id': 'no label', 'name': 'inline label - always visible', 'quality_code': 'inline label - always visible', 'timestamp': 'inline label - always visible', 'value': 'no label', });
lyr_location_observation_20240331_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});