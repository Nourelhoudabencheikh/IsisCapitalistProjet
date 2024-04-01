module.exports = {
   "name": "fleurs",
   "logo": "../../../../../public/icones/logo.jpg",
   "money": 999999999,
   "score": 200000000,
   "totalangels": 2000000,
   "activeangels": 0,
   "angelbonus": 2,
   "lastupdate": 1711730389303,
   "products": [
       {
           "id": 1,
           "name": "fleur",
           "logo": "../../../../../public/icones/fleur.jpg",
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
                   "logo": "../../../../../public/icones/tortue.jpg",
                   "seuil": 20,
                   "idcible": 1,
                   "ratio": 2,
                   "typeratio": "vitesse",
                   "unlocked": false
               },
               {
                   "name": "vache",
                   "logo": "../../../../../public/icones/vache.jpg",
                   "seuil": 75,
                   "idcible": 1,
                   "ratio": 2,
                   "typeratio": "vitesse",
                   "unlocked": false
               }
           ]
       },
       {
           "id": 2,
           "name": "fleur1",
           "logo": "../../../../../public/icones/fleur1.jpg",
           "cout": 0,
           "croissance": 1,
           "revenu": 0,
           "vitesse": 0,
           "quantite": 0,
           "timeleft": 0, // Initialiser timeleft avec une valeur entière
           "managerUnlocked": false,
           "palliers": null
       }
   ],
   "allunlocks": [
       {
           "name": "Nom du premier unlock général",
           "logo": "../../../../../public/icones/unlock.jpg",
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
           "logo": "../../../../../public/icones/upgrade.jpg",
           "seuil": 1000,
 },
 
 ],
 "angelupgrades": [
 {
 "name": "Angel Sacrifice",
 "logo": "../../../../../public/icones/angel.png",
 "seuil": 10,
 "idcible": 0,
 "ratio": 3,
 "typeratio": "gain",
 "unlocked": false
 },

 ],

 "managers": [
    {
    "name": "manager",
    "logo": "../../../../../public/icones/manager.jpg",
    "seuil": 10,
    "idcible": 1,
    "ratio": 0,
    "typeratio": "gain",
    "unlocked": false
    },
  
    ]
   };