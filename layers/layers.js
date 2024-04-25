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
var format_locations_1 = new ol.format.GeoJSON();
var features_locations_1 = format_locations_1.readFeatures(json_locations_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_locations_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_locations_1.addFeatures(features_locations_1);
var lyr_locations_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_locations_1, 
                style: style_locations_1,
                popuplayertitle: "locations",
                interactive: true,
                title: '<img src="styles/legend/locations_1.png" /> locations'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_locations_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_locations_1];
lyr_locations_1.set('fieldAliases', {'location_id': 'location_id', 'name': 'name', 'type': 'type', 'unit': 'unit', });
lyr_locations_1.set('fieldImages', {'location_id': 'TextEdit', 'name': 'TextEdit', 'type': '', 'unit': '', });
lyr_locations_1.set('fieldLabels', {'location_id': 'no label', 'name': 'inline label - visible with data', 'type': 'no label', 'unit': 'no label', });
lyr_locations_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});