function isTouching(obstacle1,obstacle2){
    if(obstacle1.x - obstacle2.x < obstacle1.width/2 + obstacle2.width/2 
        && obstacle2.x - obstacle1.x < obstacle1.width/2 + obstacle2.width/2  
        && obstacle2.y - obstacle1.y < obstacle1.height/2 + obstacle2.height/2 
        && obstacle1.y - obstacle2.y < obstacle1.height/2 + obstacle2.height/2){
            return true;
        }
        else{
            return false;
        }
}

function bounceOff(obstacle1,obstacle2){
    if(obstacle1.x - obstacle2.x < obstacle1.width/2 + obstacle2.width/2 
        && obstacle2.x - obstacle1.x < obstacle1.width/2 + obstacle2.width/2){
        obstacle2.velocityX = -1 * obstacle2.velocityX;
        obstacle1.velocityX = -1 * obstacle2.velocityX;
    }

    else if(obstacle1.y - obstacle2.y < obstacle1.height/2 + obstacle2.height/2 
        && obstacle2.y - obstacle1.y < obstacle1.height/2 + obstacle2.height/2){
            obstacle2.velocityY = -1 * obstacle2.velocityY;
            obstacle1.velocityY = -1 * obstacle2.velocityY;
        }


}