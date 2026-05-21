ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([691370.136868, 9196036.597579, 693889.137322, 9198031.150398]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_kecamatanGenteng_1 = new ol.format.GeoJSON();
var features_kecamatanGenteng_1 = format_kecamatanGenteng_1.readFeatures(json_kecamatanGenteng_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_kecamatanGenteng_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kecamatanGenteng_1.addFeatures(features_kecamatanGenteng_1);
var lyr_kecamatanGenteng_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kecamatanGenteng_1, 
                style: style_kecamatanGenteng_1,
                popuplayertitle: 'kecamatan Genteng',
                interactive: false,
                title: '<img src="styles/legend/kecamatanGenteng_1.png" /> kecamatan Genteng'
            });
var format_Aksesibilitas_2 = new ol.format.GeoJSON();
var features_Aksesibilitas_2 = format_Aksesibilitas_2.readFeatures(json_Aksesibilitas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Aksesibilitas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aksesibilitas_2.addFeatures(features_Aksesibilitas_2);
var lyr_Aksesibilitas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aksesibilitas_2, 
                style: style_Aksesibilitas_2,
                popuplayertitle: 'Aksesibilitas',
                interactive: true,
                title: '<img src="styles/legend/Aksesibilitas_2.png" /> Aksesibilitas'
            });
var format_Halte_3 = new ol.format.GeoJSON();
var features_Halte_3 = format_Halte_3.readFeatures(json_Halte_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Halte_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Halte_3.addFeatures(features_Halte_3);
var lyr_Halte_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Halte_3, 
                style: style_Halte_3,
                popuplayertitle: 'Halte',
                interactive: true,
                title: '<img src="styles/legend/Halte_3.png" /> Halte'
            });

lyr_OSMStandard_0.setVisible(true);lyr_kecamatanGenteng_1.setVisible(true);lyr_Aksesibilitas_2.setVisible(true);lyr_Halte_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_kecamatanGenteng_1,lyr_Aksesibilitas_2,lyr_Halte_3];
lyr_kecamatanGenteng_1.set('fieldAliases', {'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'fid': 'fid', 'LuasHa': 'LuasHa', 'Luasha_1': 'Luasha_1', });
lyr_Aksesibilitas_2.set('fieldAliases', {'fid': 'fid', 'Nama_Halte': 'Halte terdekat', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'Luas terjangkau Ha': 'Luas terjangkau Ha', 'Jalan._name': 'Rute yang dilayani', });
lyr_Halte_3.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'foto': 'foto', });
lyr_kecamatanGenteng_1.set('fieldImages', {'full_id': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', 'fid': 'TextEdit', 'LuasHa': 'TextEdit', 'Luasha_1': 'TextEdit', });
lyr_Aksesibilitas_2.set('fieldImages', {'fid': 'TextEdit', 'Nama_Halte': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', 'Luas terjangkau Ha': 'TextEdit', 'Jalan._name': 'TextEdit', });
lyr_Halte_3.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'foto': 'ExternalResource', });
lyr_kecamatanGenteng_1.set('fieldLabels', {'full_id': 'header label - always visible', 'Kecamatan': 'hidden field', 'Kelurahan': 'inline label - always visible', 'fid': 'hidden field', 'LuasHa': 'inline label - always visible', 'Luasha_1': 'hidden field', });
lyr_Aksesibilitas_2.set('fieldLabels', {'fid': 'hidden field', 'Nama_Halte': 'hidden field', 'Kecamatan': 'hidden field', 'Kelurahan': 'inline label - always visible', 'Luas terjangkau Ha': 'hidden field', 'Jalan._name': 'inline label - always visible', });
lyr_Halte_3.set('fieldLabels', {'Nama_Halte': 'hidden field', 'Keterangan': 'inline label - always visible', 'Sumber': 'hidden field', 'foto': 'inline label - always visible', });
lyr_Halte_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});