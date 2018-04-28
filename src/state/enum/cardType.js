const CardType = Object.freeze({
    INVALID: Symbol('INVALID'),
    GAME: Symbol('GAME'),
    PLAYER: Symbol('PLAYER'),
    HERO: Symbol('HERO'),
    MINION: Symbol('MINION'),
    SPELL: Symbol('SPELL'),
    ENCHANTMENT: Symbol('ENCHANTMENT'),
    WEAPON: Symbol('WEAPON'),
    ITEM: Symbol('ITEM'),
    TOKEN: Symbol('TOKEN'),
    HERO_POWER: Symbol('HERO_POWER')
});

module.exports = CardType;