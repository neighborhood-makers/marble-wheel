hummingbird.startHummingbird()
basic.forever(function () {
    hummingbird.setRotationServo(FourPort.One, randint(-20, -25))
    basic.showLeds(`
        # # # . .
        # # # . .
        # # # . .
        . . . . .
        . . . . .
        `)
    basic.pause(5000)
    hummingbird.setRotationServo(FourPort.One, 10)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # #
        . . # # #
        . . # # #
        `)
    basic.pause(2000)
})
