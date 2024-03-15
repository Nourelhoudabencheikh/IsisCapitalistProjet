const fs = require('fs')

function saveWorld(context) {
    fs.writeFile(`userworlds/${context.user}-world.json`,
        JSON.stringify(context.world), err => {
            if (err) {
                console.error(err)
                throw new Error(
                    `Erreur d'écriture du monde coté serveur`)
            }
        })
}

function updateWorld(world) {
    let elapseTime = Date.now() - world.lastupdate;
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
                elaspseTime -= product.timeleft
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