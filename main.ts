let hungreness = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        hungreness = hungreness + 1
        basic.showNumber(hungreness)
    } else {
        if (input.buttonIsPressed(Button.B)) {
            hungreness = 0
        }
    }
})
