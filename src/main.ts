import * as Phaser from "phaser";
import { Preload } from "./scenes/preload";
import { Boot } from "./scenes/boot";
import { Game } from "./scenes/game";


class Main extends Phaser.Game {
  constructor() {
    const config: GameConfig = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
    };
    super(config);

    this.scene.add("boot", Boot, false);
    this.scene.add("preload", Preload, false);
    this.scene.add("game", Game, false);
    this.scene.start("preload");
  }
}

window.onload = () => {
  const GameApp: Phaser.Game = new Main();
};