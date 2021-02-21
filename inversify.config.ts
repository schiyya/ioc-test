import { Container } from "inversify";
import TYPES from "./types";
import {player, jspeeds, jposition} from './interfaces'
import {JumpPosition, JumpSpeeds, HLSPlayer} from './hlsPlayer'

const container = new Container();

container.bind<player>(TYPES.player).to(HLSPlayer)
container.bind<jspeeds>(TYPES.jspeeds).to(JumpSpeeds)
container.bind<jposition>(TYPES.jposition).to(JumpPosition)

export default container