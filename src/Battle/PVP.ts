import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player2 : Fighter;

  constructor(protected player : Fighter, player2 : Fighter) {
    super(player);
    this._player2 = player2;
  }

  fight(): number {
    for (let index = 0; index < 100; index += 1) {
      this.player.attack(this._player2);
      if (this._player2.lifePoints <= 0) {
        return 1;
      }
      this._player2.attack(this.player);
      if (this.player.lifePoints <= 0) {
        return -1;
      }
    }
    return 0;
  }
}