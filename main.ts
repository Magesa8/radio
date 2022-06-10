input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Double))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Double))
        music.playTone(659, music.beat(BeatFraction.Whole))
        music.playTone(659, music.beat(BeatFraction.Half))
        music.playTone(698, music.beat(BeatFraction.Half))
        music.playTone(659, music.beat(BeatFraction.Half))
        music.playTone(698, music.beat(BeatFraction.Half))
        music.playTone(659, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Double))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Double))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Double))
        music.playTone(330, music.beat(BeatFraction.Whole))
    }
})
radio.onReceivedString(function (receivedString) {
    if ("Left" == receivedString) {
        cuteBot.stopcar()
        cuteBot.moveTime(cuteBot.Direction.left, 50, 0.1)
    } else if ("Back" == receivedString) {
        cuteBot.stopcar()
        cuteBot.backforward()
    } else if ("Right" == receivedString) {
        cuteBot.stopcar()
        cuteBot.moveTime(cuteBot.Direction.right, 50, 0.1)
    } else if ("Forward" == receivedString) {
        cuteBot.stopcar()
        cuteBot.forward()
    }
})
radio.setGroup(253)
