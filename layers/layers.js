var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Tauxdemotorisation_1 = new ol.format.GeoJSON();
var features_Tauxdemotorisation_1 = format_Tauxdemotorisation_1.readFeatures(json_Tauxdemotorisation_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tauxdemotorisation_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tauxdemotorisation_1.addFeatures(features_Tauxdemotorisation_1);
var lyr_Tauxdemotorisation_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tauxdemotorisation_1, 
                style: style_Tauxdemotorisation_1,
                popuplayertitle: 'Taux de motorisation',
                interactive: true,
    title: 'Taux de motorisation<br />\
    <img src="styles/legend/Tauxdemotorisation_1_0.png" /> 45 à 77 %<br />\
    <img src="styles/legend/Tauxdemotorisation_1_1.png" /> 77 à 88 %<br />\
    <img src="styles/legend/Tauxdemotorisation_1_2.png" /> 88 à 93 %<br />\
    <img src="styles/legend/Tauxdemotorisation_1_3.png" /> 93 à 95 %<br />\
    <img src="styles/legend/Tauxdemotorisation_1_4.png" /> 95 à 100 %<br />' });
var format_TempstrajetauxMedecinsgeneralistes_2 = new ol.format.GeoJSON();
var features_TempstrajetauxMedecinsgeneralistes_2 = format_TempstrajetauxMedecinsgeneralistes_2.readFeatures(json_TempstrajetauxMedecinsgeneralistes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempstrajetauxMedecinsgeneralistes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempstrajetauxMedecinsgeneralistes_2.addFeatures(features_TempstrajetauxMedecinsgeneralistes_2);
var lyr_TempstrajetauxMedecinsgeneralistes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempstrajetauxMedecinsgeneralistes_2, 
                style: style_TempstrajetauxMedecinsgeneralistes_2,
                popuplayertitle: 'Temps trajet aux Medecins generalistes',
                interactive: true,
    title: 'Temps trajet aux Medecins generalistes<br />\
    <img src="styles/legend/TempstrajetauxMedecinsgeneralistes_2_0.png" /> 0,5 - 3,4<br />\
    <img src="styles/legend/TempstrajetauxMedecinsgeneralistes_2_1.png" /> 3,4 - 6,9<br />\
    <img src="styles/legend/TempstrajetauxMedecinsgeneralistes_2_2.png" /> 6,9 - 18,4<br />\
    <img src="styles/legend/TempstrajetauxMedecinsgeneralistes_2_3.png" /> 18,4 - 34,6<br />\
    <img src="styles/legend/TempstrajetauxMedecinsgeneralistes_2_4.png" /> 34,6 - 63,1<br />' });
var format_TempstrajetauxEcoles_3 = new ol.format.GeoJSON();
var features_TempstrajetauxEcoles_3 = format_TempstrajetauxEcoles_3.readFeatures(json_TempstrajetauxEcoles_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempstrajetauxEcoles_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempstrajetauxEcoles_3.addFeatures(features_TempstrajetauxEcoles_3);
var lyr_TempstrajetauxEcoles_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempstrajetauxEcoles_3, 
                style: style_TempstrajetauxEcoles_3,
                popuplayertitle: 'Temps trajet aux Ecoles',
                interactive: true,
    title: 'Temps trajet aux Ecoles<br />\
    <img src="styles/legend/TempstrajetauxEcoles_3_0.png" /> 0 - 4,9<br />\
    <img src="styles/legend/TempstrajetauxEcoles_3_1.png" /> 4,9 - 11,7<br />\
    <img src="styles/legend/TempstrajetauxEcoles_3_2.png" /> 11,7 - 21,2<br />\
    <img src="styles/legend/TempstrajetauxEcoles_3_3.png" /> 21,2 - 44,7<br />\
    <img src="styles/legend/TempstrajetauxEcoles_3_4.png" /> 44,7 - 62<br />' });
var format_TempstrajetauxCommercesalimentaires_4 = new ol.format.GeoJSON();
var features_TempstrajetauxCommercesalimentaires_4 = format_TempstrajetauxCommercesalimentaires_4.readFeatures(json_TempstrajetauxCommercesalimentaires_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempstrajetauxCommercesalimentaires_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempstrajetauxCommercesalimentaires_4.addFeatures(features_TempstrajetauxCommercesalimentaires_4);
var lyr_TempstrajetauxCommercesalimentaires_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempstrajetauxCommercesalimentaires_4, 
                style: style_TempstrajetauxCommercesalimentaires_4,
                popuplayertitle: 'Temps trajet aux Commerces alimentaires',
                interactive: true,
    title: 'Temps trajet aux Commerces alimentaires<br />\
    <img src="styles/legend/TempstrajetauxCommercesalimentaires_4_0.png" /> 0,3 - 4,1<br />\
    <img src="styles/legend/TempstrajetauxCommercesalimentaires_4_1.png" /> 4,1 - 8,4<br />\
    <img src="styles/legend/TempstrajetauxCommercesalimentaires_4_2.png" /> 8,4 - 14<br />\
    <img src="styles/legend/TempstrajetauxCommercesalimentaires_4_3.png" /> 14 - 28,6<br />\
    <img src="styles/legend/TempstrajetauxCommercesalimentaires_4_4.png" /> 28,6 - 60<br />' });
var format_Temps_trajetauxcinmas_5 = new ol.format.GeoJSON();
var features_Temps_trajetauxcinmas_5 = format_Temps_trajetauxcinmas_5.readFeatures(json_Temps_trajetauxcinmas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Temps_trajetauxcinmas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Temps_trajetauxcinmas_5.addFeatures(features_Temps_trajetauxcinmas_5);
var lyr_Temps_trajetauxcinmas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Temps_trajetauxcinmas_5, 
                style: style_Temps_trajetauxcinmas_5,
                popuplayertitle: 'Temps_trajet aux cinémas',
                interactive: true,
    title: 'Temps_trajet aux cinémas<br />\
    <img src="styles/legend/Temps_trajetauxcinmas_5_0.png" /> 3 - 14<br />\
    <img src="styles/legend/Temps_trajetauxcinmas_5_1.png" /> 14 - 27<br />\
    <img src="styles/legend/Temps_trajetauxcinmas_5_2.png" /> 27 - 49<br />\
    <img src="styles/legend/Temps_trajetauxcinmas_5_3.png" /> 49 - 115<br />\
    <img src="styles/legend/Temps_trajetauxcinmas_5_4.png" /> 115 - 163<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Tauxdemotorisation_1.setVisible(true);lyr_TempstrajetauxMedecinsgeneralistes_2.setVisible(true);lyr_TempstrajetauxEcoles_3.setVisible(true);lyr_TempstrajetauxCommercesalimentaires_4.setVisible(true);lyr_Temps_trajetauxcinmas_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Tauxdemotorisation_1,lyr_TempstrajetauxMedecinsgeneralistes_2,lyr_TempstrajetauxEcoles_3,lyr_TempstrajetauxCommercesalimentaires_4,lyr_Temps_trajetauxcinmas_5];
lyr_Tauxdemotorisation_1.set('fieldAliases', {'fid': 'fid', 'cleabs': 'cleabs', 'code_insee': 'code_insee', 'nom_commune': 'nom_commune', 'iris': 'iris', 'code_iris': 'code_iris', 'nom_iris': 'nom_iris', 'type_iris': 'type_iris', 'COM': 'COM', 'TYP_IRIS': 'TYP_IRIS', 'LAB_IRIS': 'LAB_IRIS', 'P22_RP': 'P22_RP', 'P22_RP_VOIT1P': 'P22_RP_VOIT1P', 'taux_motorisation': 'taux_motorisation', 'classe_motorisation': 'classe_motorisation', });
lyr_TempstrajetauxMedecinsgeneralistes_2.set('fieldAliases', {'fid': 'fid', 'cleabs': 'cleabs', 'code_insee': 'code_insee', 'nom_commune': 'nom_commune', 'iris': 'iris', 'code_iris': 'code_iris', 'nom_iris': 'nom_iris', 'type_iris': 'type_iris', 'temps_Cinema': 'temps_Cinema', 'temps_Commerce_alimentaire': 'temps_Commerce_alimentaire', 'temps_Ecole': 'temps_Ecole', 'temps_Medecin_generaliste': 'temps_Medecin_generaliste', });
lyr_TempstrajetauxEcoles_3.set('fieldAliases', {'fid': 'fid', 'cleabs': 'cleabs', 'code_insee': 'code_insee', 'nom_commune': 'nom_commune', 'iris': 'iris', 'code_iris': 'code_iris', 'nom_iris': 'nom_iris', 'type_iris': 'type_iris', 'temps_Cinema': 'temps_Cinema', 'temps_Commerce_alimentaire': 'temps_Commerce_alimentaire', 'temps_Ecole': 'temps_Ecole', 'temps_Medecin_generaliste': 'temps_Medecin_generaliste', });
lyr_TempstrajetauxCommercesalimentaires_4.set('fieldAliases', {'fid': 'fid', 'cleabs': 'cleabs', 'code_insee': 'code_insee', 'nom_commune': 'nom_commune', 'iris': 'iris', 'code_iris': 'code_iris', 'nom_iris': 'nom_iris', 'type_iris': 'type_iris', 'temps_Cinema': 'temps_Cinema', 'temps_Commerce_alimentaire': 'temps_Commerce_alimentaire', 'temps_Ecole': 'temps_Ecole', 'temps_Medecin_generaliste': 'temps_Medecin_generaliste', });
lyr_Temps_trajetauxcinmas_5.set('fieldAliases', {'fid': 'fid', 'cleabs': 'cleabs', 'code_insee': 'code_insee', 'nom_commune': 'nom_commune', 'iris': 'iris', 'code_iris': 'code_iris', 'nom_iris': 'nom_iris', 'type_iris': 'type_iris', 'temps_Cinema': 'temps_Cinema', 'temps_Commerce_alimentaire': 'temps_Commerce_alimentaire', 'temps_Ecole': 'temps_Ecole', 'temps_Medecin_generaliste': 'temps_Medecin_generaliste', });
lyr_Tauxdemotorisation_1.set('fieldImages', {'fid': 'TextEdit', 'cleabs': 'TextEdit', 'code_insee': 'TextEdit', 'nom_commune': 'TextEdit', 'iris': 'TextEdit', 'code_iris': 'TextEdit', 'nom_iris': 'TextEdit', 'type_iris': 'TextEdit', 'COM': 'TextEdit', 'TYP_IRIS': 'TextEdit', 'LAB_IRIS': 'TextEdit', 'P22_RP': 'TextEdit', 'P22_RP_VOIT1P': 'TextEdit', 'taux_motorisation': 'TextEdit', 'classe_motorisation': 'TextEdit', });
lyr_TempstrajetauxMedecinsgeneralistes_2.set('fieldImages', {'fid': 'TextEdit', 'cleabs': 'TextEdit', 'code_insee': 'TextEdit', 'nom_commune': 'TextEdit', 'iris': 'TextEdit', 'code_iris': 'TextEdit', 'nom_iris': 'TextEdit', 'type_iris': 'TextEdit', 'temps_Cinema': 'TextEdit', 'temps_Commerce_alimentaire': 'TextEdit', 'temps_Ecole': 'TextEdit', 'temps_Medecin_generaliste': 'TextEdit', });
lyr_TempstrajetauxEcoles_3.set('fieldImages', {'fid': 'TextEdit', 'cleabs': 'TextEdit', 'code_insee': 'TextEdit', 'nom_commune': 'TextEdit', 'iris': 'TextEdit', 'code_iris': 'TextEdit', 'nom_iris': 'TextEdit', 'type_iris': 'TextEdit', 'temps_Cinema': 'TextEdit', 'temps_Commerce_alimentaire': 'TextEdit', 'temps_Ecole': 'TextEdit', 'temps_Medecin_generaliste': 'TextEdit', });
lyr_TempstrajetauxCommercesalimentaires_4.set('fieldImages', {'fid': 'TextEdit', 'cleabs': 'TextEdit', 'code_insee': 'TextEdit', 'nom_commune': 'TextEdit', 'iris': 'TextEdit', 'code_iris': 'TextEdit', 'nom_iris': 'TextEdit', 'type_iris': 'TextEdit', 'temps_Cinema': 'TextEdit', 'temps_Commerce_alimentaire': 'TextEdit', 'temps_Ecole': 'TextEdit', 'temps_Medecin_generaliste': 'TextEdit', });
lyr_Temps_trajetauxcinmas_5.set('fieldImages', {'fid': 'TextEdit', 'cleabs': 'TextEdit', 'code_insee': 'TextEdit', 'nom_commune': 'TextEdit', 'iris': 'TextEdit', 'code_iris': 'TextEdit', 'nom_iris': 'TextEdit', 'type_iris': 'TextEdit', 'temps_Cinema': 'TextEdit', 'temps_Commerce_alimentaire': 'TextEdit', 'temps_Ecole': 'TextEdit', 'temps_Medecin_generaliste': 'TextEdit', });
lyr_Tauxdemotorisation_1.set('fieldLabels', {'fid': 'hidden field', 'cleabs': 'hidden field', 'code_insee': 'hidden field', 'nom_commune': 'inline label - visible with data', 'iris': 'inline label - visible with data', 'code_iris': 'hidden field', 'nom_iris': 'inline label - visible with data', 'type_iris': 'hidden field', 'COM': 'inline label - visible with data', 'TYP_IRIS': 'hidden field', 'LAB_IRIS': 'inline label - visible with data', 'P22_RP': 'inline label - visible with data', 'P22_RP_VOIT1P': 'inline label - visible with data', 'taux_motorisation': 'inline label - visible with data', 'classe_motorisation': 'inline label - visible with data', });
lyr_TempstrajetauxMedecinsgeneralistes_2.set('fieldLabels', {'fid': 'hidden field', 'cleabs': 'hidden field', 'code_insee': 'hidden field', 'nom_commune': 'inline label - visible with data', 'iris': 'inline label - visible with data', 'code_iris': 'hidden field', 'nom_iris': 'inline label - visible with data', 'type_iris': 'hidden field', 'temps_Cinema': 'hidden field', 'temps_Commerce_alimentaire': 'hidden field', 'temps_Ecole': 'hidden field', 'temps_Medecin_generaliste': 'inline label - visible with data', });
lyr_TempstrajetauxEcoles_3.set('fieldLabels', {'fid': 'hidden field', 'cleabs': 'hidden field', 'code_insee': 'hidden field', 'nom_commune': 'inline label - visible with data', 'iris': 'inline label - always visible', 'code_iris': 'inline label - visible with data', 'nom_iris': 'inline label - visible with data', 'type_iris': 'inline label - visible with data', 'temps_Cinema': 'hidden field', 'temps_Commerce_alimentaire': 'hidden field', 'temps_Ecole': 'inline label - visible with data', 'temps_Medecin_generaliste': 'hidden field', });
lyr_TempstrajetauxCommercesalimentaires_4.set('fieldLabels', {'fid': 'hidden field', 'cleabs': 'hidden field', 'code_insee': 'hidden field', 'nom_commune': 'inline label - always visible', 'iris': 'inline label - visible with data', 'code_iris': 'hidden field', 'nom_iris': 'inline label - visible with data', 'type_iris': 'hidden field', 'temps_Cinema': 'hidden field', 'temps_Commerce_alimentaire': 'inline label - visible with data', 'temps_Ecole': 'hidden field', 'temps_Medecin_generaliste': 'hidden field', });
lyr_Temps_trajetauxcinmas_5.set('fieldLabels', {'fid': 'hidden field', 'cleabs': 'hidden field', 'code_insee': 'hidden field', 'nom_commune': 'inline label - visible with data', 'iris': 'inline label - visible with data', 'code_iris': 'inline label - visible with data', 'nom_iris': 'inline label - visible with data', 'type_iris': 'inline label - visible with data', 'temps_Cinema': 'inline label - visible with data', 'temps_Commerce_alimentaire': 'hidden field', 'temps_Ecole': 'hidden field', 'temps_Medecin_generaliste': 'hidden field', });
lyr_Temps_trajetauxcinmas_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});