import Phaser from 'phaser';

export class CityScene extends Phaser.Scene {
  private blocks: Phaser.GameObjects.Rectangle[] = [];
  constructor(){ super('city'); }
  create(){
    this.cameras.main.setBackgroundColor('#0b1020');
    const tileW = 54; const tileH = 28;
    for(let y=0;y<4;y++) for(let x=0;x<5;x++){
      const px = 100 + (x - y) * (tileW/2);
      const py = 150 + (x + y) * (tileH/2);
      const tile = this.add.rectangle(px, py, tileW, tileH, 0x18233f, 0.95).setAngle(45);
      this.blocks.push(tile);
    }
    this.add.text(12, 12, 'Pocket Districts', { color: '#98aaff', fontSize: '18px' });
  }
  pulseAt(index: number){ const t = this.blocks[index % this.blocks.length]; this.tweens.add({ targets: t, scale: 1.08, duration: 120, yoyo: true}); }
}
