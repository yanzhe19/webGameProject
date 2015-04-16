/// <reference path="../objects/submarine.ts" />
/// <reference path="../objects/smallFish.ts" />
/// <reference path="../objects/fish.ts" />
/// <reference path="../objects/scoreboard.ts" />
/*Source  file  name: collision.ts, Author's  name: Zhe Yan (300706310),  Last  Modified  by: Zhe Yan,
Date  last  Modified: 2015_3_18,  Program description： This file check if two objects are collide (fish&submarine, fish&smallFish), if collide, the corresponding action will taken(point or life increase/decrease and game over)
Revision  History : Version 2.0*/
// Collision Manager Class
var managers;
(function (managers) {
    var Collision = (function () {
        //constructor
        function Collision(playerObj, crystals, fences, ghosts, fireballs, scoreboard) {
            this.fences = [];
            this.ghosts = [];
            this.fireballs = [];
            this.crystals = [];
            this.playerObj = playerObj;
            this.fences = fences;
            this.ghosts = ghosts;
            this.fireballs = fireballs;
            this.crystals = crystals;
            this.scoreboard = scoreboard;
        }
        // Utility method - Distance calculation between two points
        Collision.prototype.distance = function (p1, p2) {
            var result = 0;
            var xPoints = 0;
            var yPoints = 0;
            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;
            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;
            result = Math.sqrt(xPoints + yPoints);
            return result;
        };
        // check collision between player and any crystal object
        Collision.prototype.playerAndCrystal = function (crystal) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.playerObj.x;
            p1.y = this.playerObj.y;
            p2.x = crystal.image.x;
            p2.y = crystal.image.y;
            if (this.distance(p1, p2) < ((this.playerObj.height / 2) + (crystal.height / 2))) {
                createjs.Sound.play("pickup");
                this.scoreboard.score += 100;
                crystal.reset();
            }
        };
        // check collision between player and fence
        Collision.prototype.playerAndFence = function (fence) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.playerObj.x;
            p1.y = this.playerObj.y;
            p2.x = fence.image.x;
            p2.y = fence.image.y;
            if (this.distance(p1, p2) < ((this.playerObj.height / 2) + (fence.height / 2))) {
                createjs.Sound.play("explode");
                this.scoreboard.lives -= 1;
                fence.reset();
            }
        };
        // check collision between player and ghost
        Collision.prototype.playerAndGhost = function (ghost) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.playerObj.x;
            p1.y = this.playerObj.y;
            p2.x = ghost.image.x;
            p2.y = ghost.image.y;
            if (this.distance(p1, p2) < ((this.playerObj.height / 2) + (ghost.height / 2))) {
                createjs.Sound.play("explode");
                this.scoreboard.lives -= 1;
                ghost.reset();
            }
        };
        // check collision between player and fence
        Collision.prototype.playerAndFireball = function (fireball) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.playerObj.x;
            p1.y = this.playerObj.y;
            p2.x = fireball.image.x;
            p2.y = fireball.image.y;
            if (this.distance(p1, p2) < ((this.playerObj.height / 2) + (fireball.height / 2))) {
                createjs.Sound.play("explode");
                this.scoreboard.lives -= 1;
                fireball.destroy();
            }
        };
        // Utility Function to Check Collisions
        Collision.prototype.update = function () {
            for (var count = 0; count < crystals.length; count++) {
                this.playerAndCrystal(this.crystals[count]);
            }
            for (var count = 0; count < fences.length; count++) {
                this.playerAndFence(this.fences[count]);
            }
            for (var count = 0; count < ghosts.length; count++) {
                this.playerAndGhost(this.ghosts[count]);
            }
            for (var count = 0; count < fireballs.length; count++) {
                this.playerAndFireball(this.fireballs[count]);
            }
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map