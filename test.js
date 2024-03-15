
let test=[
    {p:{vitesse : 2370, timeleft:0, managerUnlocked: false}, elpseTime:7000,qt:0,timeleft:0},
    {p:{vitesse : 2876, timeleft:2385, managerUnlocked: false}, elpseTime:7393,qt:1,timeleft:0},
    {p:{vitesse : 2927, timeleft:2355, managerUnlocked: false}, elpseTime:5686,qt:1,timeleft:0},
    {p:{vitesse : 1700, timeleft:813, managerUnlocked: false}, elpseTime:118,qt:0,timeleft:695},
    {p:{vitesse : 2807, timeleft:589, managerUnlocked: false}, elpseTime:2433,qt:1,timeleft:0},
    {p:{vitesse : 20, timeleft:18, managerUnlocked: false}, elpseTime:4252,qt:1,timeleft:0},
    {p:{vitesse : 5140, timeleft:4188, managerUnlocked: false}, elpseTime:3875,qt:0,timeleft:233},
    {p:{vitesse : 3481, timeleft:1731, managerUnlocked: false}, elpseTime:4711,qt:1,timeleft:0},
    {p:{vitesse : 5677, timeleft:1386, managerUnlocked: false}, elpseTime:5773,qt:1,timeleft:0},
    {p:{vitesse : 133, timeleft:124, managerUnlocked: false}, elpseTime:311,qt:1,timeleft:0},
    {p:{vitesse : 4995, timeleft:2315, managerUnlocked: false}, elpseTime:736,qt:0,timeleft:1579},
    {p:{vitesse : 890, timeleft:732, managerUnlocked: true}, elpseTime:19502,qt:22,timeleft:810},
    {p:{vitesse : 1829, timeleft:480, managerUnlocked: true}, elpseTime:17302,qt:10,timeleft:1468},
    {p:{vitesse : 2359, timeleft:1989, managerUnlocked: true}, elpseTime:4133,qt:1,timeleft:215},
    {p:{vitesse : 4610, timeleft:2390, managerUnlocked: true}, elpseTime:12723,qt:3,timeleft:3497},
    {p:{vitesse : 5660, timeleft:5235, managerUnlocked: true}, elpseTime:15256,qt:2,timeleft:1299},
    {p:{vitesse : 1819, timeleft:860, managerUnlocked: true}, elpseTime:5679,qt:0,timeleft:638},
    {p:{vitesse : 56, timeleft:46, managerUnlocked: true}, elpseTime:5515,qt:0,timeleft:19},
    {p:{vitesse : 507, timeleft:97, managerUnlocked: true}, elpseTime:18235,qt:0,timeleft:114},
    {p:{vitesse : 3804, timeleft:3168, managerUnlocked: true}, elpseTime:4958,qt:0,timeleft:2014},
    {p:{vitesse : 440, timeleft:64, managerUnlocked: true}, elpseTime:15685,qt:0,timeleft:219},
    ]



    function calcQtProductionforElapseTime(product, elapseTime) {
        nbrProd = 0
        while (elapseTime > 0) {
            if (product.managerUnlocked) {
                
                if (elapseTime > product.timeleft) {
                    nbrProd = 1;
                    elaspseTime -= product.timeleft
                    nbrProd += elapseTime / product.vitesse
                    product.timeleft = product.vitesse - elapseTime % product.vitesse;
                } else {
                    product.timeleft -= elapseTime;
                    nbrProd = 0;
                    break;
                }
            } else {
                if (product.timeleft != 0) {
                    if (elapseTime > product.timeleft) {
                        nbrProd = 1;
                        product.timeleft = 0;
                    } else {
                        product.timeleft -= elapseTime;
                        nbrProd = 0;
                        break;
                    }
                }
            }
            
        }
        return nbrProd;
    }
    