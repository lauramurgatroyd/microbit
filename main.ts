let moving = 0
let degrees = 0
input.onButtonPressed(Button.A, function () {
    if (moving == 1) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor1)
        kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor2)
        moving = 0
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, 100)
        kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Forward, 100)
        moving = 1
    }
})
input.onButtonPressed(Button.B, function () {
    music.playTone(262, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(262, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Double))
    basic.pause(10)
    music.playTone(262, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(262, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Double))
    basic.pause(10)
    music.playTone(262, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(262, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Double))
    basic.pause(10)
    music.playTone(466, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(466, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Double))
})
basic.forever(function () {
    degrees = input.compassHeading()
})
