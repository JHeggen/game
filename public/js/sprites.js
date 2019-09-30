import SpriteSheet from './SpriteSheet.js'
import {loadTiles} from './loaders.js'

export function loadPlayerSprite() {
    return loadTiles('/assets/tileset.png')
    .then(image => {
        const sprites = new SpriteSheet(image, 32, 32);
        sprites.defineTile('idle', 6, 8);
        return sprites;
    });    
}

export function loadBackgroundSprites() {
    return loadTiles('/assets/tileset.png')
    .then(image => {
        const sprites = new SpriteSheet(image, 32, 32);
        sprites.defineTile('ground', 14, 2);
        sprites.defineTile('floor', 15, 0);
        return sprites;
    });    
}