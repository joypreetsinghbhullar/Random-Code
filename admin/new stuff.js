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
