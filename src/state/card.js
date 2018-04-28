const CardType = require('./enum/cardType');
const Zone = require('./enum/zone');

const defaults = Object.freeze({
    id: undefined,
    name: undefined,
    cost: undefined,
    damage: undefined,
    health: undefined,
    silenced: false,
    windfury: false,
    taunt: false,
    stealth: false,
    divine_shield: false,
    charge: false,
    frozen: false,
    poisonous: false,
    lifesteal: false,
    rush: false,
    type: CardType.INVALID,
    zone: Zone.INVALID,
    zone_position: undefined
});

var Card = {
    init: function(data) {
        this.data = Object.assign(defaults, data);
        return this;
    }
};

module.exports = Card;