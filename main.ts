radio.onReceivedNumber(function (receivedNumber) {
	
})
input.onButtonPressed(Button.AB, function () {
	
})
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.No)
        basic.showLeds(`
            . # # # .
            # . . . #
            # # # # #
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            # . . . #
            . # # # .
            . . . . .
            # . # . #
            # . # . #
            `)
    }
})
basic.forever(function () {
	
})
