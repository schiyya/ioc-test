import { injectable, inject } from 'inversify'
import TYPES from '../interface/types'
import 'reflect-metadata'
import {player, jspeeds, jposition} from '../interface/interfaces'

@injectable()
class JumpPosition implements jposition {
    public setPosition (position: number) { 
    }
    public getPosition () {
        console.log('Return Position')
        return 1
    }
}


@injectable() 
class JumpSpeeds implements jspeeds {
    public setSpeed (speed: number) {
    }
    public getSpeed () {
        console.log('Return Speed')
        return 1
    }
}



@injectable()
class HLSPlayer implements player {
    private _jumpSpeeds: JumpSpeeds
    private _jumpPosition: JumpPosition
    private position: number
    private speed: number
    constructor ( @inject(TYPES.jspeeds) _jumpSpeeds: JumpSpeeds, @inject(TYPES.jposition) _jumpPosition: JumpPosition) {
       this._jumpSpeeds = _jumpSpeeds
       this._jumpPosition = _jumpPosition
       this.position = 0
       this.speed = 0
    }
    public start() {
        this._jumpPosition.setPosition(0)
        this._jumpPosition.getPosition()
        console.log("Hello");
        
        this._jumpSpeeds.setSpeed(1)
        this._jumpSpeeds.getSpeed()
        this.position = 2
        this.speed = 1
    }
    public stop() {
        this._jumpPosition.setPosition(0)
        this._jumpSpeeds.setSpeed(0)
        this.position = 0
        this.speed = 0
    }
}


export {JumpPosition, JumpSpeeds, HLSPlayer}

