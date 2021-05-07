class character {
    constructor(name, phraseGreeting, phraseFight, level){
        this.name = name;
        this.greeting = phraseGreeting;
        this.attack = phraseFight;
        this.lvl = level;
        this.defualtPhrase = "hey"
        this.mood = "nuetral";
    }

    setLevel(newLevel) {
        this.lvl = newLevel;
        console.log(this.lvl);
    }

    speak(moodSelector){
        if (moodSelector == 1){
            this.defualtPhrase = this.greeting;
            this.mood = "happy";
        } else if (moodSelector == 2) {
            this.defualtPhrase = this.attack;
            this.mood = "angry";
        } else {
            this.defualtPhrase = "hey";
            this.mood = "nuetral";
        }
        console.log(this.defualtPhrase)
    }
}


let fighterBro1 = new character("Jaeremy","Wassup homie","Imma break yer face for that!",42,"happy");
console.log (fighterBro1);
let fighterBro2 = new character("Phrog", "Phribbit!", "RIBBIT >:(", 1.2,"angry");
console.log (fighterBro2);

fighterBro1.speak(1);
fighterBro1.setLevel(2);
fighterBro1.speak(2)