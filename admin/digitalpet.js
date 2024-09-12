function food () {
    if (hangry == 0) {
        basic.showString("Sushi")
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else if (hangry == 1) {
        basic.showString("Pizza")
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (hangry == 2) {
        basic.showString("Cookie")
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    } else if (hangry == 3) {
        basic.showString("Rice")
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            `)
    } else if (hangry == 4) {
        basic.showString("Chocolate")
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else if (hangry == 5) {
        basic.showString("Fries")
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            `)
    }
}
// Update lastInteraction on button presses
input.onButtonPressed(Button.A, function () {
    lastInteraction = input.runningTime()
    death = false
    emotion += 1
    emotions()
})
input.onButtonPressed(Button.B, function () {
    lastInteraction = input.runningTime()
    death = false
    cricket()
})
input.onGesture(Gesture.Shake, function () {
    lastInteraction = input.runningTime()
    death = false
    hangry += 1
    hangry = randint(0, 5)
    if (death == false) {
        food()
    }
})
function cricket () {
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    score += 1
    score = randint(0, 6)
    if (score == 0) {
        basic.showString("You scored a 1")
    } else if (score == 1) {
        basic.showString("You scored a 2")
    } else if (score == 2) {
        basic.showString("You scored a 3")
    } else if (score == 3) {
        basic.showString("You scored a 4")
    } else if (score == 4) {
        basic.showString("You scored a 6")
    } else if (score == 5) {
        basic.showString("You got out")
    } else if (score == 6) {
        basic.showString("You got out")
    }
}
let death = false
let lastInteraction = 0
let score = 0
let hangry = 0
let emotion = 3
hangry = 0
score = 0
instructions()
start()
pet_rarity()
basic.forever(function () {
    // Check if 15 minutes (900,000 milliseconds) have passed since the last interaction
    if (input.runningTime() - lastInteraction > 90000) {
        death = true
    }
})
