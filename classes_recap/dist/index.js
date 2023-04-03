class Player {
    static description = "Player in Our Game";
    // static methods/properties on Class, not instance
    #score = 0;
    // # indicates private property/method
    #numLives = 10;
    constructor(first, last) {
       this.first = first;
       this.last = last;
       this.#secret();
    }
    // method which instantiates a new instance of a class w defined properties/values
    static randomPlayer(){
        return new Player("Andy", "Samberg")
    }

    get fullName() {
        return `${this.first} ${this.last}`;
    }
    set fullName(newName) {
        const [first, last] = newName.split(" ")
        this.first = first;
        this.last = last;
    }
    // method  which allows new values to be set to defined properties of class
    get score(){
        return this.#score;
    }
    set score(newScore){
        if (newScore < 0){
            throw new Error("score must be positive!");
        }
        this.#score = newScore;
    }

}

//what if we want to extend a class, i.e. super player or admin player
class AdminPlayer extends Player {
    constructor(first, last, powers){
        super(first, last);
        this.powers = powers;
    }
    isAdmin = true;
}
// AdminPlayer has all same properties/methods as Player class but also isAdmin property
    //must add super() to tell JS to run the parent class constructor before the child Class constructor