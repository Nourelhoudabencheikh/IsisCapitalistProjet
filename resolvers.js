const { log, Console } = require('console');
const fs = require('fs')
const initialWorld = require('./world');

function saveWorld(context) {
    fs.writeFile(`userworlds/${context.user}-world.json`,
        JSON.stringify(context.world), err => {
            if (err) {
                console.error(err)
                throw new Error(
                    `Erreur d'écriture du monde coté serveur`)
            }
            console.log("err",Error.prepareStackTrace);

        })
}
function calcangelfromscore(score) {
    const angelsPerScore = 0.01; 
    return Math.floor(score * angelsPerScore);
  }

function updateWorld(world) {
    let elapseTime = Date.now() - world.lastupdate;
    console.log('elapstime : ', elapseTime);
    console.log("err",Error.prepareStackTrace);

    // il faut changer world.lastupdate en entier 
    world.lastupdate = Date.now() 
    world.products.forEach(product=> {
        calcQtProductionforElapseTime(product, elapseTime)
    });
}

function calcQtProductionforElapseTime(product, elapseTime) {
    nbrProd = 0
    if (elapseTime > 0) {
        if (product.managerUnlocked) {
            
            if (elapseTime > product.timeleft) {
                nbrProd = 1;
                elapseTime -= product.timeleft
                nbrProd += elapseTime / product.vitesse
                product.timeleft = product.vitesse - elapseTime % product.vitesse;
            } else {
                product.timeleft -= elapseTime;
                nbrProd = 0;
                
            }
        } else {
            if (product.timeleft != 0) {
                if (elapseTime > product.timeleft) {
                    nbrProd = 1;
                    product.timeleft = 0;
                } else {
                    product.timeleft -= elapseTime;
                    nbrProd = 0;
                    
                }
            }
        }
        
    }
    return nbrProd;
}



module.exports = {
    Query: {
        getWorld(parent, args, context) {
            updateWorld(context.world)
            saveWorld(context)

            return context.world
        }
    },
    
    Mutation: {
        acheterCashUpgrade(parent, { name }, context) {
            const upgrade = context.world.upgrades.find(u => u.name === name);

            if (!upgrade) {
                throw new Error(`L'upgrade avec le nom ${name} n'existe pas`);
            }

            // Vérifiez si l'upgrade est déverrouillée
            if (upgrade.unlocked) {
                throw new Error(`L'upgrade ${name} a déjà été déverrouillée`);
            }

            // Effectuez les opérations d'achat ici (par exemple, déduction d'argent)
            // Assurez-vous de mettre à jour le monde et de sauvegarder les modifications

            upgrade.unlocked = true;

            saveWorld(context);

            return upgrade;
        },
        acheterAngelUpgrade(parent, { name }, context) {
            const angelUpgrade = context.world.angelupgrades.find(u => u.name === name);

            if (!angelUpgrade) {
                throw new Error(`L'upgrade d'ange avec le nom ${name} n'existe pas`);

            }

            // Vérifiez si l'upgrade d'ange est déverrouillée
            if (angelUpgrade.unlocked) {
                throw new Error(`L'upgrade d'ange ${name} a déjà été déverrouillée`);
            }

            // Effectuez les opérations d'achat ici (par exemple, utilisation des anges)
            // Assurez-vous de mettre à jour le monde et de sauvegarder les modifications

            angelUpgrade.unlocked = true;


            saveWorld(context);

            return angelUpgrade;
        },
        resetWorld(parent, args, context) {
            const angels = calcangelfromscore(context.world.score);
          
            context.world = {
              ...initialWorld,
              totalangels: angels,
              lastupdate: Date.now(),
            };
          
            saveWorld(context);
          
            return context.world;
          },


        acheterQtProduit(parent, { id, quantite }, context) {
            updateWorld(context.world);

            const product = context.world.products.find(p => p.id === id);

            if (!product) {
                throw new Error(`Le produit avec l'id ${id} n'existe pas`);
            }

            if (product.cout * quantite > context.world.money) {
                throw new Error(`Pas assez d'argent pour acheter ${quantite} exemplaires du produit ${id}`);
            }

            product.quantite += quantite;
            context.world.money -= product.cout * quantite;

            saveWorld(context);

            return product;
        },
        lancerProductionProduit(parent, { id }, context) {
            const product = context.world.products.find(p => p.id === id);

            if (!product) {
                throw new Error(`Le produit avec l'id ${id} n'existe pas`);
            }

            if (product.timeleft === product.vitesse) {
                throw new Error(`La production du produit ${id} est déjà lancée`);
            }

            product.timeleft = product.vitesse;

            saveWorld(context);

            return product;
        },
        engagerManager(parent, { name }, context) {
            const manager = context.world.managers.find(m => m.name === name);

            if (!manager) {
                throw new Error(`Le manager ${name} n'existe pas`);
            }

            const product = context.world.products.find(p => p.id === manager.idcible);

            if (!product) {
                throw new Error(`Le produit associé au manager ${name} n'existe pas`);
            }

            product.managerUnlocked = true;
            manager.unlocked = true;

            saveWorld(context);

            return manager;
        }


    }
};