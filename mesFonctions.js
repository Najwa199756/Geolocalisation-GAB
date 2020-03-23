

            
    window.onload = function()
    {
        console.log('page chargée');

   var tableauMarqueurs = [];

    // On initialise la carte 7.988776
    var carte = L.map('maCarte').setView([35, -7,9999], 6);

    // On charge les "tuiles"
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        // Il est toujours bien de laisser le lien vers la source des données
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
        minZoom: 1,
        maxZoom: 20
    }).addTo(carte);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibmFqd2FhbWV1ciIsImEiOiJjazY3cm84c3Ewa2dhM2RwNmJoc3BqdWtuIn0.WinxM2hHla3QWz6AOQ7QnA'
    }).addTo(carte);
    // On personnalise le marqueur
    var icone = L.icon({
        iconUrl: "/Users/ok/Desktop/stage2020/ma_Carte/style/icone.png",
        iconSize: [29, 24],
        iconAnchor: [9, 21],
        popupAnchor: [0, -14]
    })

   var marqueurs = L.markerClusterGroup();


   for ( var i=0;i< markers.length; ++i )
   {
     var marqueur=L.marker([markers[i].latitude , markers[i].longitude], {icon: icone}).bindPopup("<p>"+markers[i].name+"</p>").addTo(carte);
     marqueurs.addLayer(marqueur);
   
        // On ajoute le marqueur au tableau
        tableauMarqueurs.push(marqueur);
       }
       // On regroupe les marqueurs dans un groupe Leaflet
       var groupe = new L.featureGroup(tableauMarqueurs);

       // On adapte le zoom au groupe
       carte.fitBounds(groupe.getBounds().pad(0.5));

       carte.addLayer(marqueurs);
      
            
    }
    
