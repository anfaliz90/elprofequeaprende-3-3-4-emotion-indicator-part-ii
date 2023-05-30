let random = 0
input.onButtonPressed(Button.A, function () {
    if (random < 30) {
        random += randint(1, 3)
        basic.showNumber(random)
    }
})
input.onButtonPressed(Button.B, function () {
    if (random < 30) {
        random += randint(1, 3)
        basic.showNumber(random)
    }
})
basic.forever(function () {
    if (random >= 30) {
        basic.showIcon(IconNames.Heart)
    }
})
