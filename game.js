// let buttonColours = ["red", "blue", "green", "yellow"]
// let gamePattern = []
// let userClickedPattern = []
// let level = 0
// let started = false

// $(document).keydown(function () {
//     if (!started) {
//         $("#level-title").text(`Level ${level}`)
//         nextSequence();
//         started = true
//     }
// })

// $(document).on('touchstart', function() {
//     if (!started) {
//         $("#level-title").text(`Level ${level}`)
//         nextSequence();
//         started = true
//     }
//  });
 

// $(".btn").click(function () {
//     let userChosenColour = $(this).attr("id")
//     userClickedPattern.push(userChosenColour)
//     playSound(userChosenColour)
//     animatePress(userChosenColour)
//     checkAnswer(userClickedPattern.length - 1)
// })

// function checkAnswer(currentLevel) {
//     if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
//         if (userClickedPattern.length === gamePattern.length) {
//             setTimeout(function () {
//                 nextSequence()
//             }, 1000)
//         }
//     } else {
//         playSound("wrong")
//         $("body").addClass("game-over")
//         $("level-title").text("Game Over, press Any Key to Restart")

//         setTimeout(function () {
//             $("body").removeClass("game-over")
//         }, 200)
//         startOver()
//     }

// }

// function nextSequence() {
//     userClickedPattern = []

//     level++

//     $("#level-title").text(`Level ${level}`)

//     randomNumber = Math.floor(Math.random() * 4);
//     let randomChosenColor = buttonColours[randomNumber]
//     gamePattern.push(randomChosenColor)

//     $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100)
//     playSound(randomChosenColor)
// }

// function animatePress(currentColor) {
//     $(`#${currentColor}`).addClass("pressed")
//     setTimeout(function () {
//         $(`#${currentColor}`).removeClass("pressed")
//     }, 100)
// }

// function playSound(name) {
//     const audio = new Audio(`sounds/${name}.mp3`)
//     audio.play()
// }

// function startOver() {
//     level = 0
//     gamePattern = []
//     started = false
// }

let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false;

// Detectar tanto la pulsación de teclas como el toque para iniciar el juego.
$(document).on('keydown touchstart', function (event) {
    if (!started) {
        $("#level-title").text(`Level ${level}`);
        nextSequence();
        started = true;
        event.preventDefault(); // Evitar el comportamiento táctil predeterminado.
    }
});

$(".btn").on('mousedown touchstart', function (event) {
    event.preventDefault(); // Evitar el comportamiento táctil predeterminado.

    if (started) {
        handleButtonClick($(this).attr("id"));
    }
});

function handleButtonClick(color) {
    userClickedPattern.push(color);
    playSound(color);
    animatePress(color);
    checkAnswer(userClickedPattern.length - 1);
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, press Any Key to Restart");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        startOver();
    }
}

function nextSequence() {
    userClickedPattern = [];

    level++;

    $("#level-title").text(`Level ${level}`);

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);

    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

function animatePress(currentColor) {
    $(`#${currentColor}`).addClass("pressed");
    setTimeout(function () {
        $(`#${currentColor}`).removeClass("pressed");
    }, 100);
}

function playSound(name) {
    const audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}
