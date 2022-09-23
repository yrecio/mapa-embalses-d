var wms_layers = [];

var lyr_Callejero_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.ign.es/wms-inspire/ign-base",
    attributions: ' ',
                              params: {
                                "LAYERS": "IGNBaseTodo",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Callejero",
                            opacity: 0.398000,
                            
                            
                          });
              wms_layers.push([lyr_Callejero_0, 0]);
var format_cuencashidrograficas_1 = new ol.format.GeoJSON();
var features_cuencashidrograficas_1 = format_cuencashidrograficas_1.readFeatures(json_cuencashidrograficas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cuencashidrograficas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cuencashidrograficas_1.addFeatures(features_cuencashidrograficas_1);
var lyr_cuencashidrograficas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cuencashidrograficas_1, 
                style: style_cuencashidrograficas_1,
                interactive: true,
    title: 'cuencashidrograficas<br />\
    <img src="styles/legend/cuencashidrograficas_1_0.png" /> Sin datos<br />\
    <img src="styles/legend/cuencashidrograficas_1_1.png" /> 1 - 20<br />\
    <img src="styles/legend/cuencashidrograficas_1_2.png" /> 20 - 40<br />\
    <img src="styles/legend/cuencashidrograficas_1_3.png" /> 40 - 60<br />\
    <img src="styles/legend/cuencashidrograficas_1_4.png" /> 60 - 80<br />\
    <img src="styles/legend/cuencashidrograficas_1_5.png" /> 80 - 90<br />'
        });

lyr_Callejero_0.setVisible(true);lyr_cuencashidrograficas_1.setVisible(true);
var layersList = [lyr_Callejero_0,lyr_cuencashidrograficas_1];
lyr_cuencashidrograficas_1.set('fieldAliases', {'ID': 'ID', 'Cuenca': 'Cuenca hidrográfica', 'Capacidad': 'Capacidad (%)', });
lyr_cuencashidrograficas_1.set('fieldImages', {'ID': 'Hidden', 'Cuenca': 'TextEdit', 'Capacidad': 'TextEdit', });
lyr_cuencashidrograficas_1.set('fieldLabels', {'Cuenca': 'header label', 'Capacidad': 'header label', });
lyr_cuencashidrograficas_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});