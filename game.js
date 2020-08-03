import { update as updateSnake, draw as drawSnake,SNAKE_SPEED, getSnakeHead, snakeInterSection} from './snake.js'
import { update as updateFood, draw as drawFood} from './food.js'
import { outSideGrid } from './grid.js'


let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime){

    if(gameOver){
        if(confirm('You Lost. Press OK to restart.')){
            window.location = '/'
        }
        return
    }


    window.requestAnimationFrame(main)
    const secondsScienceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsScienceLastRender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime
 

    update()
    draw()
   
}
window.requestAnimationFrame(main)

function update(){
    updateSnake()
    updateFood()
    checkDeath()
}

function draw(){
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath(){
    gameOver = outSideGrid(getSnakeHead()) || snakeInterSection()
}