let moving = false
function stop_moving () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor1)
    kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor2)
    moving = false
}
input.onButtonPressed(Button.A, function () {
    if (moving == true) {
        stop_moving()
    } else {
        stop_moving()
    }
})
function reverse () {
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Reverse, 100)
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Reverse, 100)
}
function turn_left () {
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, 100)
    kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor2)
    basic.pause(1000)
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, 100)
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "go") {
        start_moving()
    } else if (receivedString == "stop") {
        stop_moving()
    } else if (receivedString == "reverse") {
        reverse()
    } else if (receivedString == "turn") {
        turn_left()
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
function start_moving () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, 100)
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Forward, 100)
    moving = true
}
