const ship = require('./ship').ship;

function shipGenerator() {
    const lengths = [5,5,4,3,2];
    let ships = [];
    for(let i = 0; i < lengths.length; i++) {
        ships.push(ship('h', lengths[i]));
    }
    console.log(ships);
    return ships;
}

exports.shipGenerator = shipGenerator;