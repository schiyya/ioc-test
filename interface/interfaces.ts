interface player {
    start(): any
   stop(): any
}

interface jspeeds {
    setSpeed(speed: number): any
    getSpeed(): number
}

interface jposition {
    setPosition(position: number): any
    getPosition(): number
}

export {player, jspeeds, jposition}
