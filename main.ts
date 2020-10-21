input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showIcon(IconNames.Heart)
    basic.showString("hola")
})
