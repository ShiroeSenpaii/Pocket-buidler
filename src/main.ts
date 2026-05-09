import Phaser from 'phaser';
import { BootScene } from './game/scenes/BootScene';
import { CityScene } from './game/scenes/CityScene';
import { UIScene } from './game/scenes/UIScene';
import { mountOverlay } from './ui/domOverlay';
import './styles.css';

const cityScene = new CityScene();
new Phaser.Game({ type: Phaser.AUTO, parent: 'app', width: 390, height: 380, backgroundColor: '#0b1020', scene: [new BootScene(), cityScene, new UIScene()], scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_HORIZONTALLY } });
mountOverlay((i)=>cityScene.pulseAt(i));
