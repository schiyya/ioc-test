import { injectable, inject } from 'inversify'
import TYPES from './types'
import 'reflect-metadata'
import {player, jspeeds, jposition} from './interfaces'

@injectable()
class JumpPosition implements jposition {
    public setPosition (position: number) {
        // console.log('Set Position ' + position); 
    }
    public getPosition () {
        // console.log('Get Position');
        return 1
    }
}


@injectable() 
class JumpSpeeds implements jspeeds {
    public setSpeed (speed: number) {
        // console.log('Set Speed ' + speed); 
    }
    public getSpeed () {
        // console.log('Get Speed');
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



// class HLSPlayer implements TYPES.Iplay {

//     private _position: number
//     private _speed: number
//     constructor() {
//         this._position = 0
//         this._speed = 1
//     }
//     start(player: Player):any {
//         console.log('Play started from ' + player.getBookmark());
//         this._position = player.getBookmark()
//         this._speed = 1
//         return true
//     }

//     getPosition(): number {
//         return this._position + 1
//     }

//     increment(): any {
//         setTimeout(()=> {
//             this._position++;
//             console.log('Incrementing position');
//             this.increment()
//         }, 1000)
//     }

//     setPosition(position: number): any {
//         this._position = position
//     }

//     getSpeed(): number {
//         return this._speed
//     }

//     setSpeed(speed: number): any {
//         this._speed = speed
//     }
//  }