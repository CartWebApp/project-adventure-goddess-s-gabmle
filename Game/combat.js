import { status } from "./logic.js";
import { story } from "./story.js";

export const playerEquipment = {
    helmet: null,
    chest: null,
}

export const helmetData = [ /* Helmets that the player uses */
    {
        name: 'Wooden Helmet',
        health: 25,
        attack: 0,
        chance: 0
    },

    {
        name: 'Iron Helmet',
        health: 50,
        attack: 0,
        chance: 0
    },

    {
        name: 'Golden Helmet',
        health: 100,
        attack: 10,
        chance: 0
    },

    {
        name: 'Diamond Helmet',
        health: 150,
        attack: 10,
        chance: 0
    },

    {
        name: 'Divine Helmet',
        health: 250,
        attack: 10,
        chance: 2
    }
]

export const chestData = [ /* Chesplates that the player uses */
    {
        name: 'Wooden Chestplate',
        health: 25,
        attack: 0,
        chance: 0
    },

    {
        name: 'Iron Chestplate',

        health: 50,
        attack: 0,
        chance: 0

    },

    {
        name: 'Golden Chestplate',
        health: 100,
        attack: 10,
        chance: 0
    },

    {
        name: 'Diamond Chestplate',
        health: 150,
        attack: 10,
        chance: 0
    },

    {
        name: 'Divine Chestplate',
        health: 250,
        attack: 10,
        chance: 49
    }
]

let armorLevel = 4;
playerEquipment.helmet = helmetData[armorLevel];
playerEquipment.chest = chestData[armorLevel];

const basePlayerStats = {
    health: 100,
    attack: 10,
    chance: 50,
}



export class Combat {
    constructor(name, health, attack, chance) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.chance = chance;
    }

    Alive() {
        return this.health > 0;
    }

    takeDamage(dmg) {
        this.health -= dmg;
        if (this.health < 0) this.health = 0;
    }

    attackEnemy(enemy) {
        if (Math.random() * 100 <= this.chance) {
            enemy.takeDamage(this.attack);
            return true;
        }
        return false;
    }
}

function totalPlayerStats(base, equipment) {
    let healthBonus = 0;
    let attackBonus = 0;
    let chanceBonus = 0;

    if (equipment.helmet) {
        healthBonus += equipment.helmet.health || 0;
        attackBonus += equipment.helmet.attack || 0;
        chanceBonus += equipment.helmet.chance || 0;

    }
    if (equipment.chest) {
        healthBonus += equipment.chest.health || 0;
        attackBonus += equipment.chest.attack || 0;
        chanceBonus += equipment.chest.chance || 0;
    }

    if (base.chance > 100) {
    base.chance = 100;
    }

    return {
        ...base,
        health: base.health + healthBonus,
        attack: base.attack + attackBonus,
        chance: base.chance + chanceBonus
    }    
}



console.log(totalPlayerStats(basePlayerStats, playerEquipment));