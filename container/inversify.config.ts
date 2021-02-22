import { Container } from "inversify";
import TYPES from "../interface/types";
import {player, jspeeds, jposition} from '../interface/interfaces'
import {JumpPosition, JumpSpeeds, HLSPlayer} from '../lib/hlsPlayer'

const container = new Container();

container.bind<player>(TYPES.player).to(HLSPlayer)
container.bind<jspeeds>(TYPES.jspeeds).to(JumpSpeeds)
container.bind<jposition>(TYPES.jposition).to(JumpPosition)

export default container