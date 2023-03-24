// Write your solution here!
//Create an array
const cats =  ["Milo", "Otis", "Garfield"];

//A function to add an element to the end of arr 'push'
function destructivelyAppendCat(name){
    
    return cats.push(name);
}
//A function to add an element to the first of arr 'unshift'
function destructivelyPrependCat(name){
    
    return cats.unshift(name);
}
//A function to remove an element to the last of arr 'pop'
function destructivelyRemoveLastCat(){
    return cats.pop();
}

//A function to remove an element to the first of arr 'shift'
function destructivelyRemoveFirstCat(){
    return cats.shift();
}

//Create a copy of array and leave the original unchaged and then pass an element to the end
function appendCat(name){
    //const newArr = [...cats,name];
    return [...cats,name];
}

//Create a copy of array and leave the original unchaged and then pass an element to the beggining
function prependCat(name){
    //const newArr = [name,...cats];
    return [name,...cats];
}
function removeLastCat(){
    //const copyCats = [...cats];
    //return copyCats.slice(0,1);
    return [...cats].slice(0,-1);
}
function removeFirstCat(){
    //const copyCats = [...cats]
    //return copyCats.slice(1)
    return [...cats].slice(1)
}
