var Personne = /** @class */ (function () {
    function Personne(name, age) {
        this.name = name;
        this.age = age;
    }
    Personne.prototype.getName = function () { return this.name; };
    Personne.prototype.setNAme = function (name) { this.name = name; };
    Personne.prototype.getAge = function () { return this.age; };
    Personne.prototype.setAge = function (age) { this.age = age; };
    //La classe Person disposera également de deux méthodes, tellMyName et tellMyAge, qui afficheront respectivement
    // : I am <name> et I am <age> years old (remplacer <name> et <age> respectivement par les valeurs des attributs name et age).
    Personne.prototype.tellMyName = function () { return 'I am ' + this.name; };
    Personne.prototype.tellMyAge = function () { return 'I am ' + this.age + ' years old'; };
    return Personne;
}());
//Enfin, pour tester ta classe, tu devras instancier deux personnes ayant pour noms et âges respectifs
// "John" et 40, "Mary" et 35, et appeler les méthodes tellMyName et tellMyAge sur chacune de ces instances de Person.
var person = new Personne("John", 40);
person.tellMyName();
console.log(person.tellMyName());
person.tellMyAge();
console.log(person.tellMyAge());
