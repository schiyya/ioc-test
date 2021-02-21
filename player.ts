class Player {
    private title: string
    private duration_sec: number
    private bookmark: number
    private url: string
    constructor(title: string, url: string, duration: number, position: number) {
        this.title = title
        this.url = url
        this.duration_sec = duration
        this.bookmark = !position ? 0 : position
        console.log('Created New Player');
        
    }
    public getTitle(): string {
        return this.title
    }

    public getDuration(): number {
        console.log(this.duration_sec);
        
        return this.duration_sec
    }

    public getBookmark(): number {
        return this.bookmark
    }

    public getUrl(): string {
        return this.url
    }
}

export {Player}