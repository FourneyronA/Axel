
// Création de cartes avec fons OSM
// var map_school = L.map('map_school',{
//     minZoom: 7,
//     maxZoom:16
//   });

var osmUrl= 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'

var osmAttrib = 'Basemaps © Carto';

//var osm = new L.TileLayer(osmUrl, {attribution: osmAttrib}).addTo(map_school);

var map_work = L.map('map_work',{
    minZoom: 5,
    maxZoom:16
  });
var osm = new L.TileLayer(osmUrl, {attribution: osmAttrib}).addTo(map_work);

// définir les paramètre de visualisation de la carte
//map_school.setView([45.455,4.5],9);
map_work.setView([45.39, 4.47],9);

// icone personnaliser 
var schoolIcon = L.icon({
    iconUrl: 'images/formation.svg',
    iconSize: [30,30],
    popupAnchor:  [-3, -20]
});

var workIcon = L.icon({
    iconUrl: 'images/travail.svg',
    iconSize: [25,25],
    popupAnchor:  [-3, -20]
});

// // ajout des différentes formations 
// var FIRMINY = L.marker([45.388527,4.292290], {icon: schoolIcon});
// FIRMINY.bindTooltip("<b> 2013 - 2014 </b> <br> Baccalauréat STI2D Energie Environnement mention bien", {
//     className : 'line_test',
   
//     permanent : false});
// FIRMINY.addTo(map_school);

// var LYON_GRATTE_CIEL = L.marker([45.766596,4.8853361], {icon: schoolIcon});
// LYON_GRATTE_CIEL.bindTooltip("<b> 2015 - 2016 </b> <br> Licence pro. Réseaux et Informatiques <br><br> <b> 2013 - 2015 </b> <br> DUT Génie Électrique et Informatique", {
//     className : 'line_test',
   
//     permanent : false});
// LYON_GRATTE_CIEL.addTo(map_school);

// var YSSINGEAUX = L.marker([45.134602,4.124570], {icon: schoolIcon});
// YSSINGEAUX.bindTooltip("<b> 2016 - 2018 </b> <br> BTS Développement Animation Territoires Ruraux", {
//     className : 'line_test',
   
//     permanent : false});
// YSSINGEAUX.addTo(map_school);

// var SAINT_ETIENNE = L.marker([45.426134,4.392968], {icon: schoolIcon});
// SAINT_ETIENNE.bindTooltip("<b> 2018 - 2018 </b> <br> MASTER Géographie Numérique", {
//     className : 'line_test',
   
//     permanent : false});
// SAINT_ETIENNE.addTo(map_school);

// var LYON_BRON = L.marker([45.717947,4.919683], {icon: schoolIcon});
// LYON_BRON.bindTooltip("<b> 2019 - 2020 </b> <br> MASTER Géographie Numérique", {
//     className : 'line_test',
   
//     permanent : false});
// LYON_BRON.addTo(map_school); 

// var LYON_ENS = L.marker([45.733341,4.834363], {icon: schoolIcon});
// LYON_ENS.bindTooltip("<b> 2019 - 2020 </b> <br> MASTER Géographie Numérique", {
//     className : 'line_test',
   
//     permanent : false});
// LYON_ENS.addTo(map_school);

// ajout des différentes expériences 
var SAINT_ETIENNE = L.marker([45.426134,4.392968], {icon: workIcon});
SAINT_ETIENNE.bindTooltip("<b>Centre National de la Recherche Scientifique</b><br><i> Chargé d'étude en recherche - 5 mois</i><br>Collecte, traitement et analyses de données <br> pour traiter la question de la pollution lumineuse <br>  et son impact environnemental.<br><br><br> <b>Centre National de la Recherche Scientifique</b><br><i> Analyste des données spatiales - 4 mois</i><br>Analyses des comportements spatiaux des <br>données de Faune France pour interpréter <br>les sciences participatives. <br><br><br> <b>OpenAgenda (Start-up dans le recensement culturel) </b><br><i>Géomaticien - 3 mois</i><br>Analyses et audit des données événementielles <br>spatiales d'OpenAgenda dans l'objectif d'aider <br>les collectivités à visualiser les événements <br>de leurs territoires", {
    className : 'line_test',
   
    permanent : false});
SAINT_ETIENNE.addTo(map_work);
// COORDO

var FESTIVAL_CHANT = L.marker([45.1286630,4.1266833], {icon: workIcon});
FESTIVAL_CHANT.bindTooltip("<b>Festival Le Chant des Sucs </b> <br><i> Coordinateur du projet - 3 mois</i><br>Coordination des structures culturelles afin<br>de valoriser la culture sur un territoire à l'aide <br>de partenaires locaux.", {
    className : 'line_test',
    permanent : false});
    FESTIVAL_CHANT.addTo(map_work);
    
var AIR_PL = L.marker([47.27634258,-1.51137148], {icon: workIcon});
AIR_PL.bindTooltip("<b>Air Pays de la Loire</b> <br><i>Ingénieur d'études environnementales - 6 mois</i><br>Développement d'indicateurs spatio-temporelles pour évaluer <br> la qualité des données et facilité la transition écologique.", {
    className : 'line_test',
    permanent : false});
    AIR_PL.addTo(map_work);
    
var DEMIDURE = L.marker([45.733341,4.834363], {icon: workIcon});
DEMIDURE.bindTooltip("<b>Démineur Durable</b> <br><i>Responsable développement - 3 mois</i><br>  Conception et développements d'une application cartographique, <br>visant à valoriser les données de la qualité de l'air de façon ludique.", {
    className : 'line_test',
    permanent : false});
    DEMIDURE.addTo(map_work);
    
// COORDO
var PERPALOUIE = L.marker([45.201860,4.039828], {icon: workIcon});
PERPALOUIE.bindTooltip("<b> Association Perpalouïe </b> <br><i> Organisateur - 2 mois </i><br> Création de l'événement \"Choisir son assiette\" <br>pour mettre en avant les produits locaux<br>et éthiques mais aussi sensibiliser<br>aux gaspillages alimentaires", {
    className : 'line_test',
   
    permanent : false});
    PERPALOUIE.addTo(map_work);

var APF_HANDAS = L.marker([45.760602,4.883632], {icon: workIcon});
APF_HANDAS.bindTooltip("<b> Association des Paralysés de France </b> <br><i> Développeur web - 3 mois </i> Développement d'un site web dynamique<br>et formation à la prise en main des outils informatiques", {
    className : 'line_test',
    permanent : false});
    APF_HANDAS.addTo(map_work);

var COMCOM_AMBERT = L.marker([45.554310,3.738610], {icon: workIcon});
COMCOM_AMBERT.bindTooltip("<b> Communauté de Communes Ambert Livradois Forez</b><br><i>Chargé de mission - 3 mois</i><br> Gestion d'un projet de revalorisation<br> des déchets verts sur 58 communes<br>par la mutualisation d'équipements", {
    className : 'line_test',
   
    permanent : false});
    COMCOM_AMBERT.addTo(map_work);

var FMC = L.marker([45.820162,4.589722], {icon: workIcon});
FMC.bindTooltip("<b> Fresenius Medical Care </b> <br><i> Assitant informatique - 1 an </i> <br> Développement d'une supersion informatique.<br>Membre du service informatique en interne", {
    className : 'line_test',
   
    permanent : false});
    FMC.addTo(map_work);

var COMCOM_SUCS = L.marker([45.128459,4.123727], {icon: workIcon});
COMCOM_SUCS.bindTooltip("<b>Communauté de Communes des Sucs</b> <br><i>Chargé de développement local - 3 mois</i><br>Réalisation d'un diagnostic territorial avec <br>le recensement des actions et équipements culturels <br>et la réflexion sur la prise de compétence culturelle ", {
    className : 'line_test',
   
    permanent : false});
    COMCOM_SUCS.addTo(map_work);

var MOUDEYRE = L.marker([44.955720,4.101668], {icon: workIcon});
MOUDEYRE.bindTooltip("<b> Ecomusée la Ferme des frères Perrel </b> <br><i>Responsable montage de projet - 2 mois </i><br> Organisation d'un événement répondant <br>aux problématiques de la structure et du territoire", {
    className : 'line_test',
   
    permanent : false});
    MOUDEYRE.addTo(map_work);

var GRECE = L.marker([37.962957,22.640943], {icon: workIcon});
GRECE.bindTooltip("<b>Association Filoxenia</b> <br><i>Animateur et Organisateur - 2 semaines </i><br> Voyage de coopération internationale en Grèce, <br>réalisation de sensibilisation à l'environnement.", {
    className : 'line_test',
   
    permanent : false});
    GRECE.addTo(map_work);