import SpriteSheet from './SpriteSheet.js'
import {loadTiles, loadLevel} from './loaders.js'

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

loadTiles('/assets/tileset.png')
.then(image => {
    context.drawImage(image, 60, 560);
    const sprites = new SpriteSheet(image, 32, 32);
    sprites.define('ground', 14, 2);
    sprites.define('eskeleton', 6, 8);

    for (let x = 0; x < 15; ++x) {
        for (let y = 0; y < 15; ++y) {
            sprites.drawTile('ground', context, x, y);
        }
    }

    sprites.draw('eskeleton', context, 45, 62);

})
context.beginPath();
context.rect(0, 0, 480, 480);
context.stroke();
