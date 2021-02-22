import { injectable, inject } from 'inversify'
import TYPES from './types'
import 'reflect-metadata'
import {player, jspeeds, jposition} from './interfaces'

@injectable()
class JumpPosition implements jposition {
    public setPosition (position: number) { 
    }
    public getPosition () {
        return 1
    }
}


@injectable() 
class JumpSpeeds implements jspeeds {
    public setSpeed (speed: number) {
    }
    public getSpeed () {
        return 1
    }
}



@injectable()
class HLSPlayer implements player {
    private _jumpSpeeds: JumpSpeeds
    private _jumpPosition: JumpPosition
    constructor ( @inject(TYPES.jspeeds) _jumpSpeeds: JumpSpeeds, @inject(TYPES.jposition) _jumpPosition: JumpPosition) {
       this._jumpSpeeds = _jumpSpeeds
       this._jumpPosition = _jumpPosition
    }
    public start() {
        this._jumpPosition.setPosition(0)
        this._jumpSpeeds.setSpeed(1)
    }
    public stop() {
        this._jumpPosition.setPosition(0)
        this._jumpSpeeds.setSpeed(0)
    }
}


export {JumpPosition, JumpSpeeds, HLSPlayer}

