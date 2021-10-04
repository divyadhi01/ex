var obj1={ 
    name:"Divya.T", 
    age:21,
    Dob:2000
};
var obj2={ 
    name:"DivyaT", 
    age:20,
    Dob:2000
};
var val1 = (Object.values(obj1));
console.log(val1);
var val2 = (Object.values(obj2));
console.log(val2);
for(let a of val1)
{
for(let b of val2)
{
if (a===b) 
    {
        console.log("Same");
        }
        else{
        console.log("Different");
        }
    }
}