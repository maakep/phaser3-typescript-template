# Phaser 3 typescript template
Minimalistic setup.

## Prereqs

Install [node.js](https://nodejs.org/en/)

## Setting up
Clone the repository and add your own repository as origin
```git
git clone https://github.com/maakep/phaser3-typescript-template your-game
git remote set-url origin https://github.com/your-user/your-game.git
```


## Installing
```sh
npm i
```
### Manual maintenance
With this repo you'll need to download & replace the type definitions (located in [/src/phaser.d.ts](https://github.com/maakep/phaser3-typescript-template/tree/master/src)) with the ones from [typescript docs](https://github.com/photonstorm/phaser3-docs/tree/master/typescript) to get the latest type definitions, or create a solution to do it automatically. 

## Building

```sh
npm run build
```
or
```sh
npm run watch
```

### Running

```sh
npm start
```
then browse to http://localhost:8080


