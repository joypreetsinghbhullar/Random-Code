input.onButtonPressed(Button.B, function () {
    output = randint(0, 2)
    if (output == 0) {
        dialacurry = randint(0, 3)
        basic.showString("dial a curry")
        if (dialacurry == 0) {
            basic.showString("Tandoori Butter Chicken")
        } else if (dialacurry == 1) {
            basic.showString("Roti")
        } else if (dialacurry == 2) {
            basic.showString("Veg Spring Roll")
        }
    } else if (output == 1) {
        mcdonald = randint(0, 2)
        basic.showString("mcdonald")
        if (mcdonald == 0) {
            basic.showString("McFlurry")
        } else if (mcdonald == 1) {
            basic.showString("Burger")
        } else if (mcdonald == 2) {
            basic.showString("French Fries")
        }
    } else if (output == 2) {
        dominos = randint(0, 2)
        basic.showString("Dominos")
        if (dominos == 0) {
            basic.showString("Dominos")
        } else if (dominos == 1) {
            basic.showString("Garlic Bread")
        } else if (dominos == 2) {
            basic.showString("Spicy Peepy Paneer")
        } else if (dominos) {
            basic.showString("Pepporoni Pizza")
        }
    }
})
// Settings
let dominos = 0
let mcdonald = 0
let dialacurry = 0
let output = 0
basic.showString("CHOOSE RESTAURANT")
basic.showString("Press on button B to find a random restaurant and a food item from theree!")
