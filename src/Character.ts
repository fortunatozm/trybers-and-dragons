import Archetype from './Archetypes/Archetype';
import Race, { Elf } from './Races';
import Energy from './Energy';
import getRandomInt from './utils';
import { Mage } from './Archetypes';
import Fighter, { SimpleFighter } from './Fighter';

export default class Character implements Fighter {
  private _race : Race;
  private _archetype : Archetype;
  private _maxLifePoints : number;
  private _lifePoints : number;
  private _strength : number;
  private _defense : number;
  private _dexterity : number;
  private _energy : Energy;

  constructor(private name : string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(this.name, this._dexterity);
    this._archetype = new Mage(this.name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._race.maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race() : Race {
    return this._race;
  }

  get archetype() : Archetype {
    return this._archetype;
  }

  get lifePoints() : number {
    return this._lifePoints;
  }

  get strength() : number {
    return this._strength;
  }

  get defense() : number {
    return this._defense;
  }

  get dexterity() : number {
    return this._dexterity;
  }

  get energy() : Energy {
    return { type_: this._energy.type_, amount: this._energy.amount };
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._race.maxLifePoints;
  }

  receiveDamage(attackPoints: number): number {
    const demage = attackPoints - this._defense;
    if (demage > 0) {
      this._lifePoints -= demage;
    }
    if (demage <= 0) {
      this._lifePoints -= 1;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }
}