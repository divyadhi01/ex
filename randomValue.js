let myArray = ["Divya",20,1,true,"Hi",4];
console.log(myArray);

function randomValues(myArray) 
{
    return (myArray[Math.floor(Math.random() * myArray.length)]);
}

var randomNum = randomValues(myArray);
console.log(randomNum);