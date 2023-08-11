class Game {
    // code to be added
constructor() {
    this.startScreen = document.getElementById('game-into')
    this.gameScreen
    this.height = 600
    this.width = 500
    this.player = new Player(this.gameScreen)
}

start() {
    this.gameScreen.style.width = `${this.width}px``
    this.gameScreen.style.height = `${this.width}px``

    this.startScreen.style.display = 'none'
    this.gameScreen.style.display = 'black'
}

gameLoop() {
    this.update()

    requestAnimationFrame(() => this.gameLoop())
}

update() {
    console.log('Update')
}
}



class Player {
    constructor(gameScren) {
        this.directionX = 0
        this.directionY = 0

    }
}