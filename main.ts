let x0 = 0
let y0 = 0
let j = 0
let x1 = 0
let y1 = 0
let x2 = 0
function showLed (x: string, y: string, dir: string) {
	
}
basic.forever(function () {
    x0 = 4
    y0 = 0
    for (let I = 0; I <= 4; I++) {
        j = 0
        led.plot(x0, y0)
        while (j <= I - 1) {
            let y2 = 0
            j += 1
            x1 = x0
            y1 = y0 - j
            x2 = x0 + j
            led.plot(x1, y1)
            led.plot(x2, y2)
        }
        basic.pause(200)
        x0 = x0 - 1
        y0 = y0 + 1
    }
    basic.clearScreen()
})
basic.forever(function () {
    showLed("0", "0", "0")
    showLed("4", "0", "1")
    showLed("0", "4", "2")
    showLed("4", "4", "3")
})
