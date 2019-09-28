export default class SpriteSheet {
    constructor(image, width, height) {
        this.image = image;
        this.width = width;
        this.height = height;
        this.tiles = new Map();
    }

    define(name, x, y, width, height) {
        const buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        buffer
            .getContext('2d')
            .drawImage(
                this.image,
                x,
                y,
                width,
                height,
                0,
                0,
                width,
                height
            );
            this.tiles.set(name, buffer)
    }

    defineTile(name, x, y) {
        this.define(name, x * this.width, y * this.height, this.width, this.height)
    }

    draw(name, context, x, y) {
        const buffer = this.tiles.get(name);
        context.drawImage(buffer, x, y);
    }

    drawTile(name, context, x, y) {
        this.draw(name, context, x * this.width, y * this.height)
    }

}

/*
img:	    Specifies the image, canvas, or video element to use	 
sx: 	    Optional. The x coordinate where to start clipping	
sy: 	    Optional. The y coordinate where to start clipping	
swidth:     Optional. The width of the clipped image	
sheight:    Optional. The height of the clipped image	
x:  	    The x coordinate where to place the image on the canvas	
y:  	    The y coordinate where to place the image on the canvas	
width:	    Optional. The width of the image to use (stretch or reduce the image)	
height:     Optional. The height of the image to use (stretch or reduce the image)
*/