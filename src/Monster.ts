import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints : number;
  private _strength : number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints() : number {
    return this._lifePoints;
  }

  get strength() : number {
    return this._strength;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number): number {
    const demage = this._lifePoints - attackPoints;
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