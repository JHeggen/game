import Entity from './Entity.js'
import Jump from './traits/Jump.js'
import Go from './traits/Go.js'
import {loadSpriteSheet} from './loaders.js'

export function createPlayer() {
    return loadSpriteSheet('player')
    .then(sprite => {
        const player = new Entity();
        player.size.set(32, 32);

        player.addTrait(new Go());
        player.addTrait(new Jump());

        const frames = ['move-r1', 'move-r2', 'move-r3'];

        function routeFrame(player) {
            if (player.go.dir !== 0 ) {
                const frameIndex = Math.floor(player.go.distance / 10) % frames.length;
                const frameName = frames[frameIndex];
                return frameName;
            }

            return 'idle';
        }
    
        player.draw = function drawPlayer(context) {
            sprite.draw(routeFrame(this), context, 0, 0);
        }
    
        return player;
    });
}