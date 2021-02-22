import container  from './inversify.config';
import TYPES from './interface/types'
import {player, jspeeds, jposition} from './interface/interfaces'

const firstMovie = container.get<player>(TYPES.player)

firstMovie.start()