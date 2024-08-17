def on_button_pressed_b():
    global output, dialacurry, mcdonald, dominos
    output = randint(0, 2)
    if output == 0:
        dialacurry = randint(0, 3)
        basic.show_string("dial a curry")
        if dialacurry == 0:
            basic.show_string("Tandoori Butter Chicken")
        elif dialacurry == 1:
            basic.show_string("Roti")
        elif dialacurry == 2:
            basic.show_string("Veg Spring Roll")
    elif output == 1:
        mcdonald = randint(0, 2)
        basic.show_string("mcdonald")
        if mcdonald == 0:
            basic.show_string("McFlurry")
        elif mcdonald == 1:
            basic.show_string("Burger")
        elif mcdonald == 2:
            basic.show_string("French Fries")
    elif output == 2:
        dominos = randint(0, 2)
        basic.show_string("Dominos")
        if dominos == 0:
            basic.show_string("Dominos")
        elif dominos == 1:
            basic.show_string("Garlic Bread")
        elif dominos == 2:
            basic.show_string("Spicy Peepy Paneer")
        elif dominos:
            basic.show_string("Pepporoni Pizza")
input.on_button_pressed(Button.B, on_button_pressed_b)

# Settings
dominos = 0
mcdonald = 0
dialacurry = 0
output = 0
basic.show_string("CHOOSE RESTAURANT")
basic.show_string("Press on button B to find a random restaurant and a food item from theree!")
