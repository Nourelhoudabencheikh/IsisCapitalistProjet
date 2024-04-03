module.exports = {
   "name": "fleurs",
   "logo": "icones/logo.jpg",
   "money": 999999999,
   "score": 200000000,
   "totalangels": 2000000,
   "activeangels": 0,
   "angelbonus": 2,
   "lastupdate": 1711730389303,
   "products": [
       {
           "id": 1,
           "name": "Gypsophile",
           "logo": "icones/fleur.jpg",
           "cout": 4,
           "croissance": 1.07,
           "revenu": 1,
           "vitesse": 500,
           "quantite": 1,
           "timeleft": 0,
           "managerUnlocked": false,
           "palliers": [
               {
                   "name": "tortue",
                   "logo": "icones/tortue.jpg",
                   "seuil": 20,
                   "idcible": 1,
                   "ratio": 2,
                   "typeratio": "vitesse",
                   "unlocked": false
               },
               {
                   "name": "vache",
                   "logo": "icones/vache.jpg",
                   "seuil": 75,
                   "idcible": 1,
                   "ratio": 2,
                   "typeratio": "vitesse",
                   "unlocked": false
               }
           ]
       },
       {"id": 2,
           "name": "Tulip",
           "logo": "icones/fleur2.jpg",
           "cout": 4,
           "croissance": 1.07,
           "revenu": 16,
           "vitesse": 500,
           "quantite": 7,
           "timeleft": 0,
           "managerUnlocked": false,
           "palliers": [
               {
                   "name": "tortue",
                   "logo": "icones/tortue.jpg",
                   "seuil": 20,
                   "idcible": 1,
                   "ratio": 2,
                   "typeratio": "vitesse",
                   "unlocked": false
               },
               {
                   "name": "vache",
                   "logo": "icones/vache.jpg",
                   "seuil": 75,
                   "idcible": 1,
                   "ratio": 2,
                   "typeratio": "vitesse",
                   "unlocked": false
               }
           ]
       },
     
       {
           "id": 3,
           "name": "Orchid",
           "logo": "icones/fleur3.jpg",
           "cout": 12,
           "croissance": 1,
           "revenu": 12,
           "vitesse": 35,
           "quantite": 99,
           "timeleft": 0, // Initialiser timeleft avec une valeur entière
           "managerUnlocked": false,
           "palliers": null
       },
       {
        "id": 4,
        "name": "Rose",
        "logo": "icones/fleur4.jpg",
        "cout": 15,
        "croissance": 1,
        "revenu": 15,
        "vitesse": 55,
        "quantite": 8,
        "timeleft": 0, // Initialiser timeleft avec une valeur entière
        "managerUnlocked": false,
        "palliers": null
    },
    
       

   ],
   "allunlocks": [
       {
           "name": "Nom du premier unlock général",
           "logo": "icones/unlock.jpg",
           "seuil": 30,
           "idcible": 0,
           "ratio": 2,
           "typeratio": "gain",
           "unlocked": false
       }
   ],
   "upgrades": [
       {
           "name": "Nom du premier upgrade",
           "logo": "icones/upgrade.jpg",
           "seuil": 1000,
 },
 
 ],
 "angelupgrades": [
 {
 "name": "Angel Sacrifice",
 "logo": "icones/angel.png",
 "seuil": 10,
 "idcible": 0,
 "ratio": 3,
 "typeratio": "gain",
 "unlocked": false
 },

 ],

 "managers": [
    {
    "name": "alix",
    "logo": "icones/manager.jpg",
    "seuil": 10,
    "idcible": 1,
    "ratio": 0,
    "typeratio": "gain",
    "unlocked": false
    },
    {
        "name": "alexandre",
        "logo": "icones/manager.jpg",
        "seuil": 10,
        "idcible": 1,
        "ratio": 0,
        "typeratio": "gain",
        "unlocked": false
        },
      
  
    ]
   };