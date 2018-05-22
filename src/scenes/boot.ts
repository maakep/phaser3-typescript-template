import * as Phaser from "phaser";

export class Boot extends Phaser.Scene {
  init() {
    console.log("Booting");
  }

  preload () {
    console.log("Load things necessary during preload scene");
    this.scene.start("preload");
  }
}