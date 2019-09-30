import Timer from './Timer.js';
import {loadLevel} from './loaders.js';
import {createPlayer} from './entities.js';

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

    const timer = new Timer(1/60);
    timer.update = function update(deltaTime) {
        level.update(deltaTime);
        level.comp.draw(context);
        player.vel.y += gravity * deltaTime;
    }

    timer.start();
});
