class Personne {
    private name : string;
    private age : number;

    constructor(name: string, age: number)
    {
        this.name = name;
        this.age = age;
    }

    public getName() { return this.name; }
    public setNAme(name: string) { this.name = name; }

    public getAge() { return this.age;}
    public setAge(age: number) { this.age = age; }


    public tellMyName() { return 'I am ' + this.name ;}
    public tellMyAge() { return 'I am ' + this.age + ' years old';}
}


const person = new Personne("John",40);
person.tellMyName();
console.log(person.tellMyName())
person.tellMyAge();
console.log(person.tellMyAge())
