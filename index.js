// Write your solution here!
let cats=[ "Milo", "Otis", "Garfield"];
// cats.push("Ralph")
function destructivelyAppendCat(name)
{
cats.push("Ralph");

}
function destructivelyRemoveLastCat(){

    cats.pop();
}
function destructivelyPrependCat(name)
{

    cats.unshift("Bob");
}
function destructivelyRemoveFirstCat(){


    cats.shift();
}
function appendCat(name){

    return [...cats, "Broom"];
}
function prependCat(name)
{

    return ["Arnold", ...cats];
}
// function  removeLastCat()
// {

//    return cats.slice(-1) ;
// }

function removeLastCat() {
    return cats.slice(0, cats.length - 1);
  }
  function removeFirstCat() {
    return cats.slice(1);
  }
  
  

