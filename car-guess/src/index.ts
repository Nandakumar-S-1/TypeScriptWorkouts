import { Player} from "./models/player";
import { Game } from "./game";

let player=new Player("Ashika")
let game=new Game(player)
game.start()