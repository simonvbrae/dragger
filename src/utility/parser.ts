import fs from 'fs';


function parse(){
    // const file = readFileSync('../public/input.json');
    //@ts-ignore
    console.log("fs (should not be empty object):");
    console.log(fs);
    console.log("readFileSync (should be a function)");
    console.log(fs.readFileSync);
    return "someexamplejsondatabutnotreally"
}

interface MyObj {
    myString: string;
    myNumber: number;
}

type Map = {

}

type Draggable = {
    "id": string,
}

type Input = {
    "draggables": [Draggable]
}

let obj: MyObj = JSON.parse('{ "myString": "string", "myNumber": 4 }');
console.log(obj.myString);
console.log(obj.myNumber);

export default parse;