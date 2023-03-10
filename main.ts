let count = 0
input.onButtonPressed(Button.A, function () {
    graph("a", 3)
})
function graph (btn: string, i: number) {
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
    graph("b", 4)
})
