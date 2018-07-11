

function code_sante(code){

    var data =  [
{
"Departement": "1",
"Nom": "Auvergne-Rhône-Alpes",
"Filiale_Seche_Healthcare": "Séché Healthcare Lyon",
"Filiere ": "DASRI",
"Téléphone": "04.72.79.32.33",
"Attributaire de la piste": "",
"Visibilité de la piste": "Valérie",
"Address": ""
},
{
"Departement": "2",
"Nom": "Nord-Pas-de-Calais-Picardie",
"Filiale_Seche_Healthcare": "Sodicome",
"Filiere ": "DASRI",
"Téléphone": "02.99.64.82.64",
"Attributaire de la piste": "",
"Visibilité de la piste": "Valérie",
"Address": ""
},
{
"Departement": "4",
"Nom": "Provence-Alpes-Côte-d'Azur",
"Filiale_Seche_Healthcare": "Séché Healthcare Lyon",
"Filiere ": "DASRI",
"Téléphone": "04.72.79.32.33",
"Attributaire de la piste": "",
"Visibilité de la piste": "Valérie",
"Address": ""
},
{
"Departement": "8",
"Nom": "Alsace-Champagne-Ardenne-Lorraine",
"Filiale_Seche_Healthcare": "Séché Healthcare Lyon",
"Filiere ": "DASRI",
"Téléphone": "04.72.79.32.33",
"Attributaire de la piste": "",
"Visibilité de la piste": "Valérie",
"Address": ""
},
{
"Departement": "9",
"Nom": "Languedoc-Roussillon-Midi-Pyrénées",
"Filiale_Seche_Healthcare": "Séché Healthcare Lyon",
"Filiere ": "DASRI",
"Téléphone": "04.72.79.32.33",
"Attributaire de la piste": "",
"Visibilité de la piste": "Valérie",
"Address": ""
},
{
"Departement": "14",
"Nom": "Normandie",
"Filiale_Seche_Healthcare": "Sodicome",
"Filiere ": "DASRI",
"Téléphone": "02.99.64.82.64",
"Attributaire de la piste": "",
"Visibilité de la piste": "Valérie",
"Address": ""
},
{
"Departement": "16",
"Nom": "Aquitaine-Limousin-Poitou-Charentes",
"Filiale_Seche_Healthcare": "Séché Healthcare Fleuré",
"Filiere ": "DASRI",
"Téléphone": "02.99.64.82.64",
"Attributaire de la piste": "",
"Visibilité de la piste": "Valérie",
"Address": ""
},
{
"Departement": "18",
"Nom": "Centre",
"Filiale_Seche_Healthcare": "Séché Healthcare Lyon",
"Filiere ": "DASRI",
"Téléphone": "04.72.79.32.33",
"Attributaire de la piste": "",
"Visibilité de la piste": "Valérie",
"Address": ""
},
{
"Departement": "20",
"Nom": "Corse",
"Filiale_Seche_Healthcare": "",
"Filiere ": "DASRI",
"Téléphone": "",
"Attributaire de la piste": "Pas d'envoi",
"Visibilité de la piste": "",
"Address": ""
},
{
"Departement": "21",
"Nom": "Bourgogne-Franche-Comté",
"Filiale_Seche_Healthcare": "",
"Filiere ": "DASRI",
"Téléphone": "",
"Attributaire de la piste": "Pas d'envoi",
"Visibilité de la piste": "",
"Address": ""
},
{
"Departement": "44",
"Nom": "Pays de la Loire",
"Filiale_Seche_Healthcare": "Séché Healthcare Nantes",
"Filiere ": "DASRI",
"Téléphone": "02.99.64.82.64",
"Attributaire de la piste": "",
"Visibilité de la piste": "Valérie",
"Address": ""
},
{
"Departement": "75",
"Nom": "Ile-de-France",
"Filiale_Seche_Healthcare": "Sodicome",
"Filiere ": "DASRI",
"Téléphone": "02.99.64.82.64",
"Attributaire de la piste": "",
"Visibilité de la piste": "Valérie",
"Address": ""
},
{
"Departement": "971",
"Nom": "Guadeloupe",
"Filiale_Seche_Healthcare": "",
"Filiere ": "DASRI",
"Téléphone": "",
"Attributaire de la piste": "",
"Visibilité de la piste": "",
"Address": ""
},
{
"Departement": "972",
"Nom": "Martinique",
"Filiale_Seche_Healthcare": "",
"Filiere ": "DASRI",
"Téléphone": "",
"Attributaire de la piste": "",
"Visibilité de la piste": "",
"Address": ""
},
{
"Departement": "973",
"Nom": "Guyane",
"Filiale_Seche_Healthcare": "",
"Filiere ": "DASRI",
"Téléphone": "",
"Attributaire de la piste": "",
"Visibilité de la piste": "",
"Address": ""
},
{
"Departement": "974",
"Nom": "La Réunion",
"Filiale_Seche_Healthcare": "",
"Filiere ": "DASRI",
"Téléphone": "",
"Attributaire de la piste": "",
"Visibilité de la piste": "",
"Address": ""
},
{
"Departement": "975",
"Nom": "Saint-Pierre-et-Miquelon",
"Filiale_Seche_Healthcare": "",
"Filiere ": "DASRI",
"Téléphone": "",
"Attributaire de la piste": "",
"Visibilité de la piste": "",
"Address": ""
},
{
"Departement": "976",
"Nom": "Mayotte",
"Filiale_Seche_Healthcare": "",
"Filiere ": "DASRI",
"Téléphone": "",
"Attributaire de la piste": "",
"Visibilité de la piste": "",
"Address": ""
},
{
"Departement": "977",
"Nom": "Saint-Barthélemy",
"Filiale_Seche_Healthcare": "",
"Filiere ": "DASRI",
"Téléphone": "",
"Attributaire de la piste": "Pas d'envoi",
"Visibilité de la piste": "",
"Address": ""
},
{
"Departement": "978",
"Nom": "Saint-Martin",
"Filiale_Seche_Healthcare": "",
"Filiere ": "DASRI",
"Téléphone": "",
"Attributaire de la piste": "",
"Visibilité de la piste": "",
"Address": ""
},
{
"Departement": "984",
"Nom": "Terres Australes et Antarctiques",
"Filiale_Seche_Healthcare": "",
"Filiere ": "DASRI",
"Téléphone": "",
"Attributaire de la piste": "",
"Visibilité de la piste": "",
"Address": ""
},
{
"Departement": "986",
"Nom": "Wallis-et-Futuna",
"Filiale_Seche_Healthcare": "",
"Filiere ": "DASRI",
"Téléphone": "",
"Attributaire de la piste": "",
"Visibilité de la piste": "",
"Address": ""
},
{
"Departement": "987",
"Nom": "Polynésie Française",
"Filiale_Seche_Healthcare": "",
"Filiere ": "DASRI",
"Téléphone": "",
"Attributaire de la piste": "",
"Visibilité de la piste": "",
"Address": ""
},
{
"Departement": "988",
"Nom": "Nouvelle-Calédonie",
"Filiale_Seche_Healthcare": "",
"Filiere ": "DASRI",
"Téléphone": "",
"Attributaire de la piste": "",
"Visibilité de la piste": "",
"Address": ""
},
{
"Departement": "989",
"Nom": "Île de Clipperton",
"Filiale_Seche_Healthcare": "",
"Filiere ": "DASRI",
"Téléphone": "",
"Attributaire de la piste": "",
"Visibilité de la piste": "",
"Address": ""
},
{
"Departement": "",
"Nom": "",
"Filiale_Seche_Healthcare": "",
"Filiere ": "",
"Téléphone": "",
"Attributaire de la piste": "",
"Visibilité de la piste": "",
"Address": ""
},
{
"Departement": "",
"Nom": "",
"Filiale_Seche_Healthcare": "",
"Filiere ": "",
"Téléphone": "",
"Attributaire de la piste": "",
"Visibilité de la piste": "",
"Address": ""
},
{
"Departement": "",
"Nom": "",
"Filiale_Seche_Healthcare": "",
"Filiere ": "",
"Téléphone": "",
"Attributaire de la piste": "",
"Visibilité de la piste": "",
"Address": ""
},
{
"Departement": "",
"Nom": "",
"Filiale_Seche_Healthcare": "",
"Filiere ": "",
"Téléphone": "",
"Attributaire de la piste": "",
"Visibilité de la piste": "",
"Address": ""
},
{
"Departement": "",
"Nom": "",
"Filiale_Seche_Healthcare": "",
"Filiere ": "",
"Téléphone": "",
"Attributaire de la piste": "",
"Visibilité de la piste": "",
"Address": ""
},
{
"Departement": "",
"Nom": "",
"Filiale_Seche_Healthcare": "",
"Filiere ": "",
"Téléphone": "",
"Attributaire de la piste": "",
"Visibilité de la piste": "",
"Address": ""
}

];

    var found = data.find(function(element) {
       var cp = code.substr(0, 2) ;
       if( cp > 96) cp = code.substr(0, 3);

      return element.Departement == cp;
    });


   return found;
}



function code_amiante (code){


  var data = [
  {
  "Departement": "1",
  "Nom": "Auvergne-Rhône-Alpes",
  "Filiale_seche_Environnement": "Triadis Services Beaufort",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "03 84 87 19 48 ",
  "Mail": "a.croissant@groupe-seche.com",
  "Mail coriigé": "v.soquet@groupe-seche.com",
  "Adresse": "Usine le Honry BP 5",
  "CP": "39190",
  "Ville": "Beaufort",
  "Latitude": "46.5726166",
  "Longitude": "5.4384069"
  },
  {
  "Departement": "2",
  "Nom": "Nord-Pas-de-Calais-Picardie",
  "Filiale_seche_Environnement": "Triadis Services Etampes",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "01 69 16 13 20",
  "Mail": "b.kouzine@groupe-seche.com",
  "Mail coriigé": "n.hottin@groupe-seche.com",
  "Adresse": "Rue de Grenots ZA Sud Essor ",
  "CP": "91150",
  "Ville": "Etampes",
  "Latitude": "48.4371147",
  "Longitude": "2.1632171"
  },
  {
  "Departement": "3",
  "Nom": "Auvergne-Rhône-Alpes",
  "Filiale_seche_Environnement": "Triadis Services Beaufort",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "03 84 87 19 48 ",
  "Mail": "a.croissant@groupe-seche.com",
  "Mail coriigé": "v.soquet@groupe-seche.com",
  "Adresse": "Usine le Honry BP 5",
  "CP": "39190",
  "Ville": "Beaufort",
  "Latitude": "46.5726166",
  "Longitude": "5.4384069"
  },
  {
  "Departement": "4",
  "Nom": "Provence-Alpes-Côte-d'Azur",
  "Filiale_seche_Environnement": "Triadis Services Béziers",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "04 67 39 95 41",
  "Mail": "b.hug@groupe-seche.com",
  "Mail coriigé": "i.salleles@groupe-seche.com",
  "Adresse": "ZI du Capiscol Impasse René Gomez ",
  "CP": "34420",
  "Ville": "VILLENEUVE LES BEZIERS",
  "Latitude": "43.3294106",
  "Longitude": "3.2739525"
  },
  {
  "Departement": "5",
  "Nom": "Provence-Alpes-Côte-d'Azur",
  "Filiale_seche_Environnement": "Triadis Services Béziers",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "04 67 39 95 41",
  "Mail": "b.hug@groupe-seche.com",
  "Mail coriigé": "i.salleles@groupe-seche.com",
  "Adresse": "ZI du Capiscol Impasse René Gomez ",
  "CP": "34420",
  "Ville": "VILLENEUVE LES BEZIERS",
  "Latitude": "43.3294106",
  "Longitude": "3.2739525"
  },
  {
  "Departement": "6",
  "Nom": "Provence-Alpes-Côte-d'Azur",
  "Filiale_seche_Environnement": "Triadis Services Béziers",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "04 67 39 95 41",
  "Mail": "b.hug@groupe-seche.com",
  "Mail coriigé": "i.salleles@groupe-seche.com",
  "Adresse": "ZI du Capiscol Impasse René Gomez ",
  "CP": "34420",
  "Ville": "VILLENEUVE LES BEZIERS",
  "Latitude": "43.3294106",
  "Longitude": "3.2739525"
  },
  {
  "Departement": "7",
  "Nom": "Auvergne-Rhône-Alpes",
  "Filiale_seche_Environnement": "Triadis Services Beaufort",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "03 84 87 19 48 ",
  "Mail": "a.croissant@groupe-seche.com",
  "Mail coriigé": "v.soquet@groupe-seche.com",
  "Adresse": "Usine le Honry BP 5",
  "CP": "39190",
  "Ville": "Beaufort",
  "Latitude": "46.5726166",
  "Longitude": "5.4384069"
  },
  {
  "Departement": "8",
  "Nom": "Alsace-Champagne-Ardenne-Lorraine",
  "Filiale_seche_Environnement": "Tredi Hombourg",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "03 89 83 21 77",
  "Mail": "n.siry@groupe-seche.com",
  "Mail coriigé": "e.hueber@groupe-seche.com",
  "Adresse": "ZI de Hombourg BP 24 ",
  "CP": "68490",
  "Ville": "Ottmarsheim",
  "Latitude": "47.7873993",
  "Longitude": "7.5063963"
  },
  {
  "Departement": "9",
  "Nom": "Languedoc-Roussillon-Midi-Pyrénées",
  "Filiale_seche_Environnement": "Triadis Services Toulouse",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "05 34 27 05 88",
  "Mail": "b.hug@groupe-seche.com",
  "Mail coriigé": "v.delage@groupe-seche.com",
  "Adresse": "Z.I. du Terroir 27 avenue Léon Jouhaux ",
  "CP": "31140",
  "Ville": "Saint Alban",
  "Latitude": "43.7055855",
  "Longitude": "1.4000663"
  },
  {
  "Departement": "10",
  "Nom": "Alsace-Champagne-Ardenne-Lorraine",
  "Filiale_seche_Environnement": "Triadis Services Etampes",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "01 69 16 13 20",
  "Mail": "b.kouzine@groupe-seche.com",
  "Mail coriigé": "n.hottin@groupe-seche.com",
  "Adresse": "Rue de Grenots ZA Sud Essor ",
  "CP": "91150",
  "Ville": "Etampes",
  "Latitude": "48.4371147",
  "Longitude": "2.1632171"
  },
  {
  "Departement": "11",
  "Nom": "Languedoc-Roussillon-Midi-Pyrénées",
  "Filiale_seche_Environnement": "Triadis Services Béziers",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "04 67 39 95 41",
  "Mail": "b.hug@groupe-seche.com",
  "Mail coriigé": "i.salleles@groupe-seche.com",
  "Adresse": "ZI du Capiscol Impasse René Gomez ",
  "CP": "34420",
  "Ville": "VILLENEUVE LES BEZIERS",
  "Latitude": "43.3294106",
  "Longitude": "3.2739525"
  },
  {
  "Departement": "12",
  "Nom": "Languedoc-Roussillon-Midi-Pyrénées",
  "Filiale_seche_Environnement": "Triadis Services Toulouse",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "05 34 27 05 88",
  "Mail": "b.hug@groupe-seche.com",
  "Mail coriigé": "v.delage@groupe-seche.com",
  "Adresse": "Z.I. du Terroir 27 avenue Léon Jouhaux ",
  "CP": "31140",
  "Ville": "Saint Alban",
  "Latitude": "43.7055855",
  "Longitude": "1.4000663"
  },
  {
  "Departement": "13",
  "Nom": "Provence-Alpes-Côte-d'Azur",
  "Filiale_seche_Environnement": "Triadis Services Béziers",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "04 67 39 95 41",
  "Mail": "b.hug@groupe-seche.com",
  "Mail coriigé": "i.salleles@groupe-seche.com",
  "Adresse": "ZI du Capiscol Impasse René Gomez ",
  "CP": "34420",
  "Ville": "VILLENEUVE LES BEZIERS",
  "Latitude": "43.3294106",
  "Longitude": "3.2739525"
  },
  {
  "Departement": "14",
  "Nom": "Normandie",
  "Filiale_seche_Environnement": "Triadis Services Rouen",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "02 32 18 16 32",
  "Mail": "e.bourdais@groupe-seche.com",
  "Mail coriigé": "f.daligaux@groupe-seche.com",
  "Adresse": "Rue de Madagascar",
  "CP": "76100",
  "Ville": "Rouen",
  "Latitude": "49.4357491",
  "Longitude": "1.0612293"
  },
  {
  "Departement": "15",
  "Nom": "Auvergne-Rhône-Alpes",
  "Filiale_seche_Environnement": "Triadis Services Toulouse",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "05 34 27 05 88",
  "Mail": "b.hug@groupe-seche.com",
  "Mail coriigé": "v.delage@groupe-seche.com",
  "Adresse": "Z.I. du Terroir 27 avenue Léon Jouhaux ",
  "CP": "31140",
  "Ville": "Saint Alban",
  "Latitude": "43.7055855",
  "Longitude": "1.4000663"
  },
  {
  "Departement": "16",
  "Nom": "Aquitaine-Limousin-Poitou-Charentes",
  "Filiale_seche_Environnement": "Séché Eco Industries Changé",
  "Filiere ": "Stockage DD",
  "Téléphone": "02 43 59 60 84",
  "Mail": "y.lecanu@groupe-seche.com",
  "Mail coriigé": "n.boulay@groupe-seche.com",
  "Adresse": "Les Hêtres - CS 20020",
  "CP": "53811",
  "Ville": "Changé Cedex 09",
  "Latitude": "48.1149178",
  "Longitude": "-0.2457407"
  },
  {
  "Departement": "17",
  "Nom": "Aquitaine-Limousin-Poitou-Charentes",
  "Filiale_seche_Environnement": "Séché Eco Industries Changé",
  "Filiere ": "Stockage DD",
  "Téléphone": "02 43 59 60 84",
  "Mail": "y.lecanu@groupe-seche.com",
  "Mail coriigé": "n.boulay@groupe-seche.com",
  "Adresse": "Les Hêtres - CS 20020",
  "CP": "53811",
  "Ville": "Changé Cedex 09",
  "Latitude": "48.1149178",
  "Longitude": "-0.2457407"
  },
  {
  "Departement": "18",
  "Nom": "Centre",
  "Filiale_seche_Environnement": "Triadis Services Etampes",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "01 69 16 13 20",
  "Mail": "b.kouzine@groupe-seche.com",
  "Mail coriigé": "n.hottin@groupe-seche.com",
  "Adresse": "Rue de Grenots ZA Sud Essor ",
  "CP": "91150",
  "Ville": "Etampes",
  "Latitude": "48.4371147",
  "Longitude": "2.1632171"
  },
  {
  "Departement": "19",
  "Nom": "Aquitaine-Limousin-Poitou-Charentes",
  "Filiale_seche_Environnement": "Triadis Services Toulouse",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "05 34 27 05 88",
  "Mail": "b.hug@groupe-seche.com",
  "Mail coriigé": "v.delage@groupe-seche.com",
  "Adresse": "Z.I. du Terroir 27 avenue Léon Jouhaux ",
  "CP": "31140",
  "Ville": "Saint Alban",
  "Latitude": "43.7055855",
  "Longitude": "1.4000663"
  },
  {
  "Departement": "20",
  "Nom": "Corse",
  "Filiale_seche_Environnement": "Triadis Services Béziers",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "04 67 39 95 41",
  "Mail": "b.hug@groupe-seche.com",
  "Mail coriigé": "i.salleles@groupe-seche.com",
  "Adresse": "ZI du Capiscol Impasse René Gomez ",
  "CP": "34420",
  "Ville": "VILLENEUVE LES BEZIERS",
  "Latitude": "43.3294106",
  "Longitude": "3.2739525"
  },
  {
  "Departement": "21",
  "Nom": "Bourgogne-Franche-Comté",
  "Filiale_seche_Environnement": "Triadis Services Beaufort",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "03 84 87 19 48 ",
  "Mail": "a.croissant@groupe-seche.com",
  "Mail coriigé": "v.soquet@groupe-seche.com",
  "Adresse": "Usine le Honry BP 5",
  "CP": "39190",
  "Ville": "Beaufort",
  "Latitude": "46.5726166",
  "Longitude": "5.4384069"
  },
  {
  "Departement": "22",
  "Nom": "Bretagne",
  "Filiale_seche_Environnement": "Séché Eco Industries Changé",
  "Filiere ": "Stockage DD",
  "Téléphone": "02 43 59 60 84",
  "Mail": "y.lecanu@groupe-seche.com",
  "Mail coriigé": "n.boulay@groupe-seche.com",
  "Adresse": "Les Hêtres - CS 20020",
  "CP": "53811",
  "Ville": "Changé Cedex 09",
  "Latitude": "48.1149178",
  "Longitude": "-0.2457407"
  },
  {
  "Departement": "23",
  "Nom": "Aquitaine-Limousin-Poitou-Charentes",
  "Filiale_seche_Environnement": "Triadis Services Toulouse",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "05 34 27 05 88",
  "Mail": "b.hug@groupe-seche.com",
  "Mail coriigé": "v.delage@groupe-seche.com",
  "Adresse": "Z.I. du Terroir 27 avenue Léon Jouhaux ",
  "CP": "31140",
  "Ville": "Saint Alban",
  "Latitude": "43.7055855",
  "Longitude": "1.4000663"
  },
  {
  "Departement": "24",
  "Nom": "Aquitaine-Limousin-Poitou-Charentes",
  "Filiale_seche_Environnement": "Triadis Services Toulouse",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "05 34 27 05 88",
  "Mail": "b.hug@groupe-seche.com",
  "Mail coriigé": "v.delage@groupe-seche.com",
  "Adresse": "Z.I. du Terroir 27 avenue Léon Jouhaux ",
  "CP": "31140",
  "Ville": "Saint Alban",
  "Latitude": "43.7055855",
  "Longitude": "1.4000663"
  },
  {
  "Departement": "25",
  "Nom": "Bourgogne-Franche-Comté",
  "Filiale_seche_Environnement": "Triadis Services Beaufort",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "03 84 87 19 48 ",
  "Mail": "a.croissant@groupe-seche.com",
  "Mail coriigé": "v.soquet@groupe-seche.com",
  "Adresse": "Usine le Honry BP 5",
  "CP": "39190",
  "Ville": "Beaufort",
  "Latitude": "46.5726166",
  "Longitude": "5.4384069"
  },
  {
  "Departement": "26",
  "Nom": "Auvergne-Rhône-Alpes",
  "Filiale_seche_Environnement": "Triadis Services Beaufort",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "03 84 87 19 48 ",
  "Mail": "a.croissant@groupe-seche.com",
  "Mail coriigé": "v.soquet@groupe-seche.com",
  "Adresse": "Usine le Honry BP 5",
  "CP": "39190",
  "Ville": "Beaufort",
  "Latitude": "46.5726166",
  "Longitude": "5.4384069"
  },
  {
  "Departement": "27",
  "Nom": "Normandie",
  "Filiale_seche_Environnement": "Triadis Services Rouen",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "02 32 18 16 32",
  "Mail": "e.bourdais@groupe-seche.com",
  "Mail coriigé": "f.daligaux@groupe-seche.com",
  "Adresse": "Rue de Madagascar",
  "CP": "76100",
  "Ville": "Rouen",
  "Latitude": "49.4357491",
  "Longitude": "1.0612293"
  },
  {
  "Departement": "28",
  "Nom": "Centre",
  "Filiale_seche_Environnement": "Triadis Services Etampes",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "01 69 16 13 20",
  "Mail": "b.kouzine@groupe-seche.com",
  "Mail coriigé": "n.hottin@groupe-seche.com",
  "Adresse": "Rue de Grenots ZA Sud Essor ",
  "CP": "91150",
  "Ville": "Etampes",
  "Latitude": "48.4371147",
  "Longitude": "2.1632171"
  },
  {
  "Departement": "29",
  "Nom": "Bretagne",
  "Filiale_seche_Environnement": "Séché Eco Industries Changé",
  "Filiere ": "Stockage DD",
  "Téléphone": "02 43 59 60 84",
  "Mail": "y.lecanu@groupe-seche.com",
  "Mail coriigé": "n.boulay@groupe-seche.com",
  "Adresse": "Les Hêtres - CS 20020",
  "CP": "53811",
  "Ville": "Changé Cedex 09",
  "Latitude": "48.1149178",
  "Longitude": "-0.2457407"
  },
  {
  "Departement": "30",
  "Nom": "Languedoc-Roussillon-Midi-Pyrénées",
  "Filiale_seche_Environnement": "Triadis Services Béziers",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "04 67 39 95 41",
  "Mail": "b.hug@groupe-seche.com",
  "Mail coriigé": "i.salleles@groupe-seche.com",
  "Adresse": "ZI du Capiscol Impasse René Gomez ",
  "CP": "34420",
  "Ville": "VILLENEUVE LES BEZIERS",
  "Latitude": "43.3294106",
  "Longitude": "3.2739525"
  },
  {
  "Departement": "31",
  "Nom": "Languedoc-Roussillon-Midi-Pyrénées",
  "Filiale_seche_Environnement": "Triadis Services Toulouse",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "05 34 27 05 88",
  "Mail": "b.hug@groupe-seche.com",
  "Mail coriigé": "v.delage@groupe-seche.com",
  "Adresse": "Z.I. du Terroir 27 avenue Léon Jouhaux ",
  "CP": "31140",
  "Ville": "Saint Alban",
  "Latitude": "43.7055855",
  "Longitude": "1.4000663"
  },
  {
  "Departement": "32",
  "Nom": "Languedoc-Roussillon-Midi-Pyrénées",
  "Filiale_seche_Environnement": "Triadis Services Toulouse",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "05 34 27 05 88",
  "Mail": "b.hug@groupe-seche.com",
  "Mail coriigé": "v.delage@groupe-seche.com",
  "Adresse": "Z.I. du Terroir 27 avenue Léon Jouhaux ",
  "CP": "31140",
  "Ville": "Saint Alban",
  "Latitude": "43.7055855",
  "Longitude": "1.4000663"
  },
  {
  "Departement": "33",
  "Nom": "Aquitaine-Limousin-Poitou-Charentes",
  "Filiale_seche_Environnement": "Triadis Services Toulouse",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "05 34 27 05 88",
  "Mail": "b.hug@groupe-seche.com",
  "Mail coriigé": "v.delage@groupe-seche.com",
  "Adresse": "Z.I. du Terroir 27 avenue Léon Jouhaux ",
  "CP": "31140",
  "Ville": "Saint Alban",
  "Latitude": "43.7055855",
  "Longitude": "1.4000663"
  },
  {
  "Departement": "34",
  "Nom": "Languedoc-Roussillon-Midi-Pyrénées",
  "Filiale_seche_Environnement": "Triadis Services Béziers",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "04 67 39 95 41",
  "Mail": "b.hug@groupe-seche.com",
  "Mail coriigé": "i.salleles@groupe-seche.com",
  "Adresse": "ZI du Capiscol Impasse René Gomez ",
  "CP": "34420",
  "Ville": "VILLENEUVE LES BEZIERS",
  "Latitude": "43.3294106",
  "Longitude": "3.2739525"
  },
  {
  "Departement": "35",
  "Nom": "Bretagne",
  "Filiale_seche_Environnement": "Séché Eco Industries Changé",
  "Filiere ": "Stockage DD",
  "Téléphone": "02 43 59 60 84",
  "Mail": "y.lecanu@groupe-seche.com",
  "Mail coriigé": "n.boulay@groupe-seche.com",
  "Adresse": "Les Hêtres - CS 20020",
  "CP": "53811",
  "Ville": "Changé Cedex 09",
  "Latitude": "48.1149178",
  "Longitude": "-0.2457407"
  },
  {
  "Departement": "36",
  "Nom": "Centre",
  "Filiale_seche_Environnement": "Séché Eco Industries Changé",
  "Filiere ": "Stockage DD",
  "Téléphone": "02 43 59 60 84",
  "Mail": "y.lecanu@groupe-seche.com",
  "Mail coriigé": "n.boulay@groupe-seche.com",
  "Adresse": "Les Hêtres - CS 20020",
  "CP": "53811",
  "Ville": "Changé Cedex 09",
  "Latitude": "48.1149178",
  "Longitude": "-0.2457407"
  },
  {
  "Departement": "37",
  "Nom": "Centre",
  "Filiale_seche_Environnement": "Séché Eco Industries Changé",
  "Filiere ": "Stockage DD",
  "Téléphone": "02 43 59 60 84",
  "Mail": "y.lecanu@groupe-seche.com",
  "Mail coriigé": "n.boulay@groupe-seche.com",
  "Adresse": "Les Hêtres - CS 20020",
  "CP": "53811",
  "Ville": "Changé Cedex 09",
  "Latitude": "48.1149178",
  "Longitude": "-0.2457407"
  },
  {
  "Departement": "38",
  "Nom": "Auvergne-Rhône-Alpes",
  "Filiale_seche_Environnement": "Triadis Services Beaufort",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "03 84 87 19 48 ",
  "Mail": "a.croissant@groupe-seche.com",
  "Mail coriigé": "v.soquet@groupe-seche.com",
  "Adresse": "Usine le Honry BP 5",
  "CP": "39190",
  "Ville": "Beaufort",
  "Latitude": "46.5726166",
  "Longitude": "5.4384069"
  },
  {
  "Departement": "39",
  "Nom": "Bourgogne-Franche-Comté",
  "Filiale_seche_Environnement": "Triadis Services Beaufort",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "03 84 87 19 48 ",
  "Mail": "a.croissant@groupe-seche.com",
  "Mail coriigé": "v.soquet@groupe-seche.com",
  "Adresse": "Usine le Honry BP 5",
  "CP": "39190",
  "Ville": "Beaufort",
  "Latitude": "46.5726166",
  "Longitude": "5.4384069"
  },
  {
  "Departement": "40",
  "Nom": "Aquitaine-Limousin-Poitou-Charentes",
  "Filiale_seche_Environnement": "Triadis Services Toulouse",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "05 34 27 05 88",
  "Mail": "b.hug@groupe-seche.com",
  "Mail coriigé": "v.delage@groupe-seche.com",
  "Adresse": "Z.I. du Terroir 27 avenue Léon Jouhaux ",
  "CP": "31140",
  "Ville": "Saint Alban",
  "Latitude": "43.7055855",
  "Longitude": "1.4000663"
  },
  {
  "Departement": "41",
  "Nom": "Centre",
  "Filiale_seche_Environnement": "Triadis Services Etampes",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "01 69 16 13 20",
  "Mail": "b.kouzine@groupe-seche.com",
  "Mail coriigé": "n.hottin@groupe-seche.com",
  "Adresse": "Rue de Grenots ZA Sud Essor ",
  "CP": "91150",
  "Ville": "Etampes",
  "Latitude": "48.4371147",
  "Longitude": "2.1632171"
  },
  {
  "Departement": "42",
  "Nom": "Auvergne-Rhône-Alpes",
  "Filiale_seche_Environnement": "Triadis Services Beaufort",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "03 84 87 19 48 ",
  "Mail": "a.croissant@groupe-seche.com",
  "Mail coriigé": "v.soquet@groupe-seche.com",
  "Adresse": "Usine le Honry BP 5",
  "CP": "39190",
  "Ville": "Beaufort",
  "Latitude": "46.5726166",
  "Longitude": "5.4384069"
  },
  {
  "Departement": "43",
  "Nom": "Auvergne-Rhône-Alpes",
  "Filiale_seche_Environnement": "Triadis Services Beaufort",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "03 84 87 19 48 ",
  "Mail": "a.croissant@groupe-seche.com",
  "Mail coriigé": "v.soquet@groupe-seche.com",
  "Adresse": "Usine le Honry BP 5",
  "CP": "39190",
  "Ville": "Beaufort",
  "Latitude": "46.5726166",
  "Longitude": "5.4384069"
  },
  {
  "Departement": "44",
  "Nom": "Pays de la Loire",
  "Filiale_seche_Environnement": "Séché Eco Industries Changé",
  "Filiere ": "Stockage DD",
  "Téléphone": "02 43 59 60 84",
  "Mail": "y.lecanu@groupe-seche.com",
  "Mail coriigé": "n.boulay@groupe-seche.com",
  "Adresse": "Les Hêtres - CS 20020",
  "CP": "53811",
  "Ville": "Changé Cedex 09",
  "Latitude": "48.1149178",
  "Longitude": "-0.2457407"
  },
  {
  "Departement": "45",
  "Nom": "Centre",
  "Filiale_seche_Environnement": "Triadis Services Etampes",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "01 69 16 13 20",
  "Mail": "b.kouzine@groupe-seche.com",
  "Mail coriigé": "n.hottin@groupe-seche.com",
  "Adresse": "Rue de Grenots ZA Sud Essor ",
  "CP": "91150",
  "Ville": "Etampes",
  "Latitude": "48.4371147",
  "Longitude": "2.1632171"
  },
  {
  "Departement": "46",
  "Nom": "Languedoc-Roussillon-Midi-Pyrénées",
  "Filiale_seche_Environnement": "Triadis Services Toulouse",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "05 34 27 05 88",
  "Mail": "b.hug@groupe-seche.com",
  "Mail coriigé": "v.delage@groupe-seche.com",
  "Adresse": "Z.I. du Terroir 27 avenue Léon Jouhaux ",
  "CP": "31140",
  "Ville": "Saint Alban",
  "Latitude": "43.7055855",
  "Longitude": "1.4000663"
  },
  {
  "Departement": "47",
  "Nom": "Aquitaine-Limousin-Poitou-Charentes",
  "Filiale_seche_Environnement": "Triadis Services Toulouse",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "05 34 27 05 88",
  "Mail": "b.hug@groupe-seche.com",
  "Mail coriigé": "v.delage@groupe-seche.com",
  "Adresse": "Z.I. du Terroir 27 avenue Léon Jouhaux ",
  "CP": "31140",
  "Ville": "Saint Alban",
  "Latitude": "43.7055855",
  "Longitude": "1.4000663"
  },
  {
  "Departement": "48",
  "Nom": "Languedoc-Roussillon-Midi-Pyrénées",
  "Filiale_seche_Environnement": "Triadis Services Béziers",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "04 67 39 95 41",
  "Mail": "b.hug@groupe-seche.com",
  "Mail coriigé": "i.salleles@groupe-seche.com",
  "Adresse": "ZI du Capiscol Impasse René Gomez ",
  "CP": "34420",
  "Ville": "VILLENEUVE LES BEZIERS",
  "Latitude": "43.3294106",
  "Longitude": "3.2739525"
  },
  {
  "Departement": "49",
  "Nom": "Pays de la Loire",
  "Filiale_seche_Environnement": "Séché Eco Industries Changé",
  "Filiere ": "Stockage DD",
  "Téléphone": "02 43 59 60 84",
  "Mail": "y.lecanu@groupe-seche.com",
  "Mail coriigé": "n.boulay@groupe-seche.com",
  "Adresse": "Les Hêtres - CS 20020",
  "CP": "53811",
  "Ville": "Changé Cedex 09",
  "Latitude": "48.1149178",
  "Longitude": "-0.2457407"
  },
  {
  "Departement": "50",
  "Nom": "Normandie",
  "Filiale_seche_Environnement": "Séché Eco Industries Changé",
  "Filiere ": "Stockage DD",
  "Téléphone": "02 43 59 60 84",
  "Mail": "y.lecanu@groupe-seche.com",
  "Mail coriigé": "n.boulay@groupe-seche.com",
  "Adresse": "Les Hêtres - CS 20020",
  "CP": "53811",
  "Ville": "Changé Cedex 09",
  "Latitude": "48.1149178",
  "Longitude": "-0.2457407"
  },
  {
  "Departement": "51",
  "Nom": "Alsace-Champagne-Ardenne-Lorraine",
  "Filiale_seche_Environnement": "Triadis Services Etampes",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "01 69 16 13 20",
  "Mail": "b.kouzine@groupe-seche.com",
  "Mail coriigé": "n.hottin@groupe-seche.com",
  "Adresse": "Rue de Grenots ZA Sud Essor ",
  "CP": "91150",
  "Ville": "Etampes",
  "Latitude": "48.4371147",
  "Longitude": "2.1632171"
  },
  {
  "Departement": "52",
  "Nom": "Alsace-Champagne-Ardenne-Lorraine",
  "Filiale_seche_Environnement": "Tredi Hombourg",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "03 89 83 21 77",
  "Mail": "n.siry@groupe-seche.com",
  "Mail coriigé": "e.hueber@groupe-seche.com",
  "Adresse": "ZI de Hombourg BP 24 ",
  "CP": "68490",
  "Ville": "Ottmarsheim",
  "Latitude": "47.7873993",
  "Longitude": "7.5063963"
  },
  {
  "Departement": "53",
  "Nom": "Pays de la Loire",
  "Filiale_seche_Environnement": "Séché Eco Industries Changé",
  "Filiere ": "Stockage DD",
  "Téléphone": "02 43 59 60 84",
  "Mail": "y.lecanu@groupe-seche.com",
  "Mail coriigé": "n.boulay@groupe-seche.com",
  "Adresse": "Les Hêtres - CS 20020",
  "CP": "53811",
  "Ville": "Changé Cedex 09",
  "Latitude": "48.1149178",
  "Longitude": "-0.2457407"
  },
  {
  "Departement": "54",
  "Nom": "Alsace-Champagne-Ardenne-Lorraine",
  "Filiale_seche_Environnement": "Tredi Hombourg",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "03 89 83 21 77",
  "Mail": "n.siry@groupe-seche.com",
  "Mail coriigé": "e.hueber@groupe-seche.com",
  "Adresse": "ZI de Hombourg BP 24 ",
  "CP": "68490",
  "Ville": "Ottmarsheim",
  "Latitude": "47.7873993",
  "Longitude": "7.5063963"
  },
  {
  "Departement": "55",
  "Nom": "Alsace-Champagne-Ardenne-Lorraine",
  "Filiale_seche_Environnement": "Tredi Hombourg",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "03 89 83 21 77",
  "Mail": "n.siry@groupe-seche.com",
  "Mail coriigé": "e.hueber@groupe-seche.com",
  "Adresse": "ZI de Hombourg BP 24 ",
  "CP": "68490",
  "Ville": "Ottmarsheim",
  "Latitude": "47.7873993",
  "Longitude": "7.5063963"
  },
  {
  "Departement": "56",
  "Nom": "Bretagne",
  "Filiale_seche_Environnement": "Séché Eco Industries Changé",
  "Filiere ": "Stockage DD",
  "Téléphone": "02 43 59 60 84",
  "Mail": "y.lecanu@groupe-seche.com",
  "Mail coriigé": "n.boulay@groupe-seche.com",
  "Adresse": "Les Hêtres - CS 20020",
  "CP": "53811",
  "Ville": "Changé Cedex 09",
  "Latitude": "48.1149178",
  "Longitude": "-0.2457407"
  },
  {
  "Departement": "57",
  "Nom": "Alsace-Champagne-Ardenne-Lorraine",
  "Filiale_seche_Environnement": "Tredi Hombourg",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "03 89 83 21 77",
  "Mail": "n.siry@groupe-seche.com",
  "Mail coriigé": "e.hueber@groupe-seche.com",
  "Adresse": "ZI de Hombourg BP 24 ",
  "CP": "68490",
  "Ville": "Ottmarsheim",
  "Latitude": "47.7873993",
  "Longitude": "7.5063963"
  },
  {
  "Departement": "58",
  "Nom": "Bourgogne-Franche-Comté",
  "Filiale_seche_Environnement": "Triadis Services Beaufort",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "03 84 87 19 48 ",
  "Mail": "a.croissant@groupe-seche.com",
  "Mail coriigé": "v.soquet@groupe-seche.com",
  "Adresse": "Usine le Honry BP 5",
  "CP": "39190",
  "Ville": "Beaufort",
  "Latitude": "46.5726166",
  "Longitude": "5.4384069"
  },
  {
  "Departement": "59",
  "Nom": "Nord-Pas-de-Calais-Picardie",
  "Filiale_seche_Environnement": "Triadis Services Rouen",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "02 32 18 16 32",
  "Mail": "e.bourdais@groupe-seche.com",
  "Mail coriigé": "f.daligaux@groupe-seche.com",
  "Adresse": "Rue de Madagascar",
  "CP": "76100",
  "Ville": "Rouen",
  "Latitude": "49.4357491",
  "Longitude": "1.0612293"
  },
  {
  "Departement": "60",
  "Nom": "Nord-Pas-de-Calais-Picardie",
  "Filiale_seche_Environnement": "Triadis Services Etampes",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "01 69 16 13 20",
  "Mail": "b.kouzine@groupe-seche.com",
  "Mail coriigé": "n.hottin@groupe-seche.com",
  "Adresse": "Rue de Grenots ZA Sud Essor ",
  "CP": "91150",
  "Ville": "Etampes",
  "Latitude": "48.4371147",
  "Longitude": "2.1632171"
  },
  {
  "Departement": "61",
  "Nom": "Normandie",
  "Filiale_seche_Environnement": "Séché Eco Industries Changé",
  "Filiere ": "Stockage DD",
  "Téléphone": "02 43 59 60 84",
  "Mail": "y.lecanu@groupe-seche.com",
  "Mail coriigé": "n.boulay@groupe-seche.com",
  "Adresse": "Les Hêtres - CS 20020",
  "CP": "53811",
  "Ville": "Changé Cedex 09",
  "Latitude": "48.1149178",
  "Longitude": "-0.2457407"
  },
  {
  "Departement": "62",
  "Nom": "Nord-Pas-de-Calais-Picardie",
  "Filiale_seche_Environnement": "Triadis Services Rouen",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "02 32 18 16 32",
  "Mail": "e.bourdais@groupe-seche.com",
  "Mail coriigé": "f.daligaux@groupe-seche.com",
  "Adresse": "Rue de Madagascar",
  "CP": "76100",
  "Ville": "Rouen",
  "Latitude": "49.4357491",
  "Longitude": "1.0612293"
  },
  {
  "Departement": "63",
  "Nom": "Auvergne-Rhône-Alpes",
  "Filiale_seche_Environnement": "Triadis Services Beaufort",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "03 84 87 19 48 ",
  "Mail": "a.croissant@groupe-seche.com",
  "Mail coriigé": "v.soquet@groupe-seche.com",
  "Adresse": "Usine le Honry BP 5",
  "CP": "39190",
  "Ville": "Beaufort",
  "Latitude": "46.5726166",
  "Longitude": "5.4384069"
  },
  {
  "Departement": "64",
  "Nom": "Aquitaine-Limousin-Poitou-Charentes",
  "Filiale_seche_Environnement": "Triadis Services Toulouse",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "05 34 27 05 88",
  "Mail": "b.hug@groupe-seche.com",
  "Mail coriigé": "v.delage@groupe-seche.com",
  "Adresse": "Z.I. du Terroir 27 avenue Léon Jouhaux ",
  "CP": "31140",
  "Ville": "Saint Alban",
  "Latitude": "43.7055855",
  "Longitude": "1.4000663"
  },
  {
  "Departement": "65",
  "Nom": "Languedoc-Roussillon-Midi-Pyrénées",
  "Filiale_seche_Environnement": "Triadis Services Toulouse",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "05 34 27 05 88",
  "Mail": "b.hug@groupe-seche.com",
  "Mail coriigé": "v.delage@groupe-seche.com",
  "Adresse": "Z.I. du Terroir 27 avenue Léon Jouhaux ",
  "CP": "31140",
  "Ville": "Saint Alban",
  "Latitude": "43.7055855",
  "Longitude": "1.4000663"
  },
  {
  "Departement": "66",
  "Nom": "Languedoc-Roussillon-Midi-Pyrénées",
  "Filiale_seche_Environnement": "Triadis Services Béziers",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "04 67 39 95 41",
  "Mail": "b.hug@groupe-seche.com",
  "Mail coriigé": "i.salleles@groupe-seche.com",
  "Adresse": "ZI du Capiscol Impasse René Gomez ",
  "CP": "34420",
  "Ville": "VILLENEUVE LES BEZIERS",
  "Latitude": "43.3294106",
  "Longitude": "3.2739525"
  },
  {
  "Departement": "67",
  "Nom": "Alsace-Champagne-Ardenne-Lorraine",
  "Filiale_seche_Environnement": "Tredi Hombourg",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "03 89 83 21 77",
  "Mail": "n.siry@groupe-seche.com",
  "Mail coriigé": "e.hueber@groupe-seche.com",
  "Adresse": "ZI de Hombourg BP 24 ",
  "CP": "68490",
  "Ville": "Ottmarsheim",
  "Latitude": "47.7873993",
  "Longitude": "7.5063963"
  },
  {
  "Departement": "68",
  "Nom": "Alsace-Champagne-Ardenne-Lorraine",
  "Filiale_seche_Environnement": "Tredi Hombourg",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "03 89 83 21 77",
  "Mail": "n.siry@groupe-seche.com",
  "Mail coriigé": "e.hueber@groupe-seche.com",
  "Adresse": "ZI de Hombourg BP 24 ",
  "CP": "68490",
  "Ville": "Ottmarsheim",
  "Latitude": "47.7873993",
  "Longitude": "7.5063963"
  },
  {
  "Departement": "69",
  "Nom": "Auvergne-Rhône-Alpes",
  "Filiale_seche_Environnement": "Triadis Services Beaufort",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "03 84 87 19 48 ",
  "Mail": "a.croissant@groupe-seche.com",
  "Mail coriigé": "v.soquet@groupe-seche.com",
  "Adresse": "Usine le Honry BP 5",
  "CP": "39190",
  "Ville": "Beaufort",
  "Latitude": "46.5726166",
  "Longitude": "5.4384069"
  },
  {
  "Departement": "70",
  "Nom": "Bourgogne-Franche-Comté",
  "Filiale_seche_Environnement": "Triadis Services Beaufort",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "03 84 87 19 48 ",
  "Mail": "a.croissant@groupe-seche.com",
  "Mail coriigé": "v.soquet@groupe-seche.com",
  "Adresse": "Usine le Honry BP 5",
  "CP": "39190",
  "Ville": "Beaufort",
  "Latitude": "46.5726166",
  "Longitude": "5.4384069"
  },
  {
  "Departement": "71",
  "Nom": "Bourgogne-Franche-Comté",
  "Filiale_seche_Environnement": "Triadis Services Beaufort",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "03 84 87 19 48 ",
  "Mail": "a.croissant@groupe-seche.com",
  "Mail coriigé": "v.soquet@groupe-seche.com",
  "Adresse": "Usine le Honry BP 5",
  "CP": "39190",
  "Ville": "Beaufort",
  "Latitude": "46.5726166",
  "Longitude": "5.4384069"
  },
  {
  "Departement": "72",
  "Nom": "Pays de la Loire",
  "Filiale_seche_Environnement": "Séché Eco Industries Changé",
  "Filiere ": "Stockage DD",
  "Téléphone": "02 43 59 60 84",
  "Mail": "y.lecanu@groupe-seche.com",
  "Mail coriigé": "n.boulay@groupe-seche.com",
  "Adresse": "Les Hêtres - CS 20020",
  "CP": "53811",
  "Ville": "Changé Cedex 09",
  "Latitude": "48.1149178",
  "Longitude": "-0.2457407"
  },
  {
  "Departement": "73",
  "Nom": "Auvergne-Rhône-Alpes",
  "Filiale_seche_Environnement": "Triadis Services Beaufort",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "03 84 87 19 48 ",
  "Mail": "a.croissant@groupe-seche.com",
  "Mail coriigé": "v.soquet@groupe-seche.com",
  "Adresse": "Usine le Honry BP 5",
  "CP": "39190",
  "Ville": "Beaufort",
  "Latitude": "46.5726166",
  "Longitude": "5.4384069"
  },
  {
  "Departement": "74",
  "Nom": "Auvergne-Rhône-Alpes",
  "Filiale_seche_Environnement": "Triadis Services Beaufort",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "03 84 87 19 48 ",
  "Mail": "a.croissant@groupe-seche.com",
  "Mail coriigé": "v.soquet@groupe-seche.com",
  "Adresse": "Usine le Honry BP 5",
  "CP": "39190",
  "Ville": "Beaufort",
  "Latitude": "46.5726166",
  "Longitude": "5.4384069"
  },
  {
  "Departement": "75",
  "Nom": "Ile-de-France",
  "Filiale_seche_Environnement": "Triadis Services Etampes",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "01 69 16 13 20",
  "Mail": "b.kouzine@groupe-seche.com",
  "Mail coriigé": "n.hottin@groupe-seche.com",
  "Adresse": "Rue de Grenots ZA Sud Essor ",
  "CP": "91150",
  "Ville": "Etampes",
  "Latitude": "48.4371147",
  "Longitude": "2.1632171"
  },
  {
  "Departement": "76",
  "Nom": "Normandie",
  "Filiale_seche_Environnement": "Triadis Services Rouen",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "02 32 18 16 32",
  "Mail": "e.bourdais@groupe-seche.com",
  "Mail coriigé": "f.daligaux@groupe-seche.com",
  "Adresse": "Rue de Madagascar",
  "CP": "76100",
  "Ville": "Rouen",
  "Latitude": "49.4357491",
  "Longitude": "1.0612293"
  },
  {
  "Departement": "77",
  "Nom": "Ile-de-France",
  "Filiale_seche_Environnement": "Triadis Services Etampes",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "01 69 16 13 20",
  "Mail": "b.kouzine@groupe-seche.com",
  "Mail coriigé": "n.hottin@groupe-seche.com",
  "Adresse": "Rue de Grenots ZA Sud Essor ",
  "CP": "91150",
  "Ville": "Etampes",
  "Latitude": "48.4371147",
  "Longitude": "2.1632171"
  },
  {
  "Departement": "78",
  "Nom": "Ile-de-France",
  "Filiale_seche_Environnement": "Triadis Services Etampes",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "01 69 16 13 20",
  "Mail": "b.kouzine@groupe-seche.com",
  "Mail coriigé": "n.hottin@groupe-seche.com",
  "Adresse": "Rue de Grenots ZA Sud Essor ",
  "CP": "91150",
  "Ville": "Etampes",
  "Latitude": "48.4371147",
  "Longitude": "2.1632171"
  },
  {
  "Departement": "79",
  "Nom": "Aquitaine-Limousin-Poitou-Charentes",
  "Filiale_seche_Environnement": "Séché Eco Industries Changé",
  "Filiere ": "Stockage DD",
  "Téléphone": "02 43 59 60 84",
  "Mail": "y.lecanu@groupe-seche.com",
  "Mail coriigé": "n.boulay@groupe-seche.com",
  "Adresse": "Les Hêtres - CS 20020",
  "CP": "53811",
  "Ville": "Changé Cedex 09",
  "Latitude": "48.1149178",
  "Longitude": "-0.2457407"
  },
  {
  "Departement": "80",
  "Nom": "Nord-Pas-de-Calais-Picardie",
  "Filiale_seche_Environnement": "Triadis Services Rouen",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "02 32 18 16 32",
  "Mail": "e.bourdais@groupe-seche.com",
  "Mail coriigé": "f.daligaux@groupe-seche.com",
  "Adresse": "Rue de Madagascar",
  "CP": "76100",
  "Ville": "Rouen",
  "Latitude": "49.4357491",
  "Longitude": "1.0612293"
  },
  {
  "Departement": "81",
  "Nom": "Languedoc-Roussillon-Midi-Pyrénées",
  "Filiale_seche_Environnement": "Triadis Services Toulouse",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "05 34 27 05 88",
  "Mail": "b.hug@groupe-seche.com",
  "Mail coriigé": "v.delage@groupe-seche.com",
  "Adresse": "Z.I. du Terroir 27 avenue Léon Jouhaux ",
  "CP": "31140",
  "Ville": "Saint Alban",
  "Latitude": "43.7055855",
  "Longitude": "1.4000663"
  },
  {
  "Departement": "82",
  "Nom": "Languedoc-Roussillon-Midi-Pyrénées",
  "Filiale_seche_Environnement": "Triadis Services Toulouse",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "05 34 27 05 88",
  "Mail": "b.hug@groupe-seche.com",
  "Mail coriigé": "v.delage@groupe-seche.com",
  "Adresse": "Z.I. du Terroir 27 avenue Léon Jouhaux ",
  "CP": "31140",
  "Ville": "Saint Alban",
  "Latitude": "43.7055855",
  "Longitude": "1.4000663"
  },
  {
  "Departement": "83",
  "Nom": "Provence-Alpes-Côte-d'Azur",
  "Filiale_seche_Environnement": "Triadis Services Béziers",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "04 67 39 95 41",
  "Mail": "b.hug@groupe-seche.com",
  "Mail coriigé": "i.salleles@groupe-seche.com",
  "Adresse": "ZI du Capiscol Impasse René Gomez ",
  "CP": "34420",
  "Ville": "VILLENEUVE LES BEZIERS",
  "Latitude": "43.3294106",
  "Longitude": "3.2739525"
  },
  {
  "Departement": "84",
  "Nom": "Provence-Alpes-Côte-d'Azur",
  "Filiale_seche_Environnement": "Triadis Services Béziers",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "04 67 39 95 41",
  "Mail": "b.hug@groupe-seche.com",
  "Mail coriigé": "i.salleles@groupe-seche.com",
  "Adresse": "ZI du Capiscol Impasse René Gomez ",
  "CP": "34420",
  "Ville": "VILLENEUVE LES BEZIERS",
  "Latitude": "43.3294106",
  "Longitude": "3.2739525"
  },
  {
  "Departement": "85",
  "Nom": "Pays de la Loire",
  "Filiale_seche_Environnement": "Séché Eco Industries Changé",
  "Filiere ": "Stockage DD",
  "Téléphone": "02 43 59 60 84",
  "Mail": "y.lecanu@groupe-seche.com",
  "Mail coriigé": "n.boulay@groupe-seche.com",
  "Adresse": "Les Hêtres - CS 20020",
  "CP": "53811",
  "Ville": "Changé Cedex 09",
  "Latitude": "48.1149178",
  "Longitude": "-0.2457407"
  },
  {
  "Departement": "86",
  "Nom": "Aquitaine-Limousin-Poitou-Charentes",
  "Filiale_seche_Environnement": "Séché Eco Industries Changé",
  "Filiere ": "Stockage DD",
  "Téléphone": "02 43 59 60 84",
  "Mail": "y.lecanu@groupe-seche.com",
  "Mail coriigé": "n.boulay@groupe-seche.com",
  "Adresse": "Les Hêtres - CS 20020",
  "CP": "53811",
  "Ville": "Changé Cedex 09",
  "Latitude": "48.1149178",
  "Longitude": "-0.2457407"
  },
  {
  "Departement": "87",
  "Nom": "Aquitaine-Limousin-Poitou-Charentes",
  "Filiale_seche_Environnement": "Séché Eco Industries Changé",
  "Filiere ": "Stockage DD",
  "Téléphone": "02 43 59 60 84",
  "Mail": "y.lecanu@groupe-seche.com",
  "Mail coriigé": "n.boulay@groupe-seche.com",
  "Adresse": "Les Hêtres - CS 20020",
  "CP": "53811",
  "Ville": "Changé Cedex 09",
  "Latitude": "48.1149178",
  "Longitude": "-0.2457407"
  },
  {
  "Departement": "88",
  "Nom": "Alsace-Champagne-Ardenne-Lorraine",
  "Filiale_seche_Environnement": "Tredi Hombourg",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "03 89 83 21 77",
  "Mail": "n.siry@groupe-seche.com",
  "Mail coriigé": "e.hueber@groupe-seche.com",
  "Adresse": "ZI de Hombourg BP 24 ",
  "CP": "68490",
  "Ville": "Ottmarsheim",
  "Latitude": "47.7873993",
  "Longitude": "7.5063963"
  },
  {
  "Departement": "89",
  "Nom": "Bourgogne-Franche-Comté",
  "Filiale_seche_Environnement": "Triadis Services Etampes",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "01 69 16 13 20",
  "Mail": "b.kouzine@groupe-seche.com",
  "Mail coriigé": "n.hottin@groupe-seche.com",
  "Adresse": "Rue de Grenots ZA Sud Essor ",
  "CP": "91150",
  "Ville": "Etampes",
  "Latitude": "48.4371147",
  "Longitude": "2.1632171"
  },
  {
  "Departement": "90",
  "Nom": "Bourgogne-Franche-Comté",
  "Filiale_seche_Environnement": "Tredi Hombourg",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "03 89 83 21 77",
  "Mail": "n.siry@groupe-seche.com",
  "Mail coriigé": "e.hueber@groupe-seche.com",
  "Adresse": "ZI de Hombourg BP 24 ",
  "CP": "68490",
  "Ville": "Ottmarsheim",
  "Latitude": "47.7873993",
  "Longitude": "7.5063963"
  },
  {
  "Departement": "91",
  "Nom": "Ile-de-France",
  "Filiale_seche_Environnement": "Triadis Services Etampes",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "01 69 16 13 20",
  "Mail": "b.kouzine@groupe-seche.com",
  "Mail coriigé": "n.hottin@groupe-seche.com",
  "Adresse": "Rue de Grenots ZA Sud Essor ",
  "CP": "91150",
  "Ville": "Etampes",
  "Latitude": "48.4371147",
  "Longitude": "2.1632171"
  },
  {
  "Departement": "92",
  "Nom": "Ile-de-France",
  "Filiale_seche_Environnement": "Triadis Services Etampes",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "01 69 16 13 20",
  "Mail": "b.kouzine@groupe-seche.com",
  "Mail coriigé": "n.hottin@groupe-seche.com",
  "Adresse": "Rue de Grenots ZA Sud Essor ",
  "CP": "91150",
  "Ville": "Etampes",
  "Latitude": "48.4371147",
  "Longitude": "2.1632171"
  },
  {
  "Departement": "93",
  "Nom": "Ile-de-France",
  "Filiale_seche_Environnement": "Triadis Services Etampes",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "01 69 16 13 20",
  "Mail": "b.kouzine@groupe-seche.com",
  "Mail coriigé": "n.hottin@groupe-seche.com",
  "Adresse": "Rue de Grenots ZA Sud Essor ",
  "CP": "91150",
  "Ville": "Etampes",
  "Latitude": "48.4371147",
  "Longitude": "2.1632171"
  },
  {
  "Departement": "94",
  "Nom": "Ile-de-France",
  "Filiale_seche_Environnement": "Triadis Services Etampes",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "01 69 16 13 20",
  "Mail": "b.kouzine@groupe-seche.com",
  "Mail coriigé": "n.hottin@groupe-seche.com",
  "Adresse": "Rue de Grenots ZA Sud Essor ",
  "CP": "91150",
  "Ville": "Etampes",
  "Latitude": "48.4371147",
  "Longitude": "2.1632171"
  },
  {
  "Departement": "95",
  "Nom": "Ile-de-France",
  "Filiale_seche_Environnement": "Triadis Services Etampes",
  "Filiere ": "Plateforme de transit",
  "Téléphone": "01 69 16 13 20",
  "Mail": "b.kouzine@groupe-seche.com",
  "Mail coriigé": "n.hottin@groupe-seche.com",
  "Adresse": "Rue de Grenots ZA Sud Essor ",
  "CP": "91150",
  "Ville": "Etampes",
  "Latitude": "48.4371147",
  "Longitude": "2.1632171"
  },
  {
  "Departement": "971",
  "Nom": "Guadeloupe",
  "Filiale_seche_Environnement": "International",
  "Filiere ": "UE",
  "Téléphone": "01 53 21 53 68",
  "Mail": "international@groupe-seche.com",
  "Mail coriigé": "international@groupe-seche.com",
  "Adresse": "Tour Montparnasse - 33 av du Maine",
  "CP": "75015",
  "Ville": "Paris"
  },
  {
  "Departement": "972",
  "Nom": "Martinique",
  "Filiale_seche_Environnement": "International",
  "Filiere ": "UE",
  "Téléphone": "01 53 21 53 68",
  "Mail": "international@groupe-seche.com",
  "Mail coriigé": "international@groupe-seche.com",
  "Adresse": "Tour Montparnasse - 33 av du Maine",
  "CP": "75015",
  "Ville": "Paris"
  },
  {
  "Departement": "973",
  "Nom": "Guyane",
  "Filiale_seche_Environnement": "International",
  "Filiere ": "UE",
  "Téléphone": "01 53 21 53 68",
  "Mail": "international@groupe-seche.com",
  "Mail coriigé": "international@groupe-seche.com",
  "Adresse": "Tour Montparnasse - 33 av du Maine",
  "CP": "75015",
  "Ville": "Paris"
  },
  {
  "Departement": "974",
  "Nom": "La Réunion",
  "Filiale_seche_Environnement": "International",
  "Filiere ": "UE",
  "Téléphone": "01 53 21 53 68",
  "Mail": "international@groupe-seche.com",
  "Mail coriigé": "international@groupe-seche.com",
  "Adresse": "Tour Montparnasse - 33 av du Maine",
  "CP": "75015",
  "Ville": "Paris"
  },
  {
  "Departement": "975",
  "Nom": "Saint-Pierre-et-Miquelon",
  "Filiale_seche_Environnement": "International",
  "Filiere ": "UE",
  "Téléphone": "01 53 21 53 68",
  "Mail": "international@groupe-seche.com",
  "Mail coriigé": "international@groupe-seche.com",
  "Adresse": "Tour Montparnasse - 33 av du Maine",
  "CP": "75015",
  "Ville": "Paris"
  },
  {
  "Departement": "976",
  "Nom": "Mayotte",
  "Filiale_seche_Environnement": "International",
  "Filiere ": "UE",
  "Téléphone": "01 53 21 53 68",
  "Mail": "international@groupe-seche.com",
  "Mail coriigé": "international@groupe-seche.com",
  "Adresse": "Tour Montparnasse - 33 av du Maine",
  "CP": "75015",
  "Ville": "Paris"
  },
  {
  "Departement": "977",
  "Nom": "Saint-Barthélemy",
  "Filiale_seche_Environnement": "International",
  "Filiere ": "UE",
  "Téléphone": "01 53 21 53 68",
  "Mail": "international@groupe-seche.com",
  "Mail coriigé": "international@groupe-seche.com",
  "Adresse": "Tour Montparnasse - 33 av du Maine",
  "CP": "75015",
  "Ville": "Paris"
  },
  {
  "Departement": "978",
  "Nom": "Saint-Martin",
  "Filiale_seche_Environnement": "International",
  "Filiere ": "UE",
  "Téléphone": "01 53 21 53 68",
  "Mail": "international@groupe-seche.com",
  "Mail coriigé": "international@groupe-seche.com",
  "Adresse": "Tour Montparnasse - 33 av du Maine",
  "CP": "75015",
  "Ville": "Paris"
  },
  {
  "Departement": "984",
  "Nom": "Terres Australes et Antarctiques",
  "Filiale_seche_Environnement": "International",
  "Filiere ": "UE",
  "Téléphone": "01 53 21 53 68",
  "Mail": "international@groupe-seche.com",
  "Mail coriigé": "international@groupe-seche.com",
  "Adresse": "Tour Montparnasse - 33 av du Maine",
  "CP": "75015",
  "Ville": "Paris"
  },
  {
  "Departement": "986",
  "Nom": "Wallis-et-Futuna",
  "Filiale_seche_Environnement": "International",
  "Filiere ": "UE",
  "Téléphone": "01 53 21 53 68",
  "Mail": "international@groupe-seche.com",
  "Mail coriigé": "international@groupe-seche.com",
  "Adresse": "Tour Montparnasse - 33 av du Maine",
  "CP": "75015",
  "Ville": "Paris"
  },
  {
  "Departement": "987",
  "Nom": "Polynésie Française",
  "Filiale_seche_Environnement": "International",
  "Filiere ": "UE",
  "Téléphone": "01 53 21 53 68",
  "Mail": "international@groupe-seche.com",
  "Mail coriigé": "international@groupe-seche.com",
  "Adresse": "Tour Montparnasse - 33 av du Maine",
  "CP": "75015",
  "Ville": "Paris"
  },
  {
  "Departement": "988",
  "Nom": "Nouvelle-Calédonie",
  "Filiale_seche_Environnement": "International",
  "Filiere ": "UE",
  "Téléphone": "01 53 21 53 68",
  "Mail": "international@groupe-seche.com",
  "Mail coriigé": "international@groupe-seche.com",
  "Adresse": "Tour Montparnasse - 33 av du Maine",
  "CP": "75015",
  "Ville": "Paris"
  },
  {
  "Departement": "989",
  "Nom": "Île de Clipperton",
  "Filiale_seche_Environnement": "International",
  "Filiere ": "UE",
  "Téléphone": "01 53 21 53 68",
  "Mail": "international@groupe-seche.com",
  "Mail coriigé": "international@groupe-seche.com",
  "Adresse": "Tour Montparnasse - 33 av du Maine",
  "CP": "75015",
  "Ville": "Paris"
  },
  {
  "Departement": ""
  }
  ]

  var found = data.find(function(element) {
     var cp = code.substr(0, 2) ;
     if( cp > 96) cp = code.substr(0, 3);

    return element.Departement == cp;
  });


 return found;
}


function cpamiante() {
  var code = $("#zipcode").val();
  var found = code_amiante(code);
  var result = "";

  if( typeof found === "undefined" ) result = "Aucune filiale n'est disponible proche de chez vous";
  else  result = "<i class='fas fa-map-marker-alt fa-3x'></i> <br> " +
    "<h1> " + found.Filiale_seche_Environnement +
   "</h1>    " + found.Adresse + "<br>" + found.CP + " " + found.Ville + "<br>"
   + found.Téléphone ;

   console.log(result);
    if(code != "")
    $("#result_cp_amiante").html(result);
}

function cpsante() {
  var code = $("#zipcode").val();
  var found = code_sante(code);
  var result = "";

  if( typeof found === "undefined" ) result = "Aucune filiale n'est disponible proche de chez vous";
  else  result = "<i class='fas fa-map-marker-alt fa-3x'></i> <br> " +
    "<h1> " + found.Filiale_Seche_Healthcare +
    "</h1> "  + found.Address + "<br>"
   + found.Téléphone ;

   console.log(result);
   if(code != "")
   $("#result_cp_amiante").html(result);
}




function gtagPP(pp){
    if( pp==1 ){
      $(".ppcomp1").attr('id', 'thirdComp');
      $(".ppcomp2").removeAttr('id');
      $(".ppcomp1").css("display","none");
      $(".ppcomp2").css("display","none");

      $("#tagbtn1").addClass("active-btn-blue");
      $("#tagbtn1").removeClass("btnGray");
      $("#tagbtn2").removeClass("active-btn-blue");
      $("#tagbtn2").addClass("btnGray");

      $("#firstComp").css("display","block");

      $("#devis-gratuit").removeAttr('href');
      $("#devis-gratuit").attr('href', 'pageDemandeDevis-amiante-Part.html');

      $("#trouver-mon-contact").removeAttr('href');
      $("#trouver-mon-contact").attr('href', '#');

    }else{
      $(".ppcomp1").removeAttr('id');
      $(".ppcomp2").attr('id', 'thirdComp');
      $(".ppcomp1").css("display","none");
      $(".ppcomp2").css("display","none");

      $("#tagbtn2").addClass("active-btn-blue");
      $("#tagbtn2").removeClass("btnGray");
      $("#tagbtn1").removeClass("active-btn-blue");
      $("#tagbtn1").addClass("btnGray");

      $("#firstComp").css("display","block");

      $("#devis-gratuit").removeAttr('href');
      $("#devis-gratuit").attr('href', 'pagedemandedevis-Amiante-Pro.html');

      $("#trouver-mon-contact").removeAttr('href');
      $("#trouver-mon-contact").attr('href', '#');
    }
 }

 function gtag(number){

    if( number == 1){
      $("#firstComp").css("display","block");
      $("#secondComp").css("display","none");
      $("#thirdComp").css("display","none");
      $("#firstCompOpacity").addClass("active-opacity");
    }

    if( number == 2){
      $("#firstComp").css("display","none");
      $("#secondComp").css("display","block");
      $("#thirdComp").css("display","none");
      $("#secondCompOpacity").addClass("active-opacity");
    }

    if( number == 3){
      $("#firstComp").css("display","none");
      $("#secondComp").css("display","none");
      $("#thirdComp").css("display","block");
      $("#thirdCompOpacity").addClass("active-opacity");
    }

 }
