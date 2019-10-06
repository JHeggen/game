import Entity from './Entity.js'
import Jump from './traits/Jump.js'
import Go from './traits/Go.js'
import Velocity from './traits/Velocity.js'
import {loadPlayerSprite} from './sprites.js'

export function createPlayer() {
    return loadPlayerSprite()
    .then(sprite => {
        const player = new Entity();
        player.size.set(32, 32);

        player.addTrait(new Go());
        //player.addTrait(new Velocity());
        player.addTrait(new Jump());
    
        player.draw = function drawPlayer(context) {
            sprite.draw('idle', context, 0, 0);
        }
    
        return player;
    });
}