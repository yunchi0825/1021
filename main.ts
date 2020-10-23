input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            if (x % 2 == y % 2) {
                led.plot(x, y)
            }
        }
    }
})
