import SpriteSheet from './SpriteSheet.js'
import {loadImage} from './loaders.js'

export function loadPlayerSprite() {
    return loadImage('/assets/tileset.png')
    .then(image => {
        const sprites = new SpriteSheet(image, 32, 32);
        sprites.defineTile('idle', 6, 8);
        return sprites;
    });    
}