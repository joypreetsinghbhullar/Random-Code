input.onButtonPressed(Button.A, function () {
    if (daySelected == "no") {
        basic.showString("" + (week[nextDay]))
        nextDay += 1
        if (nextDay == 4) {
            nextDay = 0
        }
    }
    if (daySelected == "yes") {
        if (nextDay == 1) {
            basic.showString("" + (monday[nextSubject]))
            nextSubject += 1
            if (nextSubject == 4) {
                nextSubject = 0
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (nextDay == 1) {
        daySelected = "yes"
    }
})
let monday: string[] = []
let week: string[] = []
let nextDay = 0
let nextSubject = 0
let daySelected = ""
let subjectSelected = "no"
daySelected = "no"
nextSubject = 0
let nextTool = 0
nextDay = 0
week = [
"mo",
"tu",
"we",
"th",
"fr"
]
monday = ["1", "2", "3"]
let tuesday = ["4", "5", "6"]
let wednesday = ["7", "8", "9"]
let thursday = ["10", "11", "12"]
let friday = ["13", "14", "15"]
let hpeTools = ["16", "17", "18"]
let mathsTools = ["Ruler", "Graph_Book", "Case"]
let englishTools = ["Dictionary", "Book"]
let chineseTools = ["TextBooks", "Graph_Book", "Case"]
basic.forever(function () {
	
})
