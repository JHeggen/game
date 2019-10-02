import Timer from './Timer.js';
import {loadLevel} from './loaders.js';
import {createPlayer} from './entities.js';
import {createCollisionLayer} from './layers.js'

import Keyboard from './KeyboardState.js';


const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

Promise.all([
    createPlayer(),
    loadLevel('1'),
])
.then(([player, level]) => {

    const gravity = 2000;
    player.pos.set(64, 180);

    level.comp.layers.push(createCollisionLayer(level));

    level.entities.add(player);

    const SPACE = 32;
    const input = new Keyboard();
    input.addMapping(SPACE, keyState => {
        if (keyState) {
            player.jump.start();
        } else {
            player.jump.cancel();
        }
    });
    input.listenTo(window);

    ['mousedown', 'mousemove'].forEach(eventName => {
        canvas.addEventListener(eventName, event => {
            if (event.buttons === 1) {
                player.vel.set(0, 0);
                player.pos.set(event.offsetX, event.offsetY);
            }
        });
    });

    const timer = new Timer(1/60);
    timer.update = function update(deltaTime) {
        level.update(deltaTime);
        level.comp.draw(context);
        player.vel.y += gravity * deltaTime;
    }

    timer.start();
});
