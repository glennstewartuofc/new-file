let i = 0
let count = 0
let acc_x = 0
let acc_y = 0
let isEast = false
function pin_select () {
    while (true) {
        if (input.pinIsPressed(TouchPin.P0)) {
            return 1
        } else {
            if (input.pinIsPressed(TouchPin.P1)) {
                return 2
            } else {
                if (input.pinIsPressed(TouchPin.P2)) {
                    return 3
                }
            }
        }
    }
}
input.onButtonPressed(Button.A, function () {
    graph("A")
})
function graph (btn: string) {
    i = pin_select()
    basic.showString(btn)
    basic.clearScreen()
    basic.showString("" + (i))
    basic.clearScreen()
    for (let index = 0; index < i; index++) {
        count = 0
        if (btn == "A") {
            for (let index = 0; index < 5; index++) {
                led.toggle(count, 4 - count)
                basic.pause(100)
                led.toggle(count, 4 - count)
                count += 1
            }
        } else {
            if (btn == "B") {
                for (let index = 0; index < 5; index++) {
                    led.toggle(count, count)
                    basic.pause(100)
                    led.toggle(count, count)
                    count += 1
                }
            } else {
                if (btn == "A+B") {
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
                        `)
                    basic.pause(100)
                    basic.showLeds(`
                        . . . . .
                        . . # . .
                        . # # # .
                        . . # . .
                        . . . . .
                        `)
                    basic.pause(100)
                    basic.showLeds(`
                        . . # . .
                        . . # . .
                        # # # # #
                        . . # . .
                        . . # . .
                        `)
                    basic.pause(100)
                    basic.clearScreen()
                    basic.pause(200)
                }
            }
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    graph("A+B")
})
input.onButtonPressed(Button.B, function () {
    graph("B")
})
basic.forever(function () {
    acc_x = input.acceleration(Dimension.X)
    acc_y = input.acceleration(Dimension.Y)
    isEast = input.compassHeading() == 0
})
