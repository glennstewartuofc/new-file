let i = 0
let count = 0
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
    graph("a")
})
function graph (btn: string) {
    i = pin_select()
    for (let index = 0; index < i; index++) {
        count = 0
        if (btn == "a") {
            for (let index = 0; index < 5; index++) {
                led.toggle(count, 4 - count)
                basic.pause(100)
                led.toggle(count, 4 - count)
                count += 1
            }
        } else {
            if (btn == "b") {
                for (let index = 0; index < 5; index++) {
                    led.toggle(count, count)
                    basic.pause(100)
                    led.toggle(count, count)
                    count += 1
                }
            }
        }
    }
}
input.onButtonPressed(Button.B, function () {
    graph("b")
})
