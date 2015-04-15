/// <reference path="../managers/asset.ts" />
// Sea Class
/*Source  file  name: sea.ts, Author's  name: Zhe Yan (300706310),  Last  Modified  by: Zhe Yan,
Date  last  Modified: 2015_3_18,  Program description： This file is the sea background object file, it's the obejct of the whole game background,
Revision  History : Version 2.0*/
//This is the sea object class
var objects;
(function (objects) {
    var Sea = (function () {
        //constructor of sea class
        function Sea(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("sea"));
            //this.width = this.image.getBounds().width;
            //this.height = this.image.getBounds().height;
            this.reset();
            //set the sea move speed
            this.dx = constants.BACKGROUND_MOVING_SPEED;
            //add sea to game container
            game.addChild(this.image);
        }
        //update sea background
        Sea.prototype.update = function () {
            this.image.x -= this.dx;
            console.log(this.image.x);
            //if sea move to the end, resset its position
            if (this.image.x <= -500) {
                this.reset();
            }
        };
        //reset sea background's x position to double of canva's width
        Sea.prototype.reset = function () {
            this.image.x = 0;
        };
        //destroy sea object
        Sea.prototype.destroy = function () {
            //remove sea object from game container
            game.removeChild(this.image);
        };
        return Sea;
    })();
    objects.Sea = Sea;
})(objects || (objects = {}));
//# sourceMappingURL=sea.js.map