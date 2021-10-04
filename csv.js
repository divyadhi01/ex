var data= "Hi,I,am,Divya,1";
console.log(data);

var array=[];

var splitData=data.split();
console.log(splitData);

for(var i=0; i<splitData.length; i++)
{
var newData= splitData[i].split(",");
array.push(newData);
}

console.log(array);
console.log(array[0][0]);
console.log(array[0][1]);
console.log(array[0][2]);
console.log(array[0][3]);