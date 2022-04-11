let variable: string | null = "hello";
variable = null;

//string
let variable2 = "hello"; //type inference

//array
let arr1: number[] = [1,2,3,4];
let arr: (number | string)[] = [1,2,3,4, "hello"];

//number
let nr1 = 2;
let nr2 = 2.1;

//null, undefined
let nullish: null = null

//objects/optional properties
let person:{name: string; age: number; employed: boolean; country?:string} = {name: "Eike", age:28, employed: true};
//let person = {name: "Eike", age:28, employed: true};
person.country = "GER";

interface Person{
    name: string;
    age: number;
    employed: boolean;
    country?:string;
}

interface Pet{
    //name: string;
    age: number;
    owner?: Person;
}

interface PetList{
    id: string;
    list: Pet[];
}

let pet: Pet = {name: "Petti", age: 2};

let list: PetList = {id: "123", list: [pet]};

class Car{
    public brand: string;
    private wheelCount: number;

    constructor(b: string, count: number) {
        this.brand = b;
        this.wheelCount = count;
    }

    public honk(times: number): void{
        console.log("honked ", times, "times!");
    }
}

//let audi: Car = new Car("Audi", 4);
let audi = new Car("Audi", 4);
//audi.honk("hello"); => not allowed
audi.honk(4);

function sum(a: number, b: number): number{
    return a+b;
}

//BAD WORKAROUND
let example: any = "hallo";
example = true;
example = null;
example = [];