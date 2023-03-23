import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  // private _beings: SimpleFighter[];
  constructor(player: Fighter, private beings: SimpleFighter[]) {
    super(player);
    // this._beings = beings;
  }

  fighters(i: number): number {
    for (let index = 0; index < 100; index += 1) {
      this.player.attack(this.beings[i]);
      if (this.beings[i].lifePoints <= 0) return 1;
      this.beings[i].attack(this.player);
      if (this.player.lifePoints <= 0) return -1;
    }
    return 0;
  }

  fight(): number {
    for (let index = 0; index < this.beings.length; index += 1) {
      const shift = this.fighters(index);
      if (shift === -1) return -1;
    }
    return 1;
  }
}