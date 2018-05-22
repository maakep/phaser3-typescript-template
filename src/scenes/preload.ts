import * as Phaser from "phaser";

export class Preload extends Phaser.Scene {
  init() {
    console.log("Preloading");
  }

  preload () {
    console.log("Load things necessary for Game scene");
    this.scene.start("game");
  }
}