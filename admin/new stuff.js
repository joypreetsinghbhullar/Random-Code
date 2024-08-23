let day_of_week = 0
function PE () {
    basic.showString("Uniform")
    basic.showString("Water bottle")
    basic.showString("Hat")
}
input.onButtonPressed(Button.A, function () {
    if (day_of_week == 1) {
        basic.showString("monday", 85)
basic.pause(100)
        basic.showString("maths", 85)
Maths()
        basic.showString("pe", 85)
PE()
        basic.showString("french", 85)
French()
    } else if (day_of_week == 2) {
        basic.showString("tuesday", 85)
basic.pause(100)
        basic.showString("science", 85)
Science()
        basic.showString("french", 85)
French()
        basic.showString("pe", 85)
PE()
    } else if (day_of_week == 3) {
        basic.showString("wednesday", 85)
basic.pause(100)
        basic.showString("maths", 85)
Maths()
        basic.showString("pe", 85)
PE()
        basic.showString("science", 85)
Science()
    } else if (day_of_week == 4) {
        basic.showString("thursday", 85)
basic.pause(100)
        basic.showString("science", 85)
Science()
        basic.showString("maths", 85)
Maths()
        basic.showString("french", 85)
French()
    } else if (day_of_week == 5) {
        basic.showString("friday", 85)
basic.pause(100)
        basic.showString("pe", 85)
PE()
        basic.showString("science", 85)
Maths()
        basic.showString("maths", 85)
Maths()
    } else {
    	
    }
})
function Maths () {
    basic.showString("Calculator")
    basic.showString("Ruler")
    basic.showString("Graph book")
}
input.onButtonPressed(Button.B, function () {
    day_of_week += 1
    basic.showString("" + day_of_week)
    if (day_of_week == 5) {
        day_of_week = 0
    }
})
function French () {
    basic.showString("Textbook")
    basic.showString("Notebook")
    basic.showString("Pencil")
}
function Science () {
    basic.showString("Laptop")
    basic.showString("Notebook")
    basic.showString("Pencil")
}
