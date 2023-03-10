let count = 0
input.onButtonPressed(Button.A, function () {
    graph("a", 3)
})
function graph (btn: string, i: number) {
    for (let index = 0; index < i; index++) {
        count = 0
        for (let index = 0; index < 4; index++) {
            led.toggle(count, 4 - count)
            basic.pause(500)
            led.toggle(count, 4 - count)
            count += 1
        }
    }
}
