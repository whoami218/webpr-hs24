
const radius = 10;
const ball = {x:20, y:20, dx: 5, dy: 8};
let   old  = {x: ball.x, y: ball.y};

function start() {
    const canvas  = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.fillStyle = "black";

    setInterval(() => {
        nextBoard();
        display(context);
    }, 1000 / 20);
}

function nextBoard() {
    const canvas  = document.getElementById("canvas");
    // keep old ball values for the sake of efficient clearing of the old display
    old = {x: ball.x, y: ball.y}
    // handle ball is hitting the bounds
    if (ball.y + radius > canvas.height || ball.y - radius < 0) {
        // ball.x -= ball.dx;
        ball.dy = -ball.dy;
    }
    ball.y += ball.dy;
    //   reverse direction
    //   lose some energy relative to the current inertia (only velocity varies)

    // calculate new position
    // calculate any changes in velocity due to gravitational pull or medium resistance


}

function display(context) {
    context.clearRect(old.x - radius - 1 , old.y - radius -1 , 22, 22 );
    fillBox(context)
}

function fillBox(context) {
    context.beginPath();
    context.arc(ball.x, ball.y, radius, 0, 6.3, false);
    context.fill();
}


