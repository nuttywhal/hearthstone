const Zone = Object.freeze({
    INVALID: Symbol('INVALID'),
    PLAY: Symbol('PLAY'),
    DECK: Symbol('DECK'),
    HAND: Symbol('HAND'),
    GRAVEYARD: Symbol('GRAVEYARD'),
    REMOVEDFROMGAME: Symbol('REMOVEDFROMGAME'),
    SETASIDE: Symbol('SETASIDE'),
    SECRET: Symbol('SECRET')
});

module.exports = Zone;