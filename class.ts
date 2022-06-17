abstract class UserAccount {
    name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    logDetails(): void {
        console.log(`The player ${this.name} is ${this.age} years old.`)
    }
}

// const rafa = new UserAccount('Rafa', 31)

// console.log(rafa)
// console.log(rafa.age)

// rafa.logDetails()


class CharAccount extends UserAccount {
    private nickname: string;
    // readonly level: number;
    level: number;

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age)

        this.nickname = nickname
        this.level = level
    }
    logCharDetails(): void {
        console.log(`The player ${this.name} has the char ${this.nickname} at level ${this.level}`)
    }

    get getLevel(){
        return this.level
    }

    set setLevel(level: number) {
        this.level = level
    }
}

const john = new CharAccount('John', 45, 'johnmaster', 80)
console.log(john.name)
// john.nickname = 'josé'
john.logCharDetails()