import container  from './inversify.config';
import TYPES from './types'
import {player, jspeeds, jposition} from './interfaces'

const ironman = container.get<player>(TYPES.player)

ironman.start()