class shape {
    //DEFAULT CONSTRUCTOR- NO PARAMETERS AND NO BODY
    constructor() { }
    // This is a constructor with parameters
    constructor(text, color) {
        this.text = text
        this.color = color
    }
    //setter method allows me to set the value 
    setText(text) {
        this.text = text
    }
    setColor(color) {
        this.color = color
    }
    //getter method allows me to get the values that I just set
    getText() {
        return this.text;
    }
    getColor() {
        return this.color;

    }
}


