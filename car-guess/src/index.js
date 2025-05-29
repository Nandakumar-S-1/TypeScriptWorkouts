"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var player_1 = require("./models/player");
var game_1 = require("./game");
var player = new player_1.Player("Ashika");
var game = new game_1.Game(player);
game.start();
